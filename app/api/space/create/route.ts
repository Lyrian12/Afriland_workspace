import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { MemberStatus, SpaceRole } from "@/src/generated/prisma/client";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { pseudonyme, adminRole, name, objective } = await req.json();

    if (!pseudonyme || !adminRole || !name || !objective) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userEmail = user.email;
    if (!userEmail) {
      return NextResponse.json({ error: "User email is required" }, { status: 400 });
    }

    // Execute multiple operations in a transaction
    const space = await prisma.$transaction(async (tx) => {
      // 1. Update User pseudonyme (name)
      await tx.user.upsert({
        where: { id: user.id },
        update: {
          name: pseudonyme,
        },
        create: {
          id: user.id,
          email: userEmail,
          name: pseudonyme,
          avatar: user.user_metadata?.avatar_url,
          role: "USER" // Provide default from previous changes
        }
      });

      // 2. Create Space
      const newSpace = await tx.space.create({
        data: {
          name,
          objective,
          adminRole,
          ownerId: user.id,
        }
      });

      // 3. Create SpaceMember with ADMIN role
      await tx.spaceMember.create({
        data: {
          spaceId: newSpace.id,
          userId: user.id,
          role: SpaceRole.ADMIN,
          status: MemberStatus.ACTIVE,
        }
      });

      // 4. Create default Channel "générale"
      await tx.channel.create({
        data: {
          name: "générale",
          spaceId: newSpace.id,
          isDefault: true,
          userId: user.id,
        }
      });

      return newSpace;
    });

    return NextResponse.json({ spaceId: space.id });

  } catch (error) {
    console.error("Error creating space:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
