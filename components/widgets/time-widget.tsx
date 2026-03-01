"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';

export const TimeWidget = () => {
  return (
    <AfrilandCard variant="white" gridColumn="span 4" delay={0.3} className="max-lg:col-span-12">
      <div className="absolute top-8 left-8 grid grid-cols-3 gap-1">
        {[1, 0, 0, 1, 0, 0, 1, 0, 0].map((active, i) => (
          <motion.div 
            key={i} 
            animate={active ? { opacity: [1, 0.5, 1] } : {}}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
            className={`w-1 h-1 rounded-full ${active ? 'bg-[var(--c-red)]' : 'bg-[#ddd]'}`} 
          />
        ))}
      </div>

      <div className="w-40 h-40 bg-[var(--c-black)] rounded-full mx-auto mt-5 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute inset-0 flex items-center justify-center text-[var(--c-red)] text-3xl font-mono"
        >
          4h
        </motion.div>
        <motion.div 
          animate={{ rotate: 315 }} // -45deg is initial
          initial={{ rotate: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="w-1/2 h-[2px] bg-transparent absolute top-1/2 left-0 origin-right after:content-[''] after:w-3 after:h-3 after:bg-[var(--c-red)] after:rounded-full after:absolute after:left-[10px] after:top-[-5px]" 
        />
      </div>

      <div className="flex justify-between items-end mt-auto">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#999] mb-1 block">
            Duration
          </span>
          <div className="font-semibold text-xl">Standard</div>
        </div>
        <div className="font-semibold text-xl">
          56<span className="text-xs text-[#999] ml-0.5">min</span>
        </div>
      </div>
    </AfrilandCard>
  );
};
