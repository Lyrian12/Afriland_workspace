import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface HeaderProps {
  userName: string;
  avatarUrl: string | null;
  currentTime: string;
}

export const Header = ({ userName, avatarUrl, currentTime }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-8 bg-[#010101] border-b border-[#1F1F1F] flex-shrink-0 z-20">
      {/* Brand Area */}
      <div className="flex items-center gap-3">
        <Image 
          src="/download.jpeg" 
          alt="Afriland Logo" 
          width={24} 
          height={24} 
          className="rounded-sm object-contain" 
        />
        <span className="text-[14px] font-bold tracking-widest text-white uppercase hidden sm:block">
          Afriland Record
        </span>
      </div>

      {/* Right Area: Time & Profile */}
      <div className="flex items-center gap-6">
        <span className="text-[20px] font-bold text-white tabular-nums">
          {currentTime}
        </span>
        <div className="w-9 h-9 bg-[#1A1A1A] rounded-full overflow-hidden border border-[#333] shadow-sm flex items-center justify-center cursor-pointer hover:border-[#E93434] transition-colors">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={userName} width={36} height={36} className="object-cover w-full h-full" />
          ) : (
            <User className="w-4 h-4 text-[#808080]" />
          )}
        </div>
      </div>
    </header>
  );
};
