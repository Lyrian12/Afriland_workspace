"use server";

import { PrismaClient } from "@/src/generated/prisma/client";

// Use a singleton approach or just instance directly if permitted.
// @ts-ignore
const prisma = new PrismaClient();

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
