"use client";

import { AfrilandCard } from '../afriland-card';
import Image from 'next/image';

export const BookingWidget = () => {
  return (
    <AfrilandCard
      variant="red"
      gridColumn="span 5"
      gridRow="span 2"
      delay={0.1}
      className="max-lg:col-span-12 relative overflow-hidden p-0"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/afrilandacceuil1.jpg" 
          alt="Afriland Accueil" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </AfrilandCard>
  );
};
