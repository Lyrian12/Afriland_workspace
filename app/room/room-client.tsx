"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { format, addWeeks, subWeeks, startOfWeek, addDays, isSameDay, parseISO, differenceInCalendarDays } from "date-fns";
import { fr } from "date-fns/locale";
import { searchUsers } from "./actions";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ChevronLeft, ChevronRight, X, Plus, Users, Trash2 } from "lucide-react";

// Types
type Room = { id: string; name: string; capacity: number; color: string; };
type Meeting = { id: string; title: string; roomId: string; date: string; startHour: number; durationHours: number; attendees: number; color: string; isTexture?: boolean; };

export default function RoomClient({ userName = "Jean Dupont", avatarUrl = null, userEmail = "jean.dupont@afriland.com" }: { userName?: string, avatarUrl?: string | null, userEmail?: string }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const schedulerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formTitle, setFormTitle] = useState("Brainstorming Q4");
  const [formRoomId, setFormRoomId] = useState("1");
  const [formStartTime, setFormStartTime] = useState("14:00");
  const [formEndTime, setFormEndTime] = useState("15:30");
  const [formDay, setFormDay] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formColor, setFormColor] = useState("#ef4b56");
  const [formAttendees, setFormAttendees] = useState([
      { name: "", email: "" }
  ]);
  const [suggestions, setSuggestions] = useState<{name: string | null, email: string}[]>([]);
  const [activeAttendeeIndex, setActiveAttendeeIndex] = useState<number | null>(null);

  const palette = [
    "#ef4b56", "#1abc9c", "#f39c12", "#3498db", "#9b59b6",
    "#1f1f1f", "#e67e22", "#2ecc71", "#e74c3c", "#34495e"
  ];

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const days = Array.from({ length: 6 }).map((_, i) => addDays(weekStart, i));
  const timeLabels = Array.from({ length: 11 }).map((_, i) => i + 8); // 8 to 18

  const handlePrevWeek = () => setCurrentDate(subWeeks(currentDate, 1));
  const handleNextWeek = () => setCurrentDate(addWeeks(currentDate, 1));

  const updateRoom = (id: string, field: 'name' | 'capacity', value: string | number) => {
      setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const addRoom = () => {
    const newRoom = {
      id: Math.random().toString(36).substr(2, 9),
      name: `Nouvelle Salle`,
      capacity: 10,
      color: palette[Math.floor(Math.random() * palette.length)]
    };
    setRooms([...rooms, newRoom]);
  };

  const deleteRoom = (id: string, e: React.MouseEvent) => {
     e.stopPropagation();
     setRooms(rooms.filter(r => r.id !== id));
     if (activeRoomId === id && rooms.length > 1) {
       setActiveRoomId(rooms.filter(r => r.id !== id)[0].id);
     }
  };

  const addAttendee = () => setFormAttendees([...formAttendees, { name: "", email: "" }]);
  const updateAttendee = (index: number, field: 'name' | 'email', value: string) => {
      const updated = [...formAttendees];
      updated[index][field] = value;
      setFormAttendees(updated);
  };
  const removeAttendee = (index: number) => setFormAttendees(formAttendees.filter((_, i) => i !== index));

  const handleEmailChange = async (index: number, value: string) => {
      updateAttendee(index, 'email', value);
      if (value.length > 2) {
         setActiveAttendeeIndex(index);
         const results = await searchUsers(value);
         setSuggestions(results);
      } else {
         setSuggestions([]);
         setActiveAttendeeIndex(null);
      }
  };

  const selectSuggestion = (index: number, user: {name: string | null, email: string}) => {
      updateAttendee(index, 'email', user.email);
      updateAttendee(index, 'name', user.name || "");
      setSuggestions([]);
      setActiveAttendeeIndex(null);
  };

  const handleExportPDF = async () => {
    if (!schedulerRef.current) return;
    try {
      const canvas = await html2canvas(schedulerRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`afriland-room-${format(weekStart, 'yyyy-MM-dd')}.pdf`);
    } catch (e) {
      console.error("PDF Export failed", e);
    }
  };

  const saveMeeting = () => {
      if (!formTitle || !formRoomId || !formDay || !formStartTime || !formEndTime) {
          alert("Veuillez remplir tous les champs obligatoires (Titre, Salle, Jour, Début, Fin).");
          return;
      }

      const [startH, startM] = formStartTime.split(':').map(Number);
      const [endH, endM] = formEndTime.split(':').map(Number);
      
      const startHour = startH + (startM / 60);
      const endHour = endH + (endM / 60);
      if (endHour <= startHour) {
          alert("L'heure de fin doit être après l'heure de début.");
          return;
      }
      const durationHours = endHour - startHour;

      const newMeeting: Meeting = {
          id: Math.random().toString(36).substr(2, 9),
          title: formTitle,
          roomId: formRoomId,
          date: formDay,
          startHour,
          durationHours,
          attendees: formAttendees.filter(a => a.name.trim() !== '' || a.email.trim() !== '').length,
          color: formColor,
      };

      setMeetings([...meetings, newMeeting]);
      setIsPanelOpen(false);
      
      // Optional: Reset form fields mostly
      setFormTitle("");
      setFormDescription("");
  };

  const handleMeetingClick = (meeting: Meeting) => {
      setSelectedMeeting(meeting);
      setIsPanelOpen(true);
  };

  const deleteSelectedMeeting = () => {
      if (selectedMeeting) {
          setMeetings(meetings.filter(m => m.id !== selectedMeeting.id));
          setIsPanelOpen(false);
          setSelectedMeeting(null);
      }
  };

  const openNewMeetingPanel = () => {
      setSelectedMeeting(null);
      setIsPanelOpen(true);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f4f4f4] text-[#333] text-[13px] font-sans">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#1f1f1f] text-white flex flex-col z-10 shadow-[4px_0_20px_rgba(0,0,0,0.1)] relative flex-shrink-0">
        <div className="p-6 bg-[#151515] relative overflow-hidden flex items-center gap-3">
          <Image src="/download.jpeg" alt="Afriland Logo" width={40} height={40} className="rounded-md object-cover z-10" />
          <h1 className="text-base uppercase tracking-widest font-bold relative z-10 leading-tight">
            Afriland<br/>Room
          </h1>
          <div className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-br from-transparent via-[#ef4b56] to-[#ef4b56] opacity-80" />
        </div>

        <div className="flex justify-between items-center p-6 pb-3">
          <div className="text-[11px] uppercase tracking-[1.5px] text-[#888] font-semibold">Salles de Réunion</div>
          <button onClick={addRoom} className="text-[#888] hover:text-[#ef4b56] transition-colors"><Plus size={14}/></button>
        </div>
        
        <div className="px-6 pb-2 mt-4 text-[10px] text-[#666] uppercase tracking-wider grid grid-cols-[1fr_50px_20px] gap-2 border-b border-white/5">
            <div>Nom de Salle</div>
            <div className="text-center">Places</div>
            <div></div>
        </div>
        
        <ul className="list-none flex-1 overflow-y-auto">
          {rooms.map(room => (
            <li 
               key={room.id}
               onClick={() => setActiveRoomId(room.id)}
               className={`py-3 px-6 border-b border-white/5 cursor-pointer transition-colors group relative flex items-center justify-between
                           ${activeRoomId === room.id ? 'bg-white/5 border-r-4 border-r-[#ef4b56]' : 'hover:bg-white/[0.03]'}`}
            >
              <div className="grid grid-cols-[1fr_50px_20px] gap-2 items-center w-full">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: room.color }} />
                    <input 
                       type="text" 
                       value={room.name}
                       onChange={(e) => updateRoom(room.id, 'name', e.target.value)}
                       placeholder="Nom"
                       className="font-semibold text-[13px] bg-transparent outline-none w-full focus:bg-white/10 rounded px-1 -ml-1" 
                    />
                 </div>
                 <div className="text-center">
                    <input 
                       type="number" 
                       value={room.capacity}
                       onChange={(e) => updateRoom(room.id, 'capacity', parseInt(e.target.value) || 0)}
                       className="bg-transparent outline-none w-[40px] focus:bg-white/10 rounded px-1 text-center text-[12px] text-[#ccc]" 
                    />
                 </div>
                 <button 
                     onClick={(e) => deleteRoom(room.id, e)}
                     className="opacity-0 group-hover:opacity-100 text-[#666] hover:text-[#ef4b56] transition-opacity flex justify-end"
                 >
                     <Trash2 size={14} />
                 </button>
              </div>
            </li>
          ))}
          {rooms.length === 0 && (
             <div className="p-6 text-center text-[#666] text-xs">Aucune salle configurée.</div>
          )}
        </ul>

        <div className="absolute w-[100px] h-[300px] bg-white/[0.03] rotate-45 -top-[50px] -left-[50px] pointer-events-none" />

        <div className="p-5 px-6 bg-[#151515] flex items-center gap-3 border-t border-white/5">
          {avatarUrl ? (
             <img src={avatarUrl} alt="Avatar" className="w-8 h-8 object-cover" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }} />
          ) : (
             <div className="w-8 h-8 bg-[#ef4b56] text-white flex items-center justify-center font-bold text-xs uppercase" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)"}}>
               {userName.substring(0, 2)}
             </div>
          )}
          <div>
            <div className="text-xs font-semibold">{userName}</div>
            <div className="text-[10px] text-[#888]">{userEmail}</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white relative">
        <header className="h-[70px] border-b border-[#e0e0e0] flex items-center justify-between px-[30px] bg-white flex-shrink-0">
          <div className="flex items-center gap-5">
            <button onClick={handlePrevWeek} className="w-8 h-8 border border-[#e0e0e0] flex items-center justify-center hover:border-[#ef4b56] hover:text-[#ef4b56] transition-all"><ChevronLeft size={16}/></button>
            <span className="font-bold text-base uppercase tracking-wide">Semaine {format(weekStart, 'w', { locale: fr })}</span>
            <button onClick={handleNextWeek} className="w-8 h-8 border border-[#e0e0e0] flex items-center justify-center hover:border-[#ef4b56] hover:text-[#ef4b56] transition-all"><ChevronRight size={16}/></button>
            <span className="text-[#999] text-[11px] ml-2">
               {format(days[0], 'dd MMM', { locale: fr })} - {format(days[5], 'dd MMM yyyy', { locale: fr })}
            </span>
          </div>
          <div className="flex gap-4">
            <button onClick={handleExportPDF} className="h-[38px] px-5 flex items-center justify-center font-semibold text-xs uppercase tracking-wide border border-[#e0e0e0] hover:border-[#1f1f1f] text-[#333] transition-all">
              Export PDF
            </button>
            <button onClick={openNewMeetingPanel} className="h-[38px] px-5 flex items-center justify-center font-semibold text-xs uppercase tracking-wide bg-[#ef4b56] text-white hover:bg-[#d63d47] transition-all" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%)"}}>
              Nouvelle Réunion
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto relative" ref={schedulerRef}>
          <div className="grid grid-cols-[60px_repeat(6,1fr)] border-b border-[#e0e0e0] sticky top-0 bg-white z-[5]">
            <div />
            {days.map((day, i) => {
               const active = isSameDay(day, new Date());
               return (
                <div key={i} className={`p-[15px] text-center border-l border-[#eee] ${active ? 'text-[#ef4b56]' : ''}`}>
                    <span className="block uppercase font-bold text-[11px] tracking-wide mb-1">{format(day, 'EEE', { locale: fr })}</span>
                    <span className={`text-[11px] ${active ? '' : 'text-[#888]'}`}>{format(day, 'dd')}</span>
                </div>
               );
            })}
          </div>

          <div className="grid grid-cols-[60px_repeat(6,1fr)] grid-rows-[repeat(11,60px)]">
             {/* Time Labels */}
             {timeLabels.map((time, i) => (
               <div key={`time-${i}`} className="border-b border-r border-[#eee] flex justify-center items-start pt-[2px] text-[#888] text-[11px] relative bg-[#fbfbfb]" style={{ gridColumn: 1 }}>
                  <span className="bg-[#fbfbfb] px-1 leading-none">{time.toString().padStart(2, '0')}:00</span>
               </div>
             ))}

             {/* Days Grid Lines */}
             {days.map((_, i) => (
                <div key={`col-${i}`} className="border-r border-[#eee] relative bg-[length:100%_60px] bg-[image:linear-gradient(to_bottom,#eee_1px,transparent_1px)]" style={{ gridColumn: i + 2, gridRow: '1 / -1' }} />
             ))}

             {/* Current Time Indicator (Decorative example for day 4) */}
             <div className="col-start-4 row-start-1 row-span-full relative pointer-events-none bg-[rgba(239,75,86,0.02)]">
                  <div className="absolute left-0 right-0 h-[2px] bg-[#ef4b56] z-10" style={{ top: '250px' }}>
                     <div className="absolute -left-[5px] -top-[4px] w-0 h-0 border-l-[5px] border-l-[#ef4b56] border-y-[5px] border-y-transparent" />
                  </div>
             </div>

             {/* Meetings */}
             {meetings.map((meeting) => {
                 const meetingDate = parseISO(meeting.date);
                 const offset = differenceInCalendarDays(meetingDate, weekStart);
                 
                 // Show only if within current Mono-Sat view (offset 0-5)
                 if (offset < 0 || offset > 5) return null;

                 return (
                 <div key={meeting.id} 
                      onClick={() => handleMeetingClick(meeting)}
                      className={`absolute inset-x-[4px] p-2 text-white text-[11px] overflow-hidden shadow-[2px_2px_5px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-[1.02] hover:z-10 transition-transform rounded-sm ${meeting.isTexture ? 'texture-bg' : ''}`}
                      style={{
                         top: `${(meeting.startHour - 8) * 60}px`,
                         height: `${meeting.durationHours * 60}px`,
                         backgroundColor: meeting.color,
                         gridColumn: offset + 2,
                         gridRow: '1 / -1'
                      }}
                 >
                     <span className="font-bold block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{meeting.title}</span>
                     <div className="opacity-90 flex items-center gap-1 text-[10px]">
                        <span>👥 {meeting.attendees}</span> • <span>{Math.floor(meeting.startHour)}:{(meeting.startHour % 1 * 60).toString().padStart(2, '0')} - {Math.floor(meeting.startHour + meeting.durationHours)}:{((meeting.startHour + meeting.durationHours) % 1 * 60).toString().padStart(2, '0')}</span>
                     </div>
                 </div>
                 );
             })}
          </div>
        </div>

        {/* Panel Overlay */}
        <div className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 ${isPanelOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsPanelOpen(false)} />

        {/* Booking Panel or Meeting Details */}
        <aside className={`fixed top-0 right-0 w-[420px] max-w-full h-full bg-white z-[100] shadow-[-10px_0_30px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="text-white p-[30px] pb-[60px] relative transition-colors" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", backgroundColor: selectedMeeting ? selectedMeeting.color : "#ef4b56" }}>
                <button onClick={() => setIsPanelOpen(false)} className="absolute top-5 right-5 w-[30px] h-[30px] bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors">
                  <X size={16}/>
                </button>
                <h2 className="uppercase text-lg tracking-wide mb-1 font-bold leading-tight">
                  {selectedMeeting ? "Détails de la\nRéunion" : "Nouvelle\nRéunion"}
                </h2>
                <p className="opacity-80 text-xs">{selectedMeeting ? "Informations du créneau" : "Planifier un créneau"}</p>
            </div>

            {selectedMeeting ? (
                // --- MEETING DETAILS VIEW ---
                <div className="px-[30px] pb-[30px] overflow-y-auto flex-1 -mt-5 space-y-6 text-[#333]">
                    <div>
                        <div className="uppercase text-[10px] font-bold text-[#999] tracking-wide mb-1">Titre de la réunion</div>
                        <div className="text-[14px] font-bold">{selectedMeeting.title}</div>
                    </div>
                    
                    <div>
                        <div className="uppercase text-[10px] font-bold text-[#999] tracking-wide mb-1">Salle</div>
                        <div className="text-[13px] font-medium">{rooms.find(r => r.id === selectedMeeting.roomId)?.name || "Salle Inconnue"}</div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <div className="uppercase text-[10px] font-bold text-[#999] tracking-wide mb-1">Date</div>
                            <div className="text-[13px]">{format(parseISO(selectedMeeting.date), 'dd MMMM yyyy', { locale: fr })}</div>
                        </div>
                        <div className="flex-1">
                            <div className="uppercase text-[10px] font-bold text-[#999] tracking-wide mb-1">Horaire</div>
                            <div className="text-[13px]">
                                {Math.floor(selectedMeeting.startHour)}:{(selectedMeeting.startHour % 1 * 60).toString().padStart(2, '0')} - 
                                {Math.floor(selectedMeeting.startHour + selectedMeeting.durationHours)}:{((selectedMeeting.startHour + selectedMeeting.durationHours) % 1 * 60).toString().padStart(2, '0')}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="uppercase text-[10px] font-bold text-[#999] tracking-wide mb-1">Participants confirmés</div>
                        <div className="flex items-center gap-2 text-[13px]">
                             <Users size={16} className="text-[#999]" /> {selectedMeeting.attendees} Participant(s)
                        </div>
                    </div>
                </div>
            ) : (
                // --- NEW MEETING FORM ---
                <div className="px-[30px] pb-[30px] overflow-y-auto flex-1 -mt-5">
                <div className="mb-6">
                    <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Titre de la réunion</label>
                    <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors" placeholder="Ex: Point Hebdo" />
                </div>
                
                <div className="mb-6">
                    <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Salle</label>
                    {rooms.length > 0 ? (
                        <select value={formRoomId} onChange={e => setFormRoomId(e.target.value)} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors">
                            {rooms.map(r => <option key={r.id} value={r.id}>{r.name} ({r.capacity} pers)</option>)}
                        </select>
                    ) : (
                        <div className="w-full p-3 border border-[#e0e0e0] text-[#999] bg-[#fcfcfc] text-[13px]">
                            Veuillez d'abord ajouter une salle dans la barre latérale.
                        </div>
                    )}
                </div>

                <div className="flex gap-[15px] mb-6">
                    <div className="flex-[1.2]">
                        <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Jour</label>
                        <input type="date" value={formDay} onChange={e => setFormDay(e.target.value)} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors" />
                    </div>
                    <div className="flex-1">
                        <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Début</label>
                        <input type="time" value={formStartTime} onChange={e => setFormStartTime(e.target.value)} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors" />
                    </div>
                    <div className="flex-1">
                        <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Fin</label>
                        <input type="time" value={formEndTime} onChange={e => setFormEndTime(e.target.value)} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors" />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Description</label>
                    <textarea value={formDescription} onChange={e => setFormDescription(e.target.value)} rows={3} className="w-full p-3 border border-[#e0e0e0] font-sans text-[13px] text-[#333] bg-[#fcfcfc] focus:outline-none focus:border-[#ef4b56] focus:bg-white transition-colors" placeholder="Ordre du jour..." />
                </div>

                <div className="mb-6">
                    <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Couleur</label>
                    <div className="flex flex-wrap gap-2.5">
                        {palette.map(color => (
                            <label key={color} className="block relative cursor-pointer group">
                                <input type="radio" name="color" value={color} checked={formColor === color} onChange={() => setFormColor(color)} className="peer sr-only" />
                                <div className="w-6 h-6 rounded-sm my-1 transition-transform group-hover:scale-110" style={{ backgroundColor: color }} />
                                {formColor === color && (
                                    <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none text-xs">✓</div>
                                )}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block uppercase text-[10px] font-bold text-[#999] tracking-wide mb-2">Participants</label>
                    <div className="border border-[#e0e0e0] mb-2.5">
                        {formAttendees.map((att, idx) => (
                           <div key={idx} className={`flex border-b border-[#eee] relative ${idx === formAttendees.length - 1 ? 'border-b-0' : ''}`}>
                               <input type="text" value={att.name} onChange={e => updateAttendee(idx, 'name', e.target.value)} placeholder="Nom" className="flex-1 p-2.5 text-xs bg-transparent border-r border-[#eee] focus:outline-none focus:bg-black/[0.02]" />
                               <div className="flex-[1.5] relative">
                                   <input type="email" value={att.email} onChange={e => handleEmailChange(idx, e.target.value)} placeholder="Email" className="w-full p-2.5 text-xs bg-transparent focus:outline-none focus:bg-black/[0.02]" />
                                   {activeAttendeeIndex === idx && suggestions.length > 0 && (
                                      <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#e0e0e0] shadow-lg z-50 max-h-[150px] overflow-auto">
                                         {suggestions.map((sug, i) => (
                                            <li key={i} onClick={() => selectSuggestion(idx, sug)} className="p-2 text-xs cursor-pointer hover:bg-black/[0.03] border-b border-[#eee] last:border-b-0">
                                               <div className="font-semibold">{sug.name || "Sans nom"}</div>
                                               <div className="text-[#888]">{sug.email}</div>
                                            </li>
                                         ))}
                                      </ul>
                                   )}
                               </div>
                               <button onClick={() => removeAttendee(idx)} className="w-[30px] border-none bg-transparent text-[#ccc] hover:text-[#ef4b56] flex items-center justify-center"><X size={14}/></button>
                           </div>
                        ))}
                    </div>
                    <button onClick={addAttendee} className="w-full bg-transparent border border-dashed border-[#e0e0e0] p-2.5 text-[#888] text-[11px] uppercase font-semibold transition-colors hover:border-[#ef4b56] hover:text-[#ef4b56]">
                        + Ajouter un participant
                    </button>
                </div>
              </div>
            )}

            <div className="p-5 px-[30px] border-t border-[#e0e0e0] bg-[#fcfcfc] flex justify-end gap-2.5">
                {selectedMeeting ? (
                    <button onClick={deleteSelectedMeeting} className="h-[38px] px-5 flex items-center justify-center font-semibold text-xs uppercase tracking-wide bg-transparent border border-[#ef4b56] text-[#ef4b56] hover:bg-[#ef4b56] hover:text-white transition-all w-full">
                       <Trash2 size={14} className="mr-2" /> Supprimer la réunion
                    </button>
                ) : (
                    <>
                        <button onClick={() => setIsPanelOpen(false)} className="h-[38px] px-5 flex items-center justify-center font-semibold text-xs uppercase tracking-wide text-[#333] hover:text-[#000]">
                           Annuler
                        </button>
                        <button onClick={saveMeeting} className="h-[38px] px-5 flex items-center justify-center font-semibold text-xs uppercase tracking-wide bg-[#ef4b56] text-white hover:bg-[#d63d47] transition-all" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 92% 100%, 0 100%)"}}>
                           Enregistrer
                        </button>
                    </>
                )}
            </div>
        </aside>

        <style dangerouslySetInnerHTML={{__html: `
            .texture-bg::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent);
                background-size: 10px 10px;
                pointer-events: none;
            }
        `}} />
      </main>
    </div>
  );
}
