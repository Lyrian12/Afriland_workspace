"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';
import { Calendar, Clock, MoreHorizontal } from 'lucide-react';

export const RoomWidget = () => {
  const tasks = [
    { time: '09:00', title: 'Point Quotidien', color: 'bg-blue-500' },
    { time: '10:30', title: 'Revue Design', color: 'bg-[var(--c-red)]' },
    { time: '14:00', title: 'Atelier Client', color: 'bg-green-500' },
  ];

  return (
    <AfrilandCard variant="white" gridColumn="span 4" delay={0.3} className="max-lg:col-span-12 overflow-hidden relative">
      <div className="flex justify-between items-center mb-6">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#999]">
          Afriland Room
        </span>
        <Calendar className="w-4 h-4 text-[#999]" />
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col items-center w-10">
               <span className="text-xs font-bold text-black/80">{task.time}</span>
               <div className={`w-1 h-8 mt-1 rounded-full ${i !== tasks.length -1 ? 'bg-black/10' : 'bg-transparent'}`} />
            </div>
            
            <div className="flex-1 bg-white border border-black/5 shadow-sm rounded-md p-2 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${task.color}`} />
                 <span className="text-sm font-medium text-black/80">{task.title}</span>
               </div>
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="opacity-0 group-hover:opacity-100 transition-opacity"
               >
                 <MoreHorizontal className="w-4 h-4 text-gray-400" />
               </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-100 rounded-full blur-2xl z-0" />
    </AfrilandCard>
  );
};
