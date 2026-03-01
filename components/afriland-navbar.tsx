import Link from "next/link";
import { Suspense } from "react";

import { AfrilandLogo } from "@/components/afriland-logo";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function AfrilandNavbar() {
  return (
    <header className="mx-auto w-full max-w-[1200px] px-4 pt-8 md:px-10">
      <div className="rounded-[var(--radius-md)] border border-black/10 bg-white/85 px-4 py-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.45)] backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-white/10 dark:bg-[var(--c-dark-grey)]/90 dark:supports-[backdrop-filter]:bg-[var(--c-dark-grey)]/75 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <AfrilandLogo />
          </Link>

          <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
            <ThemeSwitcher />
            <Suspense fallback={null}>
              <AuthButton />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
