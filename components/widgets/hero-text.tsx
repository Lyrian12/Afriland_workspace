"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mic, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroText = () => {
  const [showSpaces, setShowSpaces] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowSpaces(false);
      }
    };

    if (showSpaces) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSpaces]);

  const spaces = [
    {
      name: "AFRILAND ROOM",
      icon: Calendar,
      bg: "bg-white",
      text: "text-black",
      border: "border border-black",
      iconBg: "bg-black text-white",
      arrowBg: "bg-black text-white",
      link: null,
    },
    {
      name: "AFRILAND RECORD",
      icon: Mic,
      bg: "bg-[#111]",
      text: "text-white",
      border: "border border-[#222]",
      iconBg: "bg-[var(--c-red)] text-white",
      arrowBg: "bg-[var(--c-red)] text-white",
      link: "/record",
    },
    {
      name: "AFRILAND SPACE",
      icon: Monitor,
      bg: "bg-[#f0f0f0]",
      text: "text-black",
      border: "border border-[#e0e0e0]",
      iconBg: "bg-black text-white",
      arrowBg: "bg-black text-white",
      link: null,
    },
  ];

  return (
    <div className="col-span-7 row-span-2 flex flex-col justify-center pr-10 max-lg:col-span-12 max-lg:mb-10">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="text-[64px] font-light tracking-[-2px] leading-[1.1] mb-8 max-md:text-5xl"
      >
        L'excellence au service
        <br />
        <span className="font-semibold">de votre travail.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        className="text-xl max-w-[480px] mb-10 leading-[1.5] text-[#555]"
      >
        Afriland Workspace : Optimisez vos ressources, orchestrez vos réunions
        et collaborez sans limites.
      </motion.p>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="flex flex-col gap-4 w-full max-w-[420px]"
      >
        <AnimatePresence mode="wait">
          {!showSpaces ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => setShowSpaces(true)}
                className="bg-[var(--c-red)] hover:bg-[var(--c-red)]/90 text-white rounded-full px-8 py-6 text-lg h-auto w-fit"
              >
                Explorer vos espaces
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="spaces"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              {spaces.map((space, i) => {
                const ButtonContent = (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between py-3 px-4 rounded-md ${space.bg} ${space.text} ${space.border} w-full shadow-sm cursor-pointer`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${space.iconBg}`}>
                        <space.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold tracking-wide text-sm">
                        {space.name}
                      </span>
                    </div>
                    <div className={`p-2 rounded-full ${space.arrowBg}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                );

                return space.link ? (
                  <Link href={space.link} key={i}>
                    {ButtonContent}
                  </Link>
                ) : (
                  <div key={i}>{ButtonContent}</div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
