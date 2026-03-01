"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';

export const AccessControlWidget = () => {
  return (
    <AfrilandCard variant="grey" delay={0.7} className="h-60 max-lg:col-span-12">
      <span className="font-mono text-[11px] uppercase tracking-wider text-[#666] block">
        Access Control
      </span>
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-2xl font-semibold mt-3 leading-tight"
      >
        Smart lock integration.
      </motion.h3>
      <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-1 opacity-50">
        {[...Array(9)].map((_, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.05 }}
            className="w-1 h-1 bg-black rounded-full" 
          />
        ))}
      </div>
    </AfrilandCard>
  );
};
