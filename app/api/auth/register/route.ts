import { prisma } from "@/lib/db/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { fullName, email, password } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashed,
      wallet: {
        create: { balance: 200000 },
      },
    },
  });

  return Response.json({ success: true });
}
