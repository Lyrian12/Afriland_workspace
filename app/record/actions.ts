"use server";

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "@/src/generated/prisma/client";
import { createClient } from "@/lib/supabase/server";

// --- Prisma Logic ---
// We use the Pool adapter for better compatibility with Supabase in serverless/long-running environments
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

// --- Auth Utilities ---
async function getAuthUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

// --- Sync Logic ---
async function ensureUserSynced(user: any) {
  return await prisma.user.upsert({
    where: { id: user.id },
    update: {},
    create: {
      id: user.id,
      email: user.email!,
      name: user.user_metadata?.full_name || user.email?.split('@')[0],
      avatar: user.user_metadata?.avatar_url,
      role: "SECRETAIRE" as any
    }
  });
}

// --- Recording Actions ---

export async function getUserRecordings() {
  try {
    const user = await getAuthUser();
    return await prisma.recording.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("getUserRecordings error:", e);
    return [];
  }
}

export async function saveRecording(data: { title?: string, duration: number, transcription: string }) {
  const user = await getAuthUser();
  await ensureUserSynced(user);

  const title = data.title || `Enregistrement du ${new Date().toLocaleDateString("fr-FR")}`;

  return await prisma.recording.create({
    data: {
      userId: user.id,
      title,
      duration: data.duration,
      transcription: data.transcription,
      audioUrl: "", 
    }
  });
}

export async function deleteRecording(recordingId: string) {
  const user = await getAuthUser();

  return await prisma.recording.delete({
    where: {
      id: recordingId,
      userId: user.id
    }
  });
}
