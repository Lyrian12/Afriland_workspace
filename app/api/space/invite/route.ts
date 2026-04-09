import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { sendInviteEmail } from "@/lib/mailer";
import { MemberStatus, SpaceRole } from "@/src/generated/prisma/client";

type InviteBody = {
  email?: string;
  spaceId?: string;
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;

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

    let body: InviteBody;
    try {
      body = (await req.json()) as InviteBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const email = body.email?.trim().toLowerCase();
    const spaceId = body.spaceId?.trim();

    if (!email || !spaceId) {
      return NextResponse.json({ error: "Missing required fields: email and spaceId" }, { status: 400 });
    }

    const adminMembership = await prisma.spaceMember.findFirst({
      where: {
        spaceId,
        userId: user.id,
        role: SpaceRole.ADMIN,
        status: MemberStatus.ACTIVE,
        space: {
          ownerId: user.id,
        },
      },
      select: {
        id: true,
        space: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!adminMembership) {
      return NextResponse.json({ error: "Forbidden: admin access required" }, { status: 403 });
    }

    const invitedUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!invitedUser) {
      return NextResponse.json({ error: "User account not found for this email" }, { status: 404 });
    }

    const existingMember = await prisma.spaceMember.findUnique({
      where: {
        spaceId_userId: {
          spaceId,
          userId: invitedUser.id,
        },
      },
      select: { id: true },
    });

    if (existingMember) {
      return NextResponse.json({ error: "User is already a member of this space" }, { status: 409 });
    }

    await prisma.otpInvite.deleteMany({
      where: {
        email,
        spaceId,
        usedAt: null,
      },
    });

    let token = crypto.randomUUID();
    // Prevent rare UUID collisions against unique DB constraint.
    // Schema uses `code` as unique field, token is stored in that column.
    while (await prisma.otpInvite.findUnique({ where: { code: token }, select: { id: true } })) {
      token = crypto.randomUUID();
    }

    const expiresAt = new Date(Date.now() + DAY_IN_MS);

    await prisma.otpInvite.create({
      data: {
        email,
        code: token,
        spaceId,
        userId: user.id,
        expiresAt,
      },
    });

    const inviterName =
      (user.user_metadata?.full_name as string | undefined) ||
      (user.user_metadata?.name as string | undefined) ||
      user.email?.split("@")[0] ||
      "Un membre";

    await sendInviteEmail(email, token, adminMembership.space.name, inviterName);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inviting user to space:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
