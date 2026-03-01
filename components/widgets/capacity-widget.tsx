"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';

export const CapacityWidget = () => {
  return (
    <AfrilandCard variant="black" gridColumn="span 4" delay={0.2} className="h-[320px] max-lg:col-span-12">
      <div className="flex justify-between text-[12px] text-white/70">
        <span className="mono">Live Occupancy</span>
        <motion.div 
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 bg-[var(--c-red)] rounded-full" 
        />
      </div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-[48px] font-semibold text-[var(--c-red)] mt-1"
      >
        85%
      </motion.div>
      
      <div className="text-2xl font-semibold mt-4 max-w-[140px] leading-[1.2]">
        Floor 3<br />West Wing
      </div>

      <div className="w-[120px] h-[120px] border-2 border-white/20 rounded-full absolute bottom-8 right-8 flex items-end justify-center overflow-hidden">
        <motion.div 
          initial={{ height: "0%" }}
          animate={{ height: "65%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
          className="w-full bg-[var(--c-red)] border-t border-white/50 relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] after:bg-[length:100%_4px]" 
        />
      </div>
    </AfrilandCard>
  );
};
