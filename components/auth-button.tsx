import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-2 md:gap-3">
      <span className="hidden text-sm text-[var(--c-black)]/70 dark:text-white/70 md:inline">
        Bonjour,{" "}
        <span className="font-medium text-[var(--c-black)] dark:text-white">
          {user.email}
        </span>
      </span>
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
        <Link href="/auth/login">Se connecter</Link>
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
