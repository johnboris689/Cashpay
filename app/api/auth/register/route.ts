<<<<<<< HEAD
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import db from "@/lib/db"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const hashed = await bcrypt.hash(password, 10)

  const stmt = db.prepare(`
    INSERT INTO users (name, email, password, balance)
    VALUES (?, ?, ?, 0)
  `)

  try {
    const result = stmt.run(name, email, hashed)

    return NextResponse.json({
      success: true,
      userId: result.lastInsertRowid
    })
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "User already exists or invalid data"
    })
  }
=======
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
>>>>>>> 975a4f6af978e65d5efad06445a87effd0f4e150
}
