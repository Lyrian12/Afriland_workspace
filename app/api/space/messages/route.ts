import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { MemberStatus } from "@/src/generated/prisma/client";

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const channelId = req.nextUrl.searchParams.get("channelId")?.trim();
    if (!channelId) {
      return NextResponse.json({ error: "channelId is required" }, { status: 400 });
    }

    const channel = await prisma.channel.findUnique({
      where: { id: channelId },
      select: { spaceId: true },
    });

    if (!channel) {
      return NextResponse.json({ error: "Channel not found" }, { status: 404 });
    }

    const membership = await prisma.spaceMember.findFirst({
      where: {
        userId: user.id,
        spaceId: channel.spaceId,
        status: MemberStatus.ACTIVE,
      },
      select: { id: true },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const latestMessages = await prisma.message.findMany({
      where: { channelId },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    const messages = latestMessages
      .reverse()
      .map((message) => ({
        id: message.id,
        content: message.content,
        createdAt: message.createdAt.toISOString(),
        sender: {
          id: message.sender.id,
          name: message.sender.name || message.sender.email.split("@")[0],
          avatar: message.sender.avatar,
        },
      }));

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error fetching space messages:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
