"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <Button
      onClick={logout}
      size="sm"
      className="rounded-full bg-[var(--c-black)] px-4 text-white hover:bg-[var(--c-black)]/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
    >
      Se deconnecter
    </Button>
  );
}
