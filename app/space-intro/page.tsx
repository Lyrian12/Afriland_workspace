import { SpaceIntroClient } from "./space-intro-client";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { MemberStatus } from "@/src/generated/prisma/client";

export default async function SpaceIntroPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in?next=%2Fspace-intro");
  }

  const membershipCount = await prisma.spaceMember.count({
    where: {
      userId: user.id,
      status: MemberStatus.ACTIVE,
    },
  });

  if (membershipCount > 0) {
    redirect("/space");
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Client Component content */}
      <SpaceIntroClient />
    </div>
  );
}
