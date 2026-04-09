'use server';

import { prisma } from "@/lib/prisma";

export type WorkspaceUserSearchResult = {
  id: string;
  name: string | null;
  email: string;
  avatar: string | null;
  role: string;
};

export async function searchWorkspaceUsersByEmail(query: string): Promise<WorkspaceUserSearchResult[]> {
  const normalizedQuery = query.trim();
  if (normalizedQuery.length < 2) return [];

  try {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: normalizedQuery,
          mode: "insensitive",
        },
      },
      take: 8,
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        role: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return users;
  } catch (error) {
    console.error("Error searching workspace users by email:", error);
    return [];
  }
}

export async function createSpaceMessage(content: string) {
  void content;
  // TODO: Implémenter la logique d'enregistrement des messages via Prisma/Supabase
  return { success: true };
}
