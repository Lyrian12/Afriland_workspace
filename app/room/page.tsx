import { Metadata } from 'next';
import RoomClient from '@/app/room/room-client';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Afriland Room',
  description: 'Planifiez et gérez vos salles de réunion',
};

export default function RoomPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#f4f4f4] text-[#333]">Chargement...</div>}>
      <RoomContent />
    </Suspense>
  );
}

import { getRooms, getMeetings } from './actions';

async function RoomContent() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/auth/sign-in');
  }

  // Get user profile photo
  const avatarUrl = user.user_metadata?.avatar_url || null;
  // Get user name (use full_name if available, fallback to email name, or "Utilisateur")
  let userName = user.user_metadata?.full_name;
  if (!userName) {
    userName = user.email ? user.email.split('@')[0] : "Utilisateur";
  }

  const userEmail = user.email || "utilisateur@afriland.com";
  const userId = user.id;

  const initialRooms = await getRooms();
  const rawMeetings = await getMeetings();

  const initialMeetings = rawMeetings.map((m) => {
    const startDate = new Date(m.startTime);
    const endDate = new Date(m.endTime);
    
    const tzOffset = startDate.getTimezoneOffset() * 60000;
    const localDateStr = new Date(startDate.getTime() - tzOffset).toISOString().split('T')[0];

    const startHour = startDate.getHours() + startDate.getMinutes() / 60;
    const endHour = endDate.getHours() + endDate.getMinutes() / 60;
    const durationHours = endHour - startHour;

    return {
      id: m.id,
      title: m.title,
      roomId: m.roomId,
      date: localDateStr,
      startHour,
      durationHours,
      attendees: m.attendees.length,
      color: m.color || "#ef4b56",
    };
  });

  return (
    <RoomClient
      userName={userName}
      avatarUrl={avatarUrl}
      userEmail={userEmail}
      userId={userId}
      initialRooms={initialRooms}
      initialMeetings={initialMeetings}
    />
  );
}
