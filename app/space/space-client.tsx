"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { searchWorkspaceUsersByEmail, type WorkspaceUserSearchResult } from "./actions";
import { useChat } from "@/lib/hooks/useChat";

type Objective = {
  id: string;
  text: string;
  done: boolean;
};

type Session = {
  id: string;
  name: string;
  isConnected: boolean;
  canInvite: boolean;
  isPersisted: boolean;
  defaultChannelId: string | null;
};

type SessionState = {
  description: string;
  objectives: Objective[];
  participants: SessionParticipant[];
};

type SessionParticipant = {
  id: string;
  name: string;
  email?: string | null;
  avatar?: string | null;
  role?: string;
  isOnline: boolean;
};

const DEFAULT_SESSION: Session = {
  id: "local-general",
  name: "générale",
  isConnected: false,
  canInvite: false,
  isPersisted: false,
  defaultChannelId: null,
};

const DEFAULT_DESCRIPTION =
  "Cet espace est dédié à votre travail. Respectez la zone et collaborez efficacement.";

const createDefaultSessionState = (participants: SessionParticipant[] = []): SessionState => ({
  description: DEFAULT_DESCRIPTION,
  objectives: [],
  participants,
});

const normalizeSessionName = (value: string): string => {
  return value.trim().replace(/^#+/, "").replace(/\s+/g, "-").toLowerCase();
};

interface SpaceClientProps {
  userId: string;
  userEmail: string;
  userName: string;
  avatarUrl: string | null;
  userRole: string;
  initialSpaces: Array<{
    id: string;
    name: string;
    canInvite: boolean;
    defaultChannelId: string | null;
  }>;
}

export function SpaceClient({
  userId,
  userEmail,
  userName,
  avatarUrl,
  userRole,
  initialSpaces,
}: SpaceClientProps) {
  const searchParams = useSearchParams();
  const selectedSpaceIdFromQuery = searchParams.get("spaceId")?.trim() || "";

  const currentUserParticipant: SessionParticipant = useMemo(
    () => ({
      id: userId,
      name: userName,
      email: userEmail,
      avatar: avatarUrl,
      role: userRole,
      isOnline: true,
    }),
    [avatarUrl, userEmail, userId, userName, userRole],
  );

  const initialSessions: Session[] = useMemo(() => {
    if (initialSpaces.length > 0) {
      return initialSpaces.map((space) => ({
        id: space.id,
        name: space.name,
        isConnected: false,
        canInvite: space.canInvite,
        isPersisted: true,
        defaultChannelId: space.defaultChannelId,
      }));
    }

    return [{ ...DEFAULT_SESSION, canInvite: false, isPersisted: false, defaultChannelId: null }];
  }, [initialSpaces]);

  const [messageInput, setMessageInput] = useState("");
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [newObjective, setNewObjective] = useState("");
  const [isAddingObjective, setIsAddingObjective] = useState(false);

  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [activeSessionId, setActiveSessionId] = useState(initialSessions[0]?.id ?? DEFAULT_SESSION.id);
  const [sessionStates, setSessionStates] = useState<Record<string, SessionState>>(() => {
    const states: Record<string, SessionState> = {};
    for (const session of initialSessions) {
      states[session.id] = createDefaultSessionState([currentUserParticipant]);
    }
    return states;
  });
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [newSessionName, setNewSessionName] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<WorkspaceUserSearchResult[]>([]);
  const [isSearchingUsers, setIsSearchingUsers] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [selectedSearchUserId, setSelectedSearchUserId] = useState<string | null>(null);
  const [invitedUserIdsBySession, setInvitedUserIdsBySession] = useState<Record<string, string[]>>({});
  const [inviteFeedback, setInviteFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [inviteSendingUserId, setInviteSendingUserId] = useState<string | null>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSession = sessions.find((session) => session.id === activeSessionId);
  const activeSessionName = activeSession?.name || DEFAULT_SESSION.name;
  const activeSessionState = sessionStates[activeSessionId] ?? createDefaultSessionState();
  const canInviteInActiveSession = Boolean(activeSession?.isPersisted && activeSession?.canInvite);
  const activeChannelId = activeSession?.defaultChannelId ?? null;

  const {
    isConnected: isSocketConnected,
    messages: chatMessages,
    typingUsers,
    participants: realtimeParticipants,
    sendMessage,
    startTyping,
    stopTyping,
  } = useChat({
    channelId: activeChannelId,
    userId,
    userName,
    avatar: avatarUrl,
    spaceId: activeSession?.isPersisted ? activeSession.id : null,
  });

  const visibleParticipants = activeSession?.isPersisted
    ? realtimeParticipants
    : activeSessionState.participants;
  const displayedMessages = activeSession?.isPersisted ? chatMessages : [];
  const connectedPeopleCount = visibleParticipants.filter((participant) => participant.isOnline).length;

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSessionStates((previous) => {
      if (previous[activeSessionId]) return previous;
      return {
        ...previous,
        [activeSessionId]: createDefaultSessionState([currentUserParticipant]),
      };
    });

    setIsEditingDesc(false);
    setIsAddingObjective(false);
    setNewObjective("");
    setInviteFeedback(null);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    stopTyping();
  }, [activeSessionId, currentUserParticipant, stopTyping]);

  useEffect(() => {
    setSessions((previous) =>
      previous.map((session) => ({
        ...session,
        isConnected: session.id === activeSessionId ? isSocketConnected : false,
      })),
    );
  }, [activeSessionId, isSocketConnected]);

  useEffect(() => {
    if (!selectedSpaceIdFromQuery) return;
    if (!sessions.some((session) => session.id === selectedSpaceIdFromQuery)) return;
    if (activeSessionId === selectedSpaceIdFromQuery) return;
    setActiveSessionId(selectedSpaceIdFromQuery);
  }, [activeSessionId, selectedSpaceIdFromQuery, sessions]);

  useEffect(() => {
    const trimmedQuery = searchInput.trim();

    if (trimmedQuery.length < 2) {
      setSearchResults([]);
      setSelectedSearchUserId(null);
      setIsSearchingUsers(false);
      setSearchError(null);
      setInviteFeedback(null);
      return;
    }

    let cancelled = false;
    setIsSearchingUsers(true);
    setSearchError(null);

    const timeoutId = setTimeout(async () => {
      try {
        const users = await searchWorkspaceUsersByEmail(trimmedQuery);
        if (cancelled) return;
        setSearchResults(users);
        setSelectedSearchUserId((previous) =>
          users.some((user) => user.id === previous) ? previous : null,
        );
      } catch (error) {
        console.error("Search users failed:", error);
        if (cancelled) return;
        setSearchResults([]);
        setSelectedSearchUserId(null);
        setSearchError("Une erreur est survenue lors de la recherche.");
      } finally {
        if (!cancelled) {
          setIsSearchingUsers(false);
        }
      }
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [searchInput]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
    };
  }, []);

  const updateActiveSessionState = (updater: (state: SessionState) => SessionState) => {
    setSessionStates((previous) => {
      const current = previous[activeSessionId] ?? createDefaultSessionState();
      return {
        ...previous,
        [activeSessionId]: updater(current),
      };
    });
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    sendMessage(messageInput.trim(), "TEXT");
    setMessageInput("");
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    stopTyping();
  };

  const addObjective = () => {
    const objectiveText = newObjective.trim();
    if (!objectiveText) return;

    updateActiveSessionState((current) => ({
      ...current,
      objectives: [
        ...current.objectives,
        {
          id: Date.now().toString(),
          text: objectiveText,
          done: false,
        },
      ],
    }));

    setNewObjective("");
    setIsAddingObjective(false);
  };

  const handleInviteUser = async (workspaceUser: WorkspaceUserSearchResult) => {
    if (!activeSession?.id) return;

    if (!canInviteInActiveSession) {
      setInviteFeedback({
        type: "error",
        message: "Seul un administrateur de cet espace peut envoyer des invitations.",
      });
      return;
    }

    setInviteSendingUserId(workspaceUser.id);
    setInviteFeedback(null);

    try {
      const response = await fetch("/api/space/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: workspaceUser.email,
          spaceId: activeSession.id,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Impossible d'envoyer l'invitation.");
      }

      setInvitedUserIdsBySession((previous) => {
        const current = previous[activeSession.id] ?? [];
        if (current.includes(workspaceUser.id)) return previous;
        return {
          ...previous,
          [activeSession.id]: [...current, workspaceUser.id],
        };
      });

      setInviteFeedback({
        type: "success",
        message: `Invitation envoyée à ${workspaceUser.email}.`,
      });
    } catch (error) {
      setInviteFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Impossible d'envoyer l'invitation.",
      });
    } finally {
      setInviteSendingUserId(null);
    }
  };

  const handleDeleteSession = (sessionId: string) => {
    if (sessions.length <= 1) return;

    const remainingSessions = sessions.filter((session) => session.id !== sessionId);
    if (remainingSessions.length === 0) return;

    setSessions(remainingSessions);
    setSessionStates((previous) => {
      const next = { ...previous };
      delete next[sessionId];
      return next;
    });

    if (activeSessionId === sessionId) {
      setActiveSessionId(remainingSessions[0].id);
    }
  };

  return (
    <div className="bg-brand-main text-brand-text h-screen w-screen overflow-hidden flex selection:bg-brand-red/30 selection:text-white font-geist">
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
          <div className="px-1">
            <div className="flex items-center justify-between px-4 mb-1.5 group cursor-pointer text-brand-darkGray hover:text-brand-gray transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider">
                <i className="ph-bold ph-caret-down text-[10px]"></i>
                Espaces & Sessions
              </div>
              <button
                onClick={() => setIsAddingSession(true)}
                className="hover:text-white transition-colors"
                title="Ajouter une session"
              >
                <i className="ph-bold ph-plus opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </button>
            </div>

            <div className="px-2 space-y-0.5">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md group relative transition-colors ${
                    activeSessionId === session.id
                      ? "bg-brand-red/10 text-brand-red"
                      : "text-brand-gray hover:bg-brand-surface hover:text-brand-text"
                  }`}
                >
                  {activeSessionId === session.id && (
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-brand-red rounded-r"></div>
                  )}
                  <div className="flex items-center gap-2 truncate pl-1">
                    <i className="ph-bold ph-hash text-lg"></i>
                    <span
                      className={`font-semibold text-[15px] truncate tracking-tight ${
                        activeSessionId === session.id ? "" : "font-medium"
                      }`}
                    >
                      {session.name}
                    </span>
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      session.isConnected ? "bg-green-500" : "bg-brand-darkGray"
                    }`}
                  />
                </button>
              ))}

              {isAddingSession && (
                <div className="px-2 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-2 bg-brand-surface border border-brand-border rounded-md px-2 py-1.5 focus-within:border-brand-red shadow-inner">
                    <i className="ph-bold ph-hash text-brand-gray text-[13px]"></i>
                    <input
                      type="text"
                      value={newSessionName}
                      onChange={(event) => setNewSessionName(event.target.value)}
                      className="bg-transparent text-white text-[13px] outline-none w-full"
                      placeholder="nouvelle-session"
                      autoFocus
                      onBlur={() => {
                        setIsAddingSession(false);
                        setNewSessionName("");
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          const baseName = normalizeSessionName(newSessionName);
                          if (!baseName) return;

                          let uniqueName = baseName;
                          let suffix = 2;
                          while (sessions.some((session) => session.name === uniqueName)) {
                            uniqueName = `${baseName}-${suffix}`;
                            suffix += 1;
                          }

                          const newId = `session-${Date.now()}`;
                          setSessions([
                            ...sessions,
                            {
                              id: newId,
                              name: uniqueName,
                              isConnected: false,
                              canInvite: false,
                              isPersisted: false,
                              defaultChannelId: null,
                            },
                          ]);
                          setSessionStates({
                            ...sessionStates,
                            [newId]: createDefaultSessionState([currentUserParticipant]),
                          });
                          setActiveSessionId(newId);
                          setNewSessionName("");
                          setIsAddingSession(false);
                        } else if (event.key === "Escape") {
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

      <main className="flex-1 flex flex-col bg-brand-main relative min-w-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-main via-brand-red/20 to-brand-main z-20 pointer-events-none"></div>

        <header className="h-14 border-b border-brand-border flex items-center justify-between px-5 shrink-0 bg-brand-main/95 backdrop-blur z-10">
          <div className="flex items-center min-w-0">
            <i className="ph-bold ph-hash text-2xl text-brand-gray mr-2 shrink-0"></i>
            <h2 className="font-extrabold text-white text-[17px] tracking-tight mr-3 shrink-0">
              {activeSessionName}
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="relative w-56 lg:w-80 group">
              <input
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Rechercher un utilisateur par e-mail"
                className="w-full bg-brand-surface border border-transparent hover:border-brand-border focus:border-brand-red focus:bg-black transition-all duration-200 outline-none rounded-md text-[13px] px-3 py-1.5 text-white placeholder-brand-darkGray shadow-inner pr-8"
              />
              <i className="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-darkGray group-focus-within:text-brand-red transition-colors"></i>

              {searchInput.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-brand-surface border border-brand-border rounded-md shadow-2xl overflow-hidden z-50">
                  {searchInput.trim().length < 2 && (
                    <div className="px-3 py-2 text-[12px] text-brand-gray">
                      Saisissez au moins 2 caractères.
                    </div>
                  )}

                  {searchInput.trim().length >= 2 && isSearchingUsers && (
                    <div className="px-3 py-2 text-[12px] text-brand-gray">Recherche en cours...</div>
                  )}

                  {searchInput.trim().length >= 2 && !isSearchingUsers && !canInviteInActiveSession && (
                    <div className="px-3 py-2 text-[12px] text-amber-300 border-b border-brand-border/60">
                      Vous devez être administrateur de cet espace pour inviter des utilisateurs.
                    </div>
                  )}

                  {searchInput.trim().length >= 2 && !isSearchingUsers && searchError && (
                    <div className="px-3 py-2 text-[12px] text-brand-red">{searchError}</div>
                  )}

                  {inviteFeedback && (
                    <div
                      className={`px-3 py-2 text-[12px] border-b border-brand-border/60 ${
                        inviteFeedback.type === "success" ? "text-green-300" : "text-brand-red"
                      }`}
                    >
                      {inviteFeedback.message}
                    </div>
                  )}

                  {searchInput.trim().length >= 2 &&
                    !isSearchingUsers &&
                    !searchError &&
                    searchResults.length === 0 && (
                      <div className="px-3 py-2 text-[12px] text-brand-gray">
                        Aucun utilisateur trouvé pour cet e-mail.
                      </div>
                    )}

                  {searchInput.trim().length >= 2 && !isSearchingUsers && !searchError && searchResults.length > 0 && (
                    <ul className="divide-y divide-brand-border">
                      {searchResults.map((workspaceUser) => {
                        const isSelected = selectedSearchUserId === workspaceUser.id;
                        const isInvited = (invitedUserIdsBySession[activeSessionId] ?? []).includes(workspaceUser.id);
                        const isSending = inviteSendingUserId === workspaceUser.id;

                        return (
                          <li key={workspaceUser.id} className="px-3 py-2">
                            <button
                              onClick={() =>
                                setSelectedSearchUserId((previous) =>
                                  previous === workspaceUser.id ? null : workspaceUser.id,
                                )
                              }
                              className="w-full text-left hover:bg-brand-main/50 rounded-md px-2 py-1 transition-colors"
                            >
                              <div className="text-[13px] text-white font-semibold truncate">
                                {workspaceUser.name || workspaceUser.email.split("@")[0]}
                              </div>
                              <div className="text-[11px] text-brand-gray truncate">{workspaceUser.email}</div>
                            </button>

                            {isSelected && (
                              <div className="mt-2 px-2 pb-1 flex justify-end">
                                <button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    void handleInviteUser(workspaceUser);
                                  }}
                                  disabled={isInvited || isSending || !canInviteInActiveSession}
                                  className={`text-[11px] font-semibold px-2.5 py-1 rounded border transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                                    isInvited
                                      ? "text-green-400 border-green-500/40 bg-green-500/10"
                                      : "text-brand-red border-brand-red/40 hover:bg-brand-red/10"
                                  }`}
                                >
                                  {isSending ? "Envoi..." : isInvited ? "Invité" : "Inviter"}
                                </button>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-end pt-4 pb-2">
          <div className="flex flex-col justify-end min-h-full">
            <div className="px-6 mt-4 mb-8 max-w-3xl">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-4 border border-brand-red/20">
                <i className="ph-bold ph-hash text-[36px] text-brand-red"></i>
              </div>
              <h1 className="text-[36px] font-extrabold text-white mb-2 tracking-tight">
                Bienvenue sur votre espace !
              </h1>

              {isEditingDesc ? (
                <div className="mt-2">
                  <textarea
                    value={activeSessionState.description}
                    onChange={(event) =>
                      updateActiveSessionState((current) => ({
                        ...current,
                        description: event.target.value,
                      }))
                    }
                    className="w-full bg-brand-surface border border-brand-border rounded-md text-white text-[15px] p-3 outline-none focus:border-brand-red transition-colors resize-y min-h-[80px]"
                    autoFocus
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => setIsEditingDesc(false)}
                      className="px-3 py-1.5 bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold rounded-md transition-colors"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-brand-gray text-[16px] leading-relaxed whitespace-pre-wrap">
                    {activeSessionState.description}
                  </p>
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => setIsEditingDesc(true)}
                      className="px-4 py-2 rounded-md bg-transparent hover:bg-brand-surface border border-transparent hover:border-brand-border text-brand-gray hover:text-white text-[13px] font-bold transition-colors flex items-center gap-2"
                    >
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
                <span className="bg-brand-main px-3 text-[11px] font-bold text-brand-darkGray uppercase tracking-wider group-hover:text-brand-gray transition-colors">
                  Aujourd&apos;hui
                </span>
              </div>
            </div>

            {displayedMessages.map((message) => (
              <div
                key={message.id}
                className="message-row relative flex gap-4 px-6 py-1.5 mt-2 hover:bg-brand-surface/40 transition-colors group"
              >
                <div className="message-actions absolute right-6 -top-3 hidden group-hover:flex items-center bg-brand-main border border-brand-border rounded-md shadow-lg overflow-hidden z-10">
                  <button className="p-1.5 hover:bg-brand-surface text-brand-gray hover:text-white transition-colors">
                    <i className="ph-bold ph-share-fat text-[16px]"></i>
                  </button>
                  <div className="w-px h-4 bg-brand-border mx-0.5"></div>
                  <button className="p-1.5 hover:bg-brand-surface text-brand-gray hover:text-white transition-colors">
                    <i className="ph-bold ph-dots-three text-[16px]"></i>
                  </button>
                </div>

                <div className="shrink-0 mt-0.5 cursor-pointer">
                  {message.sender.avatar ? (
                    <img
                      src={message.sender.avatar}
                      className="w-10 h-10 rounded-md object-cover hover:opacity-80 transition-opacity shadow-sm"
                      alt="Avatar"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-brand-red flex items-center justify-center font-bold text-white text-lg shadow-sm hover:opacity-90 transition-opacity">
                      {message.sender.name.substring(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-bold text-[15px] text-white hover:underline cursor-pointer">
                      {message.sender.name}
                    </span>
                    <span className="text-[11px] text-brand-darkGray font-medium">
                      {new Date(message.createdAt).toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-[15px] text-brand-text leading-[1.45] whitespace-pre-wrap">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {displayedMessages.length === 0 && (
              <div className="flex items-center gap-3 px-6 py-2 mt-4 text-[13px] text-brand-gray bg-brand-surface/30 mx-6 rounded-lg border border-brand-border/50">
                <i className="ph-fill ph-info text-brand-red text-lg"></i>
                <span>
                  Commencez à discuter dans cette session. Les messages restent indépendants des autres
                  sessions.
                </span>
              </div>
            )}

            {typingUsers.length > 0 && (
              <div className="px-6 mt-3 text-[12px] text-brand-gray italic">
                {typingUsers.map((entry) => entry.userName).join(", ")} est en train d&apos;écrire...
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
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setMessageInput(nextValue);

                  if (!activeChannelId) return;

                  if (nextValue.trim().length > 0) {
                    startTyping();
                    if (typingTimeoutRef.current) {
                      clearTimeout(typingTimeoutRef.current);
                    }
                    typingTimeoutRef.current = setTimeout(() => {
                      stopTyping();
                      typingTimeoutRef.current = null;
                    }, 1000);
                  } else {
                    if (typingTimeoutRef.current) {
                      clearTimeout(typingTimeoutRef.current);
                      typingTimeoutRef.current = null;
                    }
                    stopTyping();
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
            </div>
          </div>

          <div className="flex justify-end px-1 pt-1.5">
            <span className="text-[11px] font-semibold text-brand-darkGray">
              <strong>Entrée</strong> pour envoyer <span className="mx-1">•</span>{" "}
              <strong>Maj + Entrée</strong> pour une nouvelle ligne
            </span>
          </div>
        </div>
      </main>

      <aside className="w-[280px] bg-brand-sidebar border-l border-brand-border flex-col shrink-0 z-20 hidden lg:flex shadow-[-5px_0_15px_rgba(0,0,0,0.3)]">
        <header className="h-14 border-b border-brand-border flex items-center px-5 shrink-0 bg-brand-sidebar">
          <h3 className="font-bold text-white text-[15px]">Détails Session</h3>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-6">
          <div className="bg-brand-surface rounded-xl p-4 border border-brand-border flex flex-col items-center justify-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent opacity-50"></div>
            <h4 className="text-[11px] font-bold text-brand-red uppercase tracking-widest mb-2 relative z-10">
              Heure Locale
            </h4>
            <div className="text-4xl font-extrabold text-white font-mono tracking-tight relative z-10 mt-1 mb-1">
              {currentTime || "..."}
            </div>
          </div>

          <div className="h-px bg-brand-border w-full"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-brand-gray uppercase tracking-wider">
                Dans cette Session ({connectedPeopleCount})
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-brand-surface/60 rounded-lg border border-brand-border p-2">
                <div className="text-[10px] text-brand-gray uppercase tracking-wider">En ligne</div>
                <div className="text-lg font-bold text-white">{connectedPeopleCount}</div>
              </div>
              <div className="bg-brand-surface/60 rounded-lg border border-brand-border p-2">
                <div className="text-[10px] text-brand-gray uppercase tracking-wider">Total</div>
                <div className="text-lg font-bold text-white">{visibleParticipants.length}</div>
              </div>
            </div>

            <div className="text-[11px] text-brand-gray mb-2">
              Hors ligne:{" "}
              <span className="text-white font-semibold">
                {Math.max(0, visibleParticipants.length - connectedPeopleCount)}
              </span>
            </div>

            <div className="space-y-1">
              {visibleParticipants.map((participant) => (
                <div
                  key={participant.id}
                  className={`flex items-center justify-between p-2 rounded-lg border transition-colors ${
                    participant.id === userId
                      ? "bg-brand-surface border-brand-red/30"
                      : "bg-brand-surface/40 border-brand-border"
                  }`}
                >
                  <span className="text-[13px] text-white truncate">{participant.name}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      participant.isOnline ? "text-green-400" : "text-brand-gray"
                    }`}
                  >
                    {participant.isOnline ? "Connecté" : "Hors ligne"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-brand-border w-full"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-brand-gray uppercase tracking-wider">Espaces</h4>
            </div>
            <div className="space-y-1">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`w-full flex items-center justify-between gap-2 p-2 rounded-lg border transition-colors ${
                    session.id === activeSessionId
                      ? "bg-brand-surface border-brand-red/30"
                      : "bg-brand-surface/40 border-brand-border hover:bg-brand-surface"
                  }`}
                >
                  <span className="text-[13px] text-white truncate">
                    {session.name}
                    {session.canInvite && <span className="ml-2 text-[10px] text-green-300 uppercase">admin</span>}
                  </span>
                  {sessions.length > 1 ? (
                    <span
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteSession(session.id);
                      }}
                      className="text-[11px] text-brand-red font-semibold hover:text-white"
                    >
                      Supprimer
                    </span>
                  ) : (
                    <span className="text-[10px] text-brand-gray">
                      {session.isPersisted ? "espace actif" : "local"}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-brand-border w-full"></div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-brand-gray uppercase tracking-wider">Objectifs de Session</h4>
              <button
                onClick={() => setIsAddingObjective(true)}
                className="text-brand-gray hover:text-white transition-colors"
              >
                <i className="ph-bold ph-plus"></i>
              </button>
            </div>
            <div className="space-y-2">
              {activeSessionState.objectives.map((objective) => (
                <label
                  key={objective.id}
                  className={`flex items-start gap-3 p-2 bg-brand-surface/50 rounded-lg cursor-pointer hover:bg-brand-surface transition-colors border border-transparent hover:border-brand-border ${
                    objective.done ? "opacity-50 line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={objective.done}
                    onChange={() =>
                      updateActiveSessionState((current) => ({
                        ...current,
                        objectives: current.objectives.map((item) =>
                          item.id === objective.id ? { ...item, done: !item.done } : item,
                        ),
                      }))
                    }
                    className="mt-1 shrink-0 accent-brand-red w-4 h-4 bg-brand-main border-brand-border rounded"
                  />
                  <span className="text-[13px] text-brand-text leading-tight">{objective.text}</span>
                </label>
              ))}

              {isAddingObjective && (
                <div className="flex flex-col gap-2 p-2 bg-brand-surface/50 rounded-lg border border-brand-border">
                  <input
                    type="text"
                    value={newObjective}
                    onChange={(event) => setNewObjective(event.target.value)}
                    placeholder="Nouvel objectif..."
                    className="w-full bg-brand-main text-white text-[13px] p-1.5 rounded outline-none border border-transparent focus:border-brand-red"
                    autoFocus
                    onKeyDown={(event) => {
                      if (event.key === "Enter") addObjective();
                    }}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setIsAddingObjective(false);
                        setNewObjective("");
                      }}
                      className="text-[11px] text-brand-gray hover:text-white"
                    >
                      Annuler
                    </button>
                    <button onClick={addObjective} className="text-[11px] text-brand-red font-bold hover:text-white">
                      Ajouter
                    </button>
                  </div>
                </div>
              )}
              {!isAddingObjective && activeSessionState.objectives.length === 0 && (
                <div className="text-xs text-brand-darkGray italic px-2">Aucun objectif défini.</div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
