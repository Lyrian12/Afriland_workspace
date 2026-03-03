"use client";

import React, { useState, useRef, useEffect, useOptimistic, useTransition } from "react";
import Image from "next/image";
import { User, Download, Edit2,FileText, File } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecordClientProps {
  userName: string;
  avatarUrl: string | null;
}

type RecordState = "paused" | "recording" | "completed";

export const RecordClient = ({ userName, avatarUrl }: RecordClientProps) => {
  // --- Time Management ---
  const [currentTime, setCurrentTime] = useState<string>("");
  
  useEffect(() => {
    // Initial set avoiding hydration mismatch
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // UI updates every minute is sufficient
    return () => clearInterval(interval);
  }, []);

  // --- Title Management ---
  const [title, setTitle] = useState("Afriland Record");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  // --- Recording State Management ---
  const [actualRecordState, setActualRecordState] = useState<RecordState>("paused");
  const [isPending, startTransition] = useTransition();
  const [optimisticRecordState, addOptimisticState] = useOptimistic(
    actualRecordState,
    (state: RecordState, newState: RecordState) => newState
  );

  const toggleRecording = () => {
    startTransition(() => {
      const newState = optimisticRecordState === "paused" ? "recording" : "paused";
      addOptimisticState(newState);
      setActualRecordState(newState);
    });
  };

  const currentRecordState = optimisticRecordState;
  const isRecording = currentRecordState === "recording";

  // --- Summary Mode ---
  const [summaryMode, setSummaryMode] = useState(false);

  // --- Download Menu ---
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setShowDownloadMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0A0A0A] text-[#F0F0F0] font-geist selection:bg-[#E93434] selection:text-white">
      
      {/* --- Global Styles --- */}
      <style jsx global>{`
        @keyframes waveform-bounce {
          0%, 100% { transform: scaleY(0.1); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; filter: drop-shadow(0 0 8px rgba(233, 52, 52, 0.6)); }
        }
        @keyframes pulse-red {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
      
      {/* --- HEADER --- */}
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

      {/* --- MAIN LAYOUT --- */}
      <div className="flex-1 flex overflow-hidden p-4 md:p-6 gap-6 relative">
        
        {/* --- LEFT SIDEBAR (Library) --- */}
        <aside className="hidden md:flex flex-col w-[280px] bg-[#141414] rounded-[24px] border border-[#222] flex-shrink-0 overflow-hidden shadow-2xl">
          <div className="p-6 pb-2">
            <h2 className="text-[20px] font-bold tracking-tight text-white mb-4">Library</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 custom-scrollbar pb-6 space-y-2">
            {/* Active Card */}
            <div className="bg-black border border-[#333] rounded-[16px] p-4 cursor-pointer relative group transition-colors hover:border-[#555]">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[14px] font-bold text-white">Design Sync</span>
                <Edit2 className="w-3.5 h-3.5 text-[#666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[12px] text-[#808080]">10:42 AM • 45m</span>
            </div>
            
            {/* Inactive Cards */}
            <div className="bg-transparent border border-transparent rounded-[16px] p-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors flex justify-between items-center group">
               <div>
                  <div className="text-[14px] font-semibold text-[#CCC] mb-1">Client Interview</div>
                  <div className="text-[12px] text-[#666]">Yesterday • 1h 20m</div>
               </div>
               <span className="text-[#444] group-hover:text-white transition-colors">→</span>
            </div>

            <div className="bg-transparent border border-transparent rounded-[16px] p-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors flex justify-between items-center group">
               <div>
                  <div className="text-[14px] font-semibold text-[#CCC] mb-1">Q3 Brainstorm</div>
                  <div className="text-[12px] text-[#666]">Mon • 22m</div>
               </div>
               <span className="text-[#444] group-hover:text-white transition-colors">→</span>
            </div>
            
            <div className="bg-transparent border border-transparent rounded-[16px] p-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors flex justify-between items-center group">
               <div>
                  <div className="text-[14px] font-semibold text-[#CCC] mb-1">Personal Note</div>
                  <div className="text-[12px] text-[#666]">Sun • 4m</div>
               </div>
               <span className="text-[#444] group-hover:text-white transition-colors">→</span>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 flex flex-col bg-[#141414] rounded-[24px] border border-[#222] relative overflow-hidden shadow-2xl">
          
          {/* Top Bar inside Content Area */}
          <div className="flex justify-between items-center p-6 sm:px-10 z-10">
            {/* Status Indicator */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5 flex items-center gap-2">
               <div className={cn(
                 "w-2 h-2 rounded-full",
                 isRecording ? "bg-[#E93434] animate-[pulse-red_1.5s_infinite_ease-in-out]" : "bg-[#808080]"
               )} />
               <span className="text-[13px] font-medium text-[#CCC]">
                 {isRecording ? "En écoute..." : "En pause"}
               </span>
            </div>
            
            {/* Summary Mode Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-bold text-[#888] tracking-wide">Mode Sommaire</span>
              <button 
                onClick={() => setSummaryMode(!summaryMode)}
                className={cn(
                  "w-11 h-6 rounded-full transition-all duration-300 relative p-[2px] cursor-pointer",
                  summaryMode ? "bg-[#E93434]" : "bg-[#333]"
                )}
              >
                <div className={cn(
                  "w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300",
                  summaryMode ? "translate-x-5" : "translate-x-0"
                )} />
              </button>
            </div>
          </div>

          {/* Central Area: Transcription OR Title Entry */}
          <div className="flex-1 flex flex-col px-6 sm:px-20 py-4 overflow-y-auto custom-scrollbar relative z-0">
            {summaryMode ? (
              // Live Transcription View
              <div className="animate-in fade-in duration-500">
                <div className="text-[20px] md:text-[24px] leading-[1.7] text-[#EEE] font-medium max-w-[800px]">
                  {isRecording && (
                    <div className="flex items-center text-[#888]">
                      
                      <span className="inline-flex ml-1 w-5 overflow-hidden">
                        <span className="animate-[pulse-red_1s_infinite_ease-in-out]">.</span>
                        <span className="animate-[pulse-red_1s_infinite_ease-in-out_0.2s]">.</span>
                        <span className="animate-[pulse-red_1s_infinite_ease-in-out_0.4s]">.</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Default Centered Title + Empty State
               <div className="h-full w-full flex flex-col items-center justify-center -mt-20">
                  <div className="group relative">
                  {isEditingTitle ? (
                    <input
                      ref={titleInputRef}
                      type="text"
                      value={title}
                      placeholder="Ajouter un titre"
                      onChange={(e) => setTitle(e.target.value)}
                      onBlur={() => setIsEditingTitle(false)}
                      onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                      className="text-[32px] md:text-[40px] text-center font-bold tracking-tight bg-transparent border-b-2 border-[#E93434] focus:outline-none w-[350px] text-white"
                    />
                   ) : (
                    <h1 
                      onClick={() => setIsEditingTitle(true)}
                      className="text-[32px] md:text-[40px] text-center font-bold tracking-tight cursor-pointer hover:text-[#E93434] transition-colors flex items-center justify-center gap-3 text-white"
                    >
                      {title || "Ajouter un titre"}
                      <Edit2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#666]" />
                    </h1>
                   )}
                 </div>
                 
               </div>
            )}
            
            {/* Background Waveform Effect (Optional depth) */}
            {isRecording && !summaryMode && (
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-[-1]">
                 <div className="w-full h-[50%] bg-[#E93434] blur-[250px] rounded-full" />
              </div>
            )}
          </div>

          {/* Bottom Control Bar Container */}
          <div className="w-full px-6 pb-8 md:pb-12 pt-4 flex flex-col items-center justify-end z-20">
             
             {/* Main Controls Floating Island */}
             <div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] rounded-[32px] p-2 flex items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-[64px] min-w-[300px]">
                
                {/* 1. Download Menu Button */}
                <div className="relative pl-1 h-full flex items-center" ref={downloadMenuRef}>
                   <button 
                     onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                     className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#333] transition-colors text-[#A0A0A0] hover:text-red-500"
                   >
                      <Download className="w-5 h-5" />
                   </button>
                   
                   {/* Dropdown menu */}
                   {showDownloadMenu && (
                     <div className="absolute bottom-[60px] left-0 bg-[#222] border border-[#333] rounded-[16px] shadow-xl overflow-hidden min-w-[180px] animate-in slide-in-from-bottom-2 fade-in duration-200">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-[#DDD] hover:bg-[#333] hover:text-red-500 transition-colors text-left border-b border-[#333]">
                           <FileText className="w-4 h-4" />
                           Télécharger PDF
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-[#DDD] hover:bg-[#333] hover:text-red-500 transition-colors text-left">
                           <File className="w-4 h-4" />
                           Télécharger DOCX
                        </button>
                     </div>
                   )}
                </div>

                <div className="w-[1px] h-6 bg-[#333] mx-2" />

                {/* 2. Central Record Button */}
                <button 
                  onClick={toggleRecording}
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

                {/* 3. Horizontal Waveform Area */}
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
                          transform: isRecording ? 'scaleY(0.1)' : 'scaleY(0.1)', // Default flat
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

             {/* Démarrer Whisper Action (Auxiliary) */}
             <div className="mt-6 flex justify-center">
                 <button className="bg-white border border-[#333] hover:bg-[#E93434] text-black hover:text-white rounded-full px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-colors flex items-center gap-2">
                    <Image src="/whisper.png" width={25} height={25} alt="Whisper" className="rounded-full" />
                    Démarrer Whisper
                 </button>
             </div>
          </div>
        </main>

      </div>
    </div>
  );
};
