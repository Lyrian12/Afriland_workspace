import { AfrilandNavbar } from "@/components/afriland-navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <AfrilandNavbar />
        <div className="flex w-full max-w-[1200px] flex-1 flex-col px-4 pb-10 pt-10 md:px-10">
          {children}
        </div>

        <footer className="w-full max-w-[1200px] border-t border-black/10 px-4 py-8 text-center text-xs text-black/60 dark:border-white/10 dark:text-white/60 md:px-10">
          <p>© 2026 Afriland Workspace. Tous droits reserves.</p>
        </footer>
      </div>
    </main>
  );
}
