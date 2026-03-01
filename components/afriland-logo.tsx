import React from 'react';
import Image from 'next/image';

export const AfrilandLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 overflow-hidden rounded-lg">
        <Image 
          src="/download.jpeg" 
          alt="Afriland Logo" 
          fill
          className="object-cover"
        />
      </div>
      <span className="font-semibold text-xl tracking-tight">AFRILAND WORKSPACE.</span>
    </div>
  );
};
