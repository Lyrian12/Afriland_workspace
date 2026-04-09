import { createServer } from "http";
import { Server } from "socket.io";
import { prisma } from "./lib/prisma";
import { MemberStatus, MessageType } from "./src/generated/prisma/client";

type SocketAuth = {
  userId?: string;
  spaceId?: string;
};

type PresenceEntry = {
  userId: string;
  userName: string;
  avatar: string | null;
  sockets: Set<string>;
};

type PresenceBySpace = Map<string, Map<string, PresenceEntry>>;

const presenceBySpace: PresenceBySpace = new Map();

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

function ensureSpacePresence(spaceId: string) {
  if (!presenceBySpace.has(spaceId)) {
    presenceBySpace.set(spaceId, new Map());
  }
  return presenceBySpace.get(spaceId)!;
}

function addUserPresence(
  spaceId: string,
  userId: string,
  userName: string,
  avatar: string | null,
  socketId: string,
) {
  const spacePresence = ensureSpacePresence(spaceId);
  const existing = spacePresence.get(userId);

  if (existing) {
    existing.userName = userName;
    existing.avatar = avatar;
    existing.sockets.add(socketId);
    return;
  }

  spacePresence.set(userId, {
    userId,
    userName,
    avatar,
    sockets: new Set([socketId]),
  });
}

function removeUserPresence(spaceId: string, userId: string, socketId: string) {
  const spacePresence = presenceBySpace.get(spaceId);
  if (!spacePresence) return;

  const existing = spacePresence.get(userId);
  if (!existing) return;

  existing.sockets.delete(socketId);
  if (existing.sockets.size === 0) {
    spacePresence.delete(userId);
  }

  if (spacePresence.size === 0) {
    presenceBySpace.delete(spaceId);
  }
}

async function emitSpaceParticipants(spaceId: string) {
  const members = await prisma.spaceMember.findMany({
    where: {
      spaceId,
      status: MemberStatus.ACTIVE,
    },
    select: {
      role: true,
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      },
    },
    orderBy: {
      joinedAt: "asc",
    },
  });

  const spacePresence = presenceBySpace.get(spaceId);

  const participants = members.map((member) => ({
    id: member.user.id,
    name: member.user.name || member.user.email.split("@")[0],
    avatar: member.user.avatar,
    role: member.role,
    isOnline: Boolean(spacePresence?.has(member.user.id)),
  }));

  io.to(`space:${spaceId}`).emit("space_participants", participants);
}

io.on("connection", async (socket) => {
  const { userId, spaceId } = (socket.handshake.auth || {}) as SocketAuth;
  if (!userId || !spaceId) {
    socket.disconnect(true);
    return;
  }

  const membership = await prisma.spaceMember.findFirst({
    where: {
      userId,
      spaceId,
      status: MemberStatus.ACTIVE,
    },
    select: {
      user: {
        select: {
          name: true,
          avatar: true,
          email: true,
        },
      },
    },
  });

  if (!membership) {
    socket.disconnect(true);
    return;
  }

  const userName = membership.user.name || membership.user.email.split("@")[0];
  const avatar = membership.user.avatar;

  socket.data.userId = userId;
  socket.data.spaceId = spaceId;
  socket.data.userName = userName;
  socket.data.avatar = avatar;

  socket.join(`space:${spaceId}`);
  addUserPresence(spaceId, userId, userName, avatar, socket.id);
  await emitSpaceParticipants(spaceId);

  socket.on("join_channel", async (payload: { channelId?: string }) => {
    const channelId = payload?.channelId?.trim();
    if (!channelId) return;

    const channel = await prisma.channel.findFirst({
      where: {
        id: channelId,
        spaceId,
      },
      select: {
        id: true,
      },
    });

    if (!channel) return;

    socket.join(`channel:${channelId}`);
    socket.emit("channel_joined", { channelId });
  });

  socket.on(
    "send_message",
    async (payload: { channelId?: string; content?: string; type?: MessageType | string }) => {
      const channelId = payload?.channelId?.trim();
      const content = payload?.content?.trim();
      if (!channelId || !content) return;

      const channel = await prisma.channel.findFirst({
        where: {
          id: channelId,
          spaceId,
        },
        select: {
          id: true,
        },
      });

      if (!channel) return;

      const rawType = payload?.type;
      const messageType = Object.values(MessageType).includes(rawType as MessageType)
        ? (rawType as MessageType)
        : MessageType.TEXT;

      const message = await prisma.message.create({
        data: {
          channelId,
          userId,
          content,
          type: messageType,
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          sender: {
            select: {
              id: true,
              name: true,
              avatar: true,
              email: true,
            },
          },
        },
      });

      io.to(`channel:${channelId}`).emit("new_message", {
        id: message.id,
        content: message.content,
        createdAt: message.createdAt.toISOString(),
        sender: {
          id: message.sender.id,
          name: message.sender.name || message.sender.email.split("@")[0],
          avatar: message.sender.avatar,
        },
      });
    },
  );

  socket.on("typing_start", (payload: { channelId?: string }) => {
    const channelId = payload?.channelId?.trim();
    if (!channelId) return;
    if (!socket.rooms.has(`channel:${channelId}`)) return;

    socket.to(`channel:${channelId}`).emit("user_typing", {
      userId,
      userName,
    });
  });

  socket.on("typing_stop", (payload: { channelId?: string }) => {
    const channelId = payload?.channelId?.trim();
    if (!channelId) return;
    if (!socket.rooms.has(`channel:${channelId}`)) return;

    socket.to(`channel:${channelId}`).emit("user_stopped_typing", {
      userId,
    });
  });

  socket.on("disconnect", async () => {
    removeUserPresence(spaceId, userId, socket.id);
    await emitSpaceParticipants(spaceId);
  });
});

httpServer.listen(3001, () => {
  console.log("Socket server running on http://localhost:3001");
});
