"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSocket } from "./useSocket";

export type ChatMessage = {
  id: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    avatar: string | null;
  };
};

export type TypingUser = {
  userId: string;
  userName: string;
};

export type RealtimeParticipant = {
  id: string;
  name: string;
  avatar: string | null;
  role: string;
  isOnline: boolean;
};

type UseChatParams = {
  channelId: string | null;
  userId: string;
  userName: string;
  avatar: string | null;
  spaceId: string | null;
};

export function useChat({ channelId, userId, userName, avatar, spaceId }: UseChatParams) {
  const { socket, isConnected } = useSocket({ userId, spaceId });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([]);
  const [participants, setParticipants] = useState<RealtimeParticipant[]>([
    {
      id: userId,
      name: userName,
      avatar,
      role: "MEMBER",
      isOnline: true,
    },
  ]);

  useEffect(() => {
    setParticipants([
      {
        id: userId,
        name: userName,
        avatar,
        role: "MEMBER",
        isOnline: true,
      },
    ]);
    setTypingUsers([]);
  }, [avatar, spaceId, userId, userName]);

  useEffect(() => {
    setTypingUsers([]);

    if (!channelId) {
      setMessages([]);
      return;
    }

    const controller = new AbortController();

    const loadMessages = async () => {
      try {
        const response = await fetch(`/api/space/messages?channelId=${encodeURIComponent(channelId)}`, {
          method: "GET",
          signal: controller.signal,
        });
        if (!response.ok) {
          setMessages([]);
          return;
        }
        const payload = (await response.json()) as { messages?: ChatMessage[] };
        setMessages(payload.messages ?? []);
      } catch {
        setMessages([]);
      }
    };

    void loadMessages();

    return () => {
      controller.abort();
    };
  }, [channelId]);

  useEffect(() => {
    if (!socket || !channelId) return;

    const joinChannel = () => {
      socket.emit("join_channel", { channelId });
    };

    if (socket.connected) {
      joinChannel();
    }

    socket.on("connect", joinChannel);

    return () => {
      socket.off("connect", joinChannel);
    };
  }, [socket, channelId]);

  useEffect(() => {
    if (!socket) return;

    const onNewMessage = (message: ChatMessage) => {
      setMessages((previous) => {
        if (previous.some((existing) => existing.id === message.id)) return previous;
        return [...previous, message];
      });
    };

    const onUserTyping = (payload: TypingUser) => {
      if (!payload?.userId || payload.userId === userId) return;
      setTypingUsers((previous) => {
        if (previous.some((entry) => entry.userId === payload.userId)) return previous;
        return [...previous, payload];
      });
    };

    const onUserStoppedTyping = (payload: { userId: string }) => {
      setTypingUsers((previous) => previous.filter((entry) => entry.userId !== payload.userId));
    };

    const onParticipantsUpdated = (nextParticipants: RealtimeParticipant[]) => {
      setParticipants(nextParticipants);
    };

    socket.on("new_message", onNewMessage);
    socket.on("user_typing", onUserTyping);
    socket.on("user_stopped_typing", onUserStoppedTyping);
    socket.on("space_participants", onParticipantsUpdated);

    return () => {
      socket.off("new_message", onNewMessage);
      socket.off("user_typing", onUserTyping);
      socket.off("user_stopped_typing", onUserStoppedTyping);
      socket.off("space_participants", onParticipantsUpdated);
    };
  }, [socket, userId]);

  const sendMessage = useCallback(
    (content: string, type: "TEXT" | "FILE" | "AUDIO" | "IMAGE" | "SYSTEM" = "TEXT") => {
      if (!socket || !channelId || !content.trim()) return;
      socket.emit("send_message", {
        channelId,
        content: content.trim(),
        type,
      });
    },
    [socket, channelId],
  );

  const startTyping = useCallback(() => {
    if (!socket || !channelId) return;
    socket.emit("typing_start", { channelId });
  }, [socket, channelId]);

  const stopTyping = useCallback(() => {
    if (!socket || !channelId) return;
    socket.emit("typing_stop", { channelId });
  }, [socket, channelId]);

  const stableTypingUsers = useMemo(
    () => typingUsers.filter((entry) => entry.userId !== userId),
    [typingUsers, userId],
  );

  return {
    socket,
    isConnected,
    messages,
    typingUsers: stableTypingUsers,
    participants,
    sendMessage,
    startTyping,
    stopTyping,
  };
}
