"use server";

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "@/src/generated/prisma/client";

// Initialize the Prisma Client with the pg driver adapter (Prisma 7 requirement)
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

export async function searchUsers(query: string) {
  if (!query || query.length < 2) return [];
  
  try {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: query,
          mode: 'insensitive',
        }
      },
      take: 5,
      select: {
        name: true,
        email: true
      }
    });
    return users;
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
}

// --- Rooms ---

export async function getRooms() {
  return await prisma.room.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'asc' },
  });
}

export async function createRoom(data: { name: string; capacity: number; color: string }) {
  return await prisma.room.create({ data });
}

export async function updateRoom(id: string, data: { name?: string; capacity?: number }) {
  return await prisma.room.update({
    where: { id },
    data,
  });
}

export async function deleteRoom(id: string) {
  // We don't hard delete, maybe just deactivate or delete.
  // The schema doesn't have cascades for everything so let's just delete meetings first or cascade delete.
  // Actually, wait, Meetings have a roomId. schema says:
  // meeting Room @relation(fields: [roomId], references: [id]) (no cascade)
  // Let's just hard delete meetings in this room first, then room. Because it's simpler for now,
  // or just deactivate. Let's hard delete for simplicity.
  await prisma.meeting.deleteMany({ where: { roomId: id } });
  return await prisma.room.delete({ where: { id } });
}

// --- Meetings ---

export async function getMeetings() {
  // Fetch meetings with attendees
  return await prisma.meeting.findMany({
    include: {
      attendees: true,
    },
  });
}

export async function createMeeting(data: {
  title: string;
  roomId: string;
  userId: string;
  date: string; // "YYYY-MM-DD"
  startHour: number;
  durationHours: number;
  color: string;
  attendees: { name: string; email: string }[];
}) {
  const [startH, startM] = [Math.floor(data.startHour), Math.round((data.startHour % 1) * 60)];
  const [endH, endM] = [Math.floor(data.startHour + data.durationHours), Math.round(((data.startHour + data.durationHours) % 1) * 60)];

  const baseDate = new Date(data.date);
  
  const startTime = new Date(baseDate);
  startTime.setHours(startH, startM, 0, 0);

  const endTime = new Date(baseDate);
  endTime.setHours(endH, endM, 0, 0);

  const meeting = await prisma.meeting.create({
    data: {
      title: data.title,
      roomId: data.roomId,
      userId: data.userId,
      startTime,
      endTime,
      color: data.color,
      attendees: {
        create: data.attendees.map(att => ({
          name: att.name,
          email: att.email,
        })),
      },
    },
    include: { attendees: true },
  });

  return meeting;
}

export async function deleteMeeting(id: string) {
  return await prisma.meeting.delete({ where: { id } });
}
