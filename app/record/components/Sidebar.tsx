import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  recordings: any[];
  activeRecord: any | null;
  onSelect: (recording: any) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
}

export const Sidebar = ({ recordings, activeRecord, onSelect, onDelete, onNew }: SidebarProps) => {
  return (
    <aside className="hidden md:flex flex-col w-[280px] bg-[#141414] rounded-[24px] border border-[#222] flex-shrink-0 overflow-hidden shadow-2xl">
      <div className="p-6 pb-2 flex items-center justify-between">
        <h2 className="text-[20px] font-bold tracking-tight text-white">Library</h2>
      </div>
      
      <div className="px-4 mb-4">
        <button 
          onClick={onNew}
          className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#333] hover:border-[#E93434] text-white py-2.5 rounded-[12px] text-[13px] font-bold transition-all"
        >
          <Plus className="w-4 h-4" />
          Nouveau
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar pb-6 space-y-2">
        {recordings.length === 0 && (
          <div className="text-[13px] text-[#666] text-center mt-10">
            Aucun enregistrement
          </div>
        )}
        {recordings.map((rec) => {
          const isActive = activeRecord?.id === rec.id;
          const min = Math.floor((rec.duration || 0) / 60);
          const sec = (rec.duration || 0) % 60;
          
          return (
            <div
              key={rec.id}
              className={cn(
                "border rounded-[16px] p-4 cursor-pointer relative group transition-colors flex justify-between items-center",
                isActive 
                  ? "bg-black border-[#333] hover:border-[#555]" 
                  : "bg-transparent border-transparent hover:bg-[#1A1A1A]"
              )}
            >
              <div className="flex-1 min-w-0" onClick={() => onSelect(rec)}>
                <div className="flex justify-between items-start mb-1">
                  <span className={cn("text-[14px] font-bold truncate pr-2", isActive ? "text-white" : "text-[#CCC]")}>
                    {rec.title}
                  </span>
                </div>
                <span className="text-[12px] text-[#808080]">
                  {new Date(rec.createdAt).toLocaleDateString()} • {min > 0 ? `${min}m ` : ""}{sec}s
                </span>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(rec.id);
                  }}
                  className="p-1.5 hover:bg-[#222] rounded-full text-[#666] hover:text-[#E93434] transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                {!isActive && <span className="text-[#444] hover:text-white transition-colors">→</span>}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
