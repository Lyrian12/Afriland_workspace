"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AfrilandCardProps {
  children: React.ReactNode;
  variant?: 'white' | 'black' | 'red' | 'grey';
  className?: string;
  gridColumn?: string;
  gridRow?: string;
  delay?: number;
}

export const AfrilandCard = ({
  children,
  variant = 'white',
  className,
  gridColumn,
  gridRow,
  delay = 0,
}: AfrilandCardProps) => {
  const variants = {
    white: 'bg-[var(--c-white)] text-[var(--c-black)]',
    black: 'bg-[var(--c-black)] text-[var(--c-white)]',
    red: 'bg-[var(--c-red)] text-[var(--c-white)]',
    grey: 'bg-[var(--c-light-grey)] text-[var(--c-black)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ 
        y: -4, 
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      className={cn(
        'rounded-[var(--radius-lg)] p-8 relative flex flex-col justify-between overflow-hidden transition-colors',
        variants[variant],
        className
      )}
      style={{
        gridColumn: gridColumn,
        gridRow: gridRow,
      }}
    >
      {children}
    </motion.div>
  );
};
