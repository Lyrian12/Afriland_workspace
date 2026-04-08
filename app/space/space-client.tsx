"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Message = {
  id: string;
  user: { name: string; avatar?: string; initial?: string; role?: string };
  time: string;
  content: string;
  reactions?: { emoji: string; count: number }[];
};

interface SpaceClientProps {
  userName: string;
  avatarUrl: string | null;
  userRole: string;
}

export function SpaceClient({ userName, avatarUrl, userRole }: SpaceClientProps) {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [description, setDescription] = useState("Cet espace est dédié à votre travail. Respectez la zone et collaborez efficacement.");
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [objectives, setObjectives] = useState<{id: string, text: string, done: boolean}[]>([]);
  const [newObjective, setNewObjective] = useState("");
  const [isAddingObjective, setIsAddingObjective] = useState(false);

  const [sessions, setSessions] = useState<{id: string, name: string}[]>([{ id: '1', name: 'général' }]);
  const [activeSessionId, setActiveSessionId] = useState('1');
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [newSessionName, setNewSessionName] = useState("");

  const activeSessionName = sessions.find(s => s.id === activeSessionId)?.name || 'général';

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      user: { name: userName, initial: userName.charAt(0), role: userRole },
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute:'2-digit' }),
      content: messageInput,
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <div className="bg-brand-main text-brand-text h-screen w-screen overflow-hidden flex selection:bg-brand-red/30 selection:text-white font-geist">
      {/* Sidebar / Left Panel */}
      <aside className="w-[260px] bg-brand-sidebar flex flex-col shrink-0 border-r border-brand-border z-20">
        <header className="h-14 px-4 flex items-center justify-between hover:bg-brand-surface cursor-pointer transition-colors border-b border-brand-border shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center overflow-hidden">
                <Image src="/download.jpeg" alt="Afriland Logo" width={24} height={24} className="object-cover" />
            </div>
            <h1 className="font-extrabold text-white text-base tracking-tight truncate">Afriland Space</h1>
          </div>
          <i className="ph ph-caret-down text-brand-gray"></i>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar py-4 flex flex-col gap-6">
          <div className="px-3 space-y-0.5">
            <button className="w-full flex items-center gap-3 px-2 py-1.5 text-brand-gray hover:bg-brand-surface hover:text-white rounded-md text-[15px] font-medium transition-colors">
              <i className="ph ph-at text-xl"></i>
              Mentions
            </button>
            <button className="w-full flex items-center gap-3 px-2 py-1.5 text-brand-gray hover:bg-brand-surface hover:text-white rounded-md text-[15px] font-medium transition-colors">
              <i className="ph ph-paper-plane-tilt text-xl"></i>
              Brouillons & Envoyés
            </button>
          </div>

          <div className="px-1">
            <div className="flex items-center justify-between px-4 mb-1.5 group cursor-pointer text-brand-darkGray hover:text-brand-gray transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider">
                <i className="ph-bold ph-caret-down text-[10px]"></i>
                Espaces & Sessions
              </div>
              <button onClick={() => setIsAddingSession(true)} className="hover:text-white transition-colors" title="Ajouter une session">
                <i className="ph-bold ph-plus opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>
            </div>
            
            <div className="px-2 space-y-0.5">
              {sessions.map(session => (
                <button 
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md group relative transition-colors ${activeSessionId === session.id ? 'bg-brand-red/10 text-brand-red' : 'text-brand-gray hover:bg-brand-surface hover:text-brand-text'}`}
                >
                  {activeSessionId === session.id && (
                     <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-brand-red rounded-r"></div>
                  )}
                  <div className="flex items-center gap-2 truncate pl-1">
                    <i className="ph-bold ph-hash text-lg"></i>
                    <span className={`font-semibold text-[15px] truncate tracking-tight ${activeSessionId === session.id ? '' : 'font-medium'}`}>
                      {session.name}
                    </span>
                  </div>
                </button>
              ))}
              
              {isAddingSession && (
                <div className="px-2 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-2 bg-brand-surface border border-brand-border rounded-md px-2 py-1.5 focus-within:border-brand-red shadow-inner">
                    <i className="ph-bold ph-hash text-brand-gray text-[13px]"></i>
                    <input 
                      type="text" 
                      value={newSessionName}
                      onChange={(e) => setNewSessionName(e.target.value)}
                      className="bg-transparent text-white text-[13px] outline-none w-full"
                      placeholder="nouveau-canal"
                      autoFocus
                      onBlur={() => {
                        setIsAddingSession(false);
                        setNewSessionName("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && newSessionName.trim()) {
                          const name = newSessionName.trim().replace(/^#+/, '').replace(/\s+/g, '-').toLowerCase();
                          const newId = Date.now().toString();
                          setSessions([...sessions, { id: newId, name }]);
                          setActiveSessionId(newId);
                          setNewSessionName("");
                          setIsAddingSession(false);
                        } else if (e.key === 'Escape') {
                          setIsAddingSession(false);
                          setNewSessionName("");
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-4 shrink-0"></div> 
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-brand-main relative min-w-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-main via-brand-red/20 to-brand-main z-20 pointer-events-none"></div>

        <header className="h-14 border-b border-brand-border flex items-center justify-between px-5 shrink-0 bg-brand-main/95 backdrop-blur z-10">
          <div className="flex items-center min-w-0">
            <i className="ph-bold ph-hash text-2xl text-brand-gray mr-2 shrink-0"></i>
            <h2 className="font-extrabold text-white text-[17px] tracking-tight mr-3 shrink-0">{activeSessionName}</h2>
            <div className="w-px h-6 bg-brand-border mx-2 shrink-0"></div>
            <p className="text-[13px] text-brand-gray truncate max-w-md hidden md:block">
              Espace de discussion principal.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="relative w-48 lg:w-72 group">
              <input type="text" placeholder="Rechercher Afriland Space" className="w-full bg-brand-surface border border-transparent hover:border-brand-border focus:border-brand-red focus:bg-black transition-all duration-200 outline-none rounded-md text-[13px] px-3 py-1.5 text-white placeholder-brand-darkGray shadow-inner pr-8" />
              <i className="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-darkGray group-focus-within:text-brand-red transition-colors"></i>
            </div>
            
            <div className="w-px h-6 bg-brand-border"></div>

            <div className="flex items-center gap-3 text-brand-gray">
              <button className="hover:text-white transition-colors relative" title="Éléments Épinglés">
                <i className="ph-fill ph-push-pin text-[20px]"></i>
                <span className="absolute top-0 -right-1 w-2 h-2 bg-brand-red rounded-full border border-brand-main"></span>
              </button>
              
              <button className="bg-brand-surface hover:bg-brand-surfaceHover text-brand-text flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors border border-brand-border" title="Panneau Droit">
                <i className="ph-fill ph-users text-[18px]"></i>
                <span className="text-xs font-bold">1</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-end pt-4 pb-2">
          <div className="flex flex-col justify-end min-h-full">
            <div className="px-6 mt-4 mb-8 max-w-3xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-4 border border-brand-red/20">
                <i className="ph-bold ph-hash text-[36px] text-brand-red"></i>
              </div>
              <h1 className="text-[36px] font-extrabold text-white mb-2 tracking-tight">Bienvenue sur votre espace !</h1>
              
              {isEditingDesc ? (
                <div className="mt-2">
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border rounded-md text-white text-[15px] p-3 outline-none focus:border-brand-red transition-colors resize-y min-h-[80px]"
                    autoFocus
                  />
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => setIsEditingDesc(false)} className="px-3 py-1.5 bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold rounded-md transition-colors">
                      Enregistrer
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-brand-gray text-[16px] leading-relaxed whitespace-pre-wrap">
                    {description}
                  </p>
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setIsEditingDesc(true)} className="px-4 py-2 rounded-md bg-transparent hover:bg-brand-surface border border-transparent hover:border-brand-border text-brand-gray hover:text-white text-[13px] font-bold transition-colors flex items-center gap-2">
                      <i className="ph-bold ph-pencil-simple text-[16px]"></i> Modifier la Description
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center justify-center relative my-4 mx-6 group">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-brand-border group-hover:border-brand-gray/30 transition-colors"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-brand-main px-3 text-[11px] font-bold text-brand-darkGray uppercase tracking-wider group-hover:text-brand-gray transition-colors">Aujourd'hui</span>
              </div>
            </div>

            {messages.map((message) => (
              <div key={message.id} className="message-row relative flex gap-4 px-6 py-1.5 mt-2 hover:bg-brand-surface/40 transition-colors group">
                <div className="message-actions absolute right-6 -top-3 hidden group-hover:flex items-center bg-brand-main border border-brand-border rounded-md shadow-lg overflow-hidden z-10">
                  <button className="p-1.5 hover:bg-brand-surface text-brand-gray hover:text-white transition-colors"><i className="ph-bold ph-share-fat text-[16px]"></i></button>
                  <div className="w-px h-4 bg-brand-border mx-0.5"></div>
                  <button className="p-1.5 hover:bg-brand-surface text-brand-gray hover:text-white transition-colors"><i className="ph-bold ph-dots-three text-[16px]"></i></button>
                </div>

                <div className="shrink-0 mt-0.5 cursor-pointer">
                  {message.user.avatar ? (
                    <img src={message.user.avatar} className="w-10 h-10 rounded-md object-cover hover:opacity-80 transition-opacity shadow-sm" alt="Avatar" />
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-brand-red flex items-center justify-center font-bold text-white text-lg shadow-sm hover:opacity-90 transition-opacity">
                      {message.user.initial}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className={`font-bold text-[15px] ${message.user.role === 'Admin' ? 'text-brand-red' : 'text-white'} hover:underline cursor-pointer`}>{message.user.name}</span>
                    {message.user.role && (
                      <span className="bg-brand-red/10 text-brand-red text-[9px] uppercase font-bold px-1 rounded-sm border border-brand-red/20">{message.user.role}</span>
                    )}
                    <span className="text-[11px] text-brand-darkGray font-medium">{message.time}</span>
                  </div>
                  <div className="text-[15px] text-brand-text leading-[1.45] whitespace-pre-wrap">{message.content}</div>
                  
                </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="flex items-center gap-3 px-6 py-2 mt-4 text-[13px] text-brand-gray bg-brand-surface/30 mx-6 rounded-lg border border-brand-border/50">
                <i className="ph-fill ph-info text-brand-red text-lg"></i>
                <span>Commencez à discuter dans cet espace. Les messages apparaîtront ici.</span>
              </div>
            )}
            <div className="h-2"></div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 shrink-0 bg-brand-main w-full">
          <div className="bg-brand-surface border border-brand-border rounded-xl flex flex-col focus-within:border-brand-red focus-within:ring-1 focus-within:ring-brand-red/50 transition-all shadow-lg overflow-hidden">


            <div className="px-4 py-3">
              <textarea 
                className="w-full bg-transparent text-white placeholder-brand-darkGray outline-none resize-none text-[15px] min-h-[44px] max-h-[40vh] custom-scrollbar leading-relaxed" 
                rows={1} 
                placeholder={`Message #${activeSessionName}...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
            </div>

            <div className="flex items-center justify-end px-2 py-2 bg-brand-surface border-t border-brand-border">
              <div onClick={handleSendMessage} className="flex bg-brand-red hover:bg-brand-darkRed rounded-md transition-colors shadow-sm cursor-pointer overflow-hidden">
                <button className="px-3 h-8 flex items-center justify-center text-white font-bold text-sm">
                  <i className="ph-fill ph-paper-plane-right"></i>
                </button>
                <div className="w-px h-8 bg-black/20"></div>
                <button className="px-2 h-8 flex items-center justify-center text-white">
                  <i className="ph-bold ph-caret-down text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end px-1 pt-1.5">
            <span className="text-[11px] font-semibold text-brand-darkGray">
              <strong>Entrée</strong> pour envoyer <span className="mx-1">•</span> <strong>Maj + Entrée</strong> pour une nouvelle ligne
            </span>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[280px] bg-brand-sidebar border-l border-brand-border flex-col shrink-0 z-20 hidden lg:flex shadow-[-5px_0_15px_rgba(0,0,0,0.3)]">
        <header className="h-14 border-b border-brand-border flex items-center px-5 shrink-0 bg-brand-sidebar">
          <h3 className="font-bold text-white text-[15px]">Détails Session</h3>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-6">
          <div className="bg-brand-surface rounded-xl p-4 border border-brand-border flex flex-col items-center justify-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent opacity-50"></div>
            <h4 className="text-[11px] font-bold text-brand-red uppercase tracking-widest mb-2 relative z-10">Heure Locale</h4>
            <div className="text-4xl font-extrabold text-white font-mono tracking-tight relative z-10 mt-1 mb-1">{currentTime || "..."}</div>
          </div>

          <div className="h-px bg-brand-border w-full"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-brand-gray uppercase tracking-wider">Dans cette Session (1)</h4>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-brand-surface rounded-lg cursor-pointer transition-colors group">
                <div className="relative shrink-0">
                  {avatarUrl ? (
                    <img src={avatarUrl} className="w-8 h-8 rounded-md object-cover shadow-sm" alt={userName} />
                  ) : (
                    <div className="w-8 h-8 rounded-md bg-brand-red text-white flex items-center justify-center font-bold text-sm shadow-sm uppercase">{userName.substring(0,2)}</div>
                  )}
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-brand-sidebar group-hover:border-brand-surface rounded-full transition-colors"></div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] text-white font-semibold truncate group-hover:underline">{userName}</span>
                  <span className="text-[11px] text-brand-gray truncate">En ligne ({userRole})</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-brand-border w-full"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-brand-gray uppercase tracking-wider">Objectifs de Session</h4>
              <button onClick={() => setIsAddingObjective(true)} className="text-brand-gray hover:text-white transition-colors"><i className="ph-bold ph-plus"></i></button>
            </div>
            <div className="space-y-2">
              {objectives.map((obj) => (
                <label key={obj.id} className={`flex items-start gap-3 p-2 bg-brand-surface/50 rounded-lg cursor-pointer hover:bg-brand-surface transition-colors border border-transparent hover:border-brand-border ${obj.done ? 'opacity-50 line-through' : ''}`}>
                  <input type="checkbox" checked={obj.done} onChange={() => setObjectives(objectives.map(o => o.id === obj.id ? { ...o, done: !o.done } : o))} className="mt-1 shrink-0 accent-brand-red w-4 h-4 bg-brand-main border-brand-border rounded" />
                  <span className="text-[13px] text-brand-text leading-tight">{obj.text}</span>
                </label>
              ))}
              
              {isAddingObjective && (
                <div className="flex flex-col gap-2 p-2 bg-brand-surface/50 rounded-lg border border-brand-border">
                  <input 
                    type="text" 
                    value={newObjective}
                    onChange={(e) => setNewObjective(e.target.value)}
                    placeholder="Nouvel objectif..."
                    className="w-full bg-brand-main text-white text-[13px] p-1.5 rounded outline-none border border-transparent focus:border-brand-red"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newObjective.trim()) {
                        setObjectives([...objectives, { id: Date.now().toString(), text: newObjective, done: false }]);
                        setNewObjective("");
                        setIsAddingObjective(false);
                      }
                    }}
                  />
                  <div className="flex justify-end gap-2">
                    <button onClick={() => { setIsAddingObjective(false); setNewObjective(""); }} className="text-[11px] text-brand-gray hover:text-white">Annuler</button>
                    <button onClick={() => {
                      if (newObjective.trim()) {
                        setObjectives([...objectives, { id: Date.now().toString(), text: newObjective, done: false }]);
                        setNewObjective("");
                        setIsAddingObjective(false);
                      }
                    }} className="text-[11px] text-brand-red font-bold hover:text-white">Ajouter</button>
                  </div>
                </div>
              )}
              {!isAddingObjective && objectives.length === 0 && (
                <div className="text-xs text-brand-darkGray italic px-2">Aucun objectif défini.</div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
