import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { MemberStatus, SpaceRole } from "@/src/generated/prisma/client";

type JoinBody = {
  token?: string;
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let body: JoinBody;
    try {
      body = (await req.json()) as JoinBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const token = body.token?.trim();
    if (!token) {
      return NextResponse.json({ error: "Token manquant" }, { status: 400 });
    }

    // Schema uses `code` as the invitation token field.
    const invite = await prisma.otpInvite.findUnique({
      where: { code: token },
      select: {
        id: true,
        email: true,
        spaceId: true,
        usedAt: true,
        expiresAt: true,
      },
    });

    if (!invite) {
      return NextResponse.json({ error: "Invitation invalide" }, { status: 404 });
    }

    if (invite.usedAt) {
      return NextResponse.json({ error: "Invitation déjà utilisée" }, { status: 409 });
    }

    if (invite.expiresAt <= new Date()) {
      return NextResponse.json({ error: "Invitation expirée" }, { status: 410 });
    }

    const userEmail = user.email?.trim().toLowerCase();
    const inviteEmail = invite.email.trim().toLowerCase();
    if (!userEmail || userEmail !== inviteEmail) {
      return NextResponse.json({ error: "Email non autorisé" }, { status: 403 });
    }

    const consumed = await prisma.otpInvite.updateMany({
      where: {
        id: invite.id,
        usedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      data: {
        usedAt: new Date(),
      },
    });

    if (consumed.count === 0) {
      const freshState = await prisma.otpInvite.findUnique({
        where: { id: invite.id },
        select: { usedAt: true, expiresAt: true },
      });

      if (freshState?.usedAt) {
        return NextResponse.json({ error: "Invitation déjà utilisée" }, { status: 409 });
      }

      if (freshState && freshState.expiresAt <= new Date()) {
        return NextResponse.json({ error: "Invitation expirée" }, { status: 410 });
      }

      return NextResponse.json({ error: "Invitation invalide" }, { status: 404 });
    }

    await prisma.spaceMember.upsert({
      where: {
        spaceId_userId: {
          spaceId: invite.spaceId,
          userId: user.id,
        },
      },
      update: {},
      create: {
        spaceId: invite.spaceId,
        userId: user.id,
        role: SpaceRole.MEMBER,
        status: MemberStatus.ACTIVE,
      },
    });

    return NextResponse.json({ spaceId: invite.spaceId });
  } catch (error) {
    console.error("Error joining space:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
