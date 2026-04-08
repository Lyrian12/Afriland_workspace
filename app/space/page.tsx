import { Metadata } from 'next';
import { SpaceClient } from '@/app/space/space-client';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Suspense } from 'react';

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

  return (
    <SpaceClient 
      userName={userName}
      avatarUrl={avatarUrl}
      userRole={userRole}
    />
  );
}
