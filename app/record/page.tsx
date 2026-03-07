import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { RecordClient } from "@/app/record/record-client";
import { Suspense } from "react";

export default function RecordPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#0A0A0A] text-white">Chargement...</div>}>
      <RecordContent />
    </Suspense>
  );
}

async function RecordContent() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/sign-in");
  }

  // Get user profile photo
  const avatarUrl = user.user_metadata?.avatar_url || null;
  // Get user name (use full_name if available, fallback to email name, or "Utilisateur")
  let userName = user.user_metadata?.full_name;
  if (!userName) {
    userName = user.email ? user.email.split('@')[0] : "Utilisateur";
  }

  return <RecordClient userName={userName} avatarUrl={avatarUrl} />;
}
