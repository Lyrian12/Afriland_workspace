"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';

export const IntegrationWidget = () => {
  return (
    <AfrilandCard variant="black" delay={0.6} className="h-60 max-lg:col-span-12">
      <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block">
        Integrations
      </span>
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-2xl font-semibold mt-3 leading-tight"
      >
        Syncs with Google & Outlook.
      </motion.h3>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-8 right-8 w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </AfrilandCard>
  );
};
