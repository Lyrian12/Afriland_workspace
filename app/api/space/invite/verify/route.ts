import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token")?.trim();

    if (!token) {
      return NextResponse.json({ error: "Token invalide" }, { status: 404 });
    }

    // Schema stores invitation token in `OtpInvite.code`.
    const invite = await prisma.otpInvite.findFirst({
      where: {
        code: token,
        usedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      select: {
        space: {
          select: {
            name: true,
          },
        },
        sentBy: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!invite) {
      return NextResponse.json({ error: "Token invalide" }, { status: 404 });
    }

    const inviterName =
      invite.sentBy.name || invite.sentBy.email.split("@")[0] || "Un membre";

    return NextResponse.json({
      spaceName: invite.space.name,
      inviterName,
    });
  } catch (error) {
    console.error("Error verifying invite token:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
