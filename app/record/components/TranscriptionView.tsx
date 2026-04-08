import React from "react";
import { Save } from "lucide-react";
import { cn } from "@/lib/utils";

interface TranscriptionViewProps {
  transcripts: string[];
  isRecording: boolean;
  isTranscribing: boolean;
  isSaving: boolean;
  activeRecord: any | null;
  onSave: (text: string) => void;
}

export const TranscriptionView = ({ 
  transcripts, 
  isRecording, 
  isTranscribing, 
  isSaving, 
  activeRecord,
  onSave 
}: TranscriptionViewProps) => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-6">
        <div className="text-[20px] md:text-[24px] leading-[1.7] text-[#EEE] font-medium max-w-[800px] flex flex-col gap-4 flex-1">
          {transcripts.map((t, i) => (
            <span key={i} className="animate-in slide-in-from-bottom-2 fade-in">{t}</span>
          ))}
          {transcripts.length === 0 && !isRecording && !isTranscribing && (
            <span className="text-[#666] italic">Aucune transcription disponible pour le moment. Commencez à enregistrer !</span>
          )}
        </div>
        
        {!isRecording && !isTranscribing && transcripts.length > 0 && !activeRecord && (
          <button 
            onClick={() => onSave(transcripts.join(" "))}
            disabled={isSaving}
            className="flex items-center gap-2 bg-[#E93434] hover:bg-[#C82D2D] text-white px-5 py-2.5 rounded-full font-bold text-[14px] transition-all shadow-lg ml-4 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Sauvegarde..." : "Enregistrer"}
          </button>
        )}
      </div>

      <div className="max-w-[800px]">
        {isRecording && (
          <div className="flex items-center text-[#888] mt-2">
            En écoute...
            <span className="inline-flex ml-1 w-5 overflow-hidden">
              <span className="animate-[pulse-red_1s_infinite_ease-in-out]">.</span>
              <span className="animate-[pulse-red_1s_infinite_ease-in-out_0.2s]">.</span>
              <span className="animate-[pulse-red_1s_infinite_ease-in-out_0.4s]">.</span>
            </span>
          </div>
        )}
        {isTranscribing && !isRecording && (
          <div className="flex items-center text-[#E93434] mt-2 font-bold animate-pulse">
            Transcription en cours...
          </div>
        )}
      </div>
    </div>
  );
};
