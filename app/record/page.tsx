import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { RecordClient } from "@/app/record/record-client";
import { Suspense } from "react";


export default async function RecordPage() {
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

  return (
    <Suspense>
      <RecordClient userName={userName} avatarUrl={avatarUrl} />
    </Suspense>
  );
}
