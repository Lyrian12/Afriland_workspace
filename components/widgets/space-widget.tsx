"use client";

import React from 'react';
import { AfrilandCard } from '../afriland-card';
import { motion } from 'framer-motion';
import { Armchair, Users, Zap, LayoutGrid } from 'lucide-react';

export const SpaceWidget = () => {
    const amenities = [
        { icon: <Armchair className="w-4 h-4" />, label: "Détente" },
        { icon: <Users className="w-4 h-4" />, label: "Collab" },
        { icon: <Zap className="w-4 h-4" />, label: "Élec." },
        { icon: <LayoutGrid className="w-4 h-4" />, label: "Flex" },
    ];

  return (
    <AfrilandCard variant="grey" gridColumn="span 4" delay={0.4} className="max-lg:col-span-12 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-2">
         <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#666]">
            Afriland Space
            </span>
            <div className="text-2xl font-light text-black mt-1">Espace Ouvert</div>
         </div>
         <div className="bg-white/50 backdrop-blur-md px-2 py-1 rounded-full border border-black/5 text-[10px] uppercase tracking-wider font-semibold">
            Statut : Actif
         </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 flex items-center justify-center opacity-10 pointer-events-none">
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="w-full h-full border border-black rounded-full border-dashed"
          />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4 relative z-10">
        {amenities.map((item, i) => (
             <motion.div 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                className="bg-white/40 p-3 rounded-xl flex flex-col items-center justify-center gap-2 border border-black/5 backdrop-blur-sm transition-colors cursor-pointer"
             >
                <div className="text-black/60">{item.icon}</div>
                <span className="text-xs font-medium text-black/70">{item.label}</span>
             </motion.div>
        ))}
      </div>
    </AfrilandCard>
  );
};
