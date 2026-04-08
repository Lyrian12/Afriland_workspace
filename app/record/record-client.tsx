"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { saveRecording, deleteRecording } from "./actions";
import { generateRecordingPDF } from "./lib/pdf";
import { useRecorder } from "./hooks/useRecorder";

// Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TitleHeader } from "./components/TitleHeader";
import { TranscriptionView } from "./components/TranscriptionView";
import { RecordingControls } from "./components/RecordingControls";

interface RecordClientProps {
  userName: string;
  avatarUrl: string | null;
  initialRecordings?: any[];
}

export const RecordClient = ({ userName, avatarUrl, initialRecordings = [] }: RecordClientProps) => {
  // --- Data State ---
  const [recordings, setRecordings] = useState<any[]>(initialRecordings);
  const [activeRecord, setActiveRecord] = useState<any | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // --- UI State ---
  const [title, setTitle] = useState("Afriland Record");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [summaryMode, setSummaryMode] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  
  const titleInputRef = useRef<HTMLInputElement>(null);

  // --- Logic Hooks ---
  const { 
    recordState, 
    transcripts, 
    isTranscribing, 
    toggleRecording, 
    resetRecorder, 
    setTranscripts,
    recordStartTimeRef 
  } = useRecorder();

  const isRecording = recordState === "recording";

  // --- Effects ---
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  // --- Handlers ---
  const handleSave = async (text: string) => {
    if (!text || isSaving) return;
    setIsSaving(true);
    const duration = recordStartTimeRef.current 
      ? Math.floor((Date.now() - recordStartTimeRef.current) / 1000) 
      : 0;
    try {
      const saved = await saveRecording({ title, duration, transcription: text });
      setRecordings(prev => [saved, ...prev]);
      setActiveRecord(saved);
      alert("Enregistrement sauvegardé !");
    } catch(e) { 
      console.error("Save error", e); 
      alert("Erreur lors de la sauvegarde.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNewRecording = () => {
    setActiveRecord(null);
    resetRecorder();
    setTitle("Afriland Record");
    setSummaryMode(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cet enregistrement ?")) return;
    try {
      await deleteRecording(id);
      setRecordings(prev => prev.filter(r => r.id !== id));
      if (activeRecord?.id === id) handleNewRecording();
    } catch (e) {
      console.error("Delete error", e);
      alert("Erreur de suppression.");
    }
  };

  const handleSelectRecording = (rec: any) => {
    setActiveRecord(rec);
    setTranscripts([rec.transcription || ""]);
    setTitle(rec.title);
    setSummaryMode(true);
    generateRecordingPDF(rec);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0A0A0A] text-[#F0F0F0] font-geist selection:bg-[#E93434] selection:text-white">
      
      <style jsx global>{`
        @keyframes waveform-bounce {
          0%, 100% { transform: scaleY(0.1); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; filter: drop-shadow(0 0 8px rgba(233, 52, 52, 0.6)); }
        }
        @keyframes pulse-red {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #333; border-radius: 10px; }
      `}</style>
      
      <Header userName={userName} avatarUrl={avatarUrl} currentTime={currentTime} />

      <div className="flex-1 flex overflow-hidden p-4 md:p-6 gap-6 relative">
        <Sidebar 
          recordings={recordings} 
          activeRecord={activeRecord} 
          onSelect={handleSelectRecording} 
          onDelete={handleDelete} 
          onNew={handleNewRecording} 
        />

        <main className="flex-1 flex flex-col bg-[#141414] rounded-[24px] border border-[#222] relative overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center p-6 sm:px-10 z-10">
            <div className="bg-[#1A1A1A] border border-[#333] rounded-full px-4 py-1.5 flex items-center gap-2">
               <div className={cn(
                 "w-2 h-2 rounded-full",
                 isRecording ? "bg-[#E93434] animate-[pulse-red_1.5s_infinite_ease-in-out]" : "bg-[#808080]"
               )} />
               <span className="text-[13px] font-medium text-[#CCC]">
                 {isRecording ? "En écoute..." : recordState === "transcribing" ? "Transcription..." : "En pause"}
               </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-bold text-[#888]">Mode Sommaire</span>
              <button 
                onClick={() => setSummaryMode(!summaryMode)}
                className={cn(
                  "w-11 h-6 rounded-full transition-all duration-300 relative p-[2px]",
                  summaryMode ? "bg-[#E93434]" : "bg-[#333]"
                )}
              >
                <div className={cn("w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300", summaryMode ? "translate-x-5" : "translate-x-0")} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-6 sm:px-20 py-4 overflow-y-auto custom-scrollbar relative">
            {summaryMode ? (
              <TranscriptionView 
                transcripts={transcripts}
                isRecording={isRecording}
                isTranscribing={recordState === "transcribing"}
                isSaving={isSaving}
                activeRecord={activeRecord}
                onSave={handleSave}
              />
            ) : (
              <TitleHeader 
                title={title} 
                isEditing={isEditingTitle} 
                onTitleChange={setTitle} 
                onSetEditing={setIsEditingTitle} 
                inputRef={titleInputRef}
              />
            )}
            
            {isRecording && !summaryMode && (
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-[-1]">
                 <div className="w-full h-[50%] bg-[#E93434] blur-[250px] rounded-full" />
              </div>
            )}
          </div>

          <RecordingControls isRecording={isRecording} onToggle={toggleRecording} />
        </main>
      </div>
    </div>
  );
};
