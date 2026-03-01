"use client";

import { motion } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";
import { 
  HeroText, 
  BookingWidget, 
  RecordWidget, 
  RoomWidget, 
  SpaceWidget, 
} from "@/components/widgets";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function HomeClient() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10">
      <main id="fonctionnalites" className="w-full max-w-[1200px] flex-1">
        <BentoGrid>
          <HeroText />
          <BookingWidget />
          <RecordWidget />
          <RoomWidget />
          <SpaceWidget />
        </BentoGrid>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full max-w-[1200px] flex items-center justify-between mt-20 pt-8 border-t border-black/10 text-xs text-gray-500"
      >
        <p>© 2026 Afriland Workspace. Tous droits réservés.</p>
        <ThemeSwitcher />
      </motion.footer>
    </div>
  );
}
