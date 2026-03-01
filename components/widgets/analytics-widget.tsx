"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const AnalyticsWidget = () => {
  return (
    <AfrilandCard variant="white" delay={0.5} className="h-60 max-lg:col-span-12">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#999] block">
          Analytics
        </span>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold mt-3 mb-6 leading-tight"
        >
          Usage reports per department.
        </motion.h3>
      </div>
      <div className="flex gap-1 items-end h-16">
        {[40, 70, 50, 100, 60].map((height, i) => (
          <motion.div 
            key={i} 
            initial={{ height: "0%" }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: "easeOut" }}
            className={cn(
              "w-3 rounded-[4px]",
              i === 3 ? "bg-[var(--c-red)]" : "bg-[var(--c-light-grey)]"
            )}
          />
        ))}
      </div>
    </AfrilandCard>
  );
};
