import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="font-[family-name:var(--font-geist-sans)]">
      {children}
    </section>
  );
}
