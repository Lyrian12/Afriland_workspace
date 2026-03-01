import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import { User } from "lucide-react";

export async function AuthButton() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  // Fetch the full user object to get avatar_url from metadata
  let avatarUrl: string | null = null;
  if (user) {
    const { data: userData } = await supabase.auth.getUser();
    avatarUrl = userData?.user?.user_metadata?.avatar_url ?? null;
  }

  return user ? (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Avatar: photo if available, otherwise User icon */}
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[var(--c-black)]/10 dark:bg-white/10">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="Photo de profil"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-4 w-4 text-[var(--c-black)]/70 dark:text-white/70" />
        )}
      </div>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button
        asChild
        size="sm"
        variant="outline"
        className="rounded-full border-black/15 bg-white/70 px-4 dark:border-white/20 dark:bg-white/5"
      >
        <Link href="/auth/sign-in">Se connecter</Link>
      </Button>
      <Button
        asChild
        size="sm"
        variant="default"
        className="rounded-full bg-[var(--c-red)] px-4 text-white hover:bg-[var(--c-red)]/90"
      >
        <Link href="/auth/sign-up">S&apos;enregistrer</Link>
      </Button>
    </div>
  );
}
