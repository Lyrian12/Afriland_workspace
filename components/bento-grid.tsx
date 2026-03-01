import React from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn(
      "grid grid-cols-12 gap-[var(--gap)] w-full auto-rows-[minmax(200px,auto)]",
      "lg:grid lg:grid-cols-12",
      "max-lg:flex max-lg:flex-col",
      className
    )}>
      {children}
    </div>
  );
};
