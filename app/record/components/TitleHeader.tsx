import React from "react";
import { Edit2 } from "lucide-react";

interface TitleHeaderProps {
  title: string;
  isEditing: boolean;
  onTitleChange: (newTitle: string) => void;
  onSetEditing: (editing: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export const TitleHeader = ({ title, isEditing, onTitleChange, onSetEditing, inputRef }: TitleHeaderProps) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center -mt-20">
      <div className="group relative">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={title}
            placeholder="Ajouter un titre"
            onChange={(e) => onTitleChange(e.target.value)}
            onBlur={() => onSetEditing(false)}
            onKeyDown={(e) => e.key === 'Enter' && onSetEditing(false)}
            className="text-[32px] md:text-[40px] text-center font-bold tracking-tight bg-transparent border-b-2 border-[#E93434] focus:outline-none w-[350px] text-white"
          />
        ) : (
          <h1 
            onClick={() => onSetEditing(true)}
            className="text-[32px] md:text-[40px] text-center font-bold tracking-tight cursor-pointer hover:text-[#E93434] transition-colors flex items-center justify-center gap-3 text-white"
          >
            {title || "Ajouter un titre"}
            <Edit2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#666]" />
          </h1>
        )}
      </div>
    </div>
  );
};
