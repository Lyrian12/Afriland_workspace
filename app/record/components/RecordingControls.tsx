import React from "react";
import { cn } from "@/lib/utils";

interface RecordingControlsProps {
  isRecording: boolean;
  onToggle: () => void;
}

export const RecordingControls = ({ isRecording, onToggle }: RecordingControlsProps) => {
  return (
    <div className="w-full px-6 pb-8 md:pb-12 pt-4 flex flex-col items-center justify-end z-20">
      {/* Main Controls Floating Island */}
      <div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] rounded-[32px] p-2 flex items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-[64px] min-w-[120px]">
        
        {/* Central Record Button */}
        <button 
          onClick={onToggle}
          className="w-14 h-14 bg-black border border-[#222] rounded-full flex items-center justify-center mx-2 group relative shadow-inner"
        >
          {/* Hover ring */}
          <div className="absolute inset-0 rounded-full border border-[#E93434] opacity-0 group-hover:opacity-30 transition-opacity scale-110" />
          
          {/* Inner indicator */}
          {isRecording ? (
            <div className="w-4 h-4 bg-[#E93434] rounded-sm transition-all duration-300" /> // Square for stop
          ) : (
            <div className="w-5 h-5 bg-white rounded-full transition-all duration-300" /> // Circle for record
          )}
        </button>

        <div className="w-[1px] h-6 bg-[#333] mx-2" />

        {/* Horizontal Waveform Area */}
        <div 
          className="flex-1 flex items-center h-full px-2 gap-[3px] overflow-hidden w-[180px] md:w-[240px]"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-[3px] bg-gradient-to-t from-[#E93434] to-[#333] rounded-full origin-bottom"
              style={{
                height: '32px',
                transform: 'scaleY(0.1)', // Default flat
                ...(isRecording ? {
                  animation: `waveform-bounce ${0.5 + Math.random() * 0.8}s infinite ease-in-out`,
                  animationDelay: `${-Math.random() * 2}s`,
                } : {
                  opacity: 0.2,
                  background: '#555'
                })
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
