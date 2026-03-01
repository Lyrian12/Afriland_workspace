"use client";

import React from "react";
import { AfrilandCard } from "../afriland-card";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export const RecordWidget = () => {
  return (
    <AfrilandCard
      variant="black"
      gridColumn="span 4"
      delay={0.2}
      className="h-[320px] max-lg:col-span-12 relative overflow-hidden"
    >
      <div className="flex justify-between text-[12px] text-white/70 relative z-10">
        <span className="mono">Afriland Record</span>
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-[var(--c-red)] rounded-full" />
          <span className="text-[10px] tracking-wider uppercase">ENR.</span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center h-full absolute inset-0 z-0">
        {/* Audio Visualization Bars */}
        <div className="flex items-center justify-center gap-1 h-32 w-full px-8">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: "10%" }}
              animate={{
                height: ["10%", "60%", "30%", "80%", "20%", "10%"],
                backgroundColor: ["#333", "var(--c-red)", "#333"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
              className="w-1.5 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Recorder Button UI */}
        <div className="mt-8 relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-[var(--c-red)] rounded-full blur-xl"
          />
          <div className="w-16 h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center relative z-10">
            <Mic className="w-6 h-6 text-[var(--c-red)]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
        <div>
          <div className="text-[32px] font-semibold text-white leading-tight">
            00:42
          </div>
          <div className="text-[10px] text-[var(--c-red)] mt-2 uppercase tracking-wide">
             Génération du résumé...
           </div>
        </div>
      </div>
    </AfrilandCard>
  );
};
