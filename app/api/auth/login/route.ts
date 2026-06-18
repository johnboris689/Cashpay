import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import db from "@/lib/db"

const SECRET = "cashpay_secret_key"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email)

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "7d" }
  )

  return NextResponse.json({
    success: true,
    token
  })
}
