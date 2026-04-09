import { Metadata } from 'next';
import { SpaceClient } from '@/app/space/space-client';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Afriland Space',
  description: 'Gérez votre espace de travail',
};

export default function SpacePage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-brand-main text-white">Chargement...</div>}>
      <SpaceContent />
    </Suspense>
  );
}

async function SpaceContent() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/auth/sign-in');
  }

  const avatarUrl = user.user_metadata?.avatar_url || null;
  let userName = user.user_metadata?.full_name;
  if (!userName) {
    userName = user.email ? user.email.split('@')[0] : "Utilisateur";
  }
  const userRole = user.user_metadata?.role || "Membre";

  const memberships = await prisma.spaceMember.findMany({
    where: {
      userId: user.id,
      status: "ACTIVE",
    },
    select: {
      role: true,
      space: {
        select: {
          id: true,
          name: true,
          ownerId: true,
          channels: {
            where: {
              isDefault: true,
            },
            select: {
              id: true,
            },
            take: 1,
          },
        },
      },
    },
    orderBy: {
      joinedAt: "asc",
    },
  });

  if (memberships.length === 0) {
    return redirect('/space-intro');
  }

  const initialSpaces = memberships.map((membership) => ({
    id: membership.space.id,
    name: membership.space.name,
    canInvite: membership.role === "ADMIN" && membership.space.ownerId === user.id,
    defaultChannelId: membership.space.channels[0]?.id ?? null,
  }));

  return (
    <SpaceClient 
      userId={user.id}
      userEmail={user.email || ""}
      userName={userName}
      avatarUrl={avatarUrl}
      userRole={userRole}
      initialSpaces={initialSpaces}
    />
  );
}
