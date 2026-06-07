import { prisma } from "@/lib/db/prisma";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth/session";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return new Response("Invalid", { status: 401 });

  const ok = await bcrypt.compare(password, user.password);

  if (!ok) return new Response("Invalid", { status: 401 });

  const token = await createSession(user.id);

  cookies().set("cashpay_session", token, {
    httpOnly: true,
    path: "/",
  });

  return Response.json({ success: true });
}
