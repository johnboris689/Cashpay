import { prisma } from "@/lib/db/prisma";
import { getCurrentUserId } from "@/lib/auth/user";

export async function POST() {
  const userId = await getCurrentUserId();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  await prisma.consent.upsert({
    where: { userId },
    update: { accepted: true, acceptedAt: new Date() },
    create: { userId, accepted: true, acceptedAt: new Date() },
  });

  return Response.json({ success: true });
}
