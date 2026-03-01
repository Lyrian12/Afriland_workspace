"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';
import { useUIStore } from '@/lib/store';

export const ActionWidget = () => {
  const { toggles, toggleFeature } = useUIStore();

  return (
    <AfrilandCard variant="grey" gridColumn="span 4" delay={0.4} className="max-lg:col-span-12">
      <div>
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[48px] font-extralight text-[var(--c-red)] leading-[0.9]"
        >
          23
        </motion.div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#666] block text-nowrap">
          Available Rooms
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center justify-between pb-3 border-b border-black/5">
          <span className="font-medium">Projector</span>
          <div 
            onClick={() => toggleFeature('projector')}
            className={`w-12 h-7 rounded-full relative cursor-pointer transition-colors duration-300 ${toggles.projector ? 'bg-[var(--c-black)]' : 'bg-[#ccc]'}`}
          >
            <motion.div 
              animate={{ x: toggles.projector ? 24 : 0 }}
              className={`w-5 h-5 rounded-full absolute top-1 left-1 ${toggles.projector ? 'bg-[var(--c-red)]' : 'bg-white'}`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Sound System</span>
          <div 
            onClick={() => toggleFeature('soundSystem')}
            className={`w-12 h-7 rounded-full relative cursor-pointer transition-colors duration-300 ${toggles.soundSystem ? 'bg-[var(--c-black)]' : 'bg-[#ccc]'}`}
          >
            <motion.div 
              animate={{ x: toggles.soundSystem ? 24 : 0 }}
              className={`w-5 h-5 rounded-full absolute top-1 left-1 ${toggles.soundSystem ? 'bg-[var(--c-red)]' : 'bg-white'}`}
            />
          </div>
        </div>
      </div>
    </AfrilandCard>
  );
};
