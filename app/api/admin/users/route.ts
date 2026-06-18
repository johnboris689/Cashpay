import { NextResponse } from "next/server"
const db = require("@/lib/db")
const { verifyAdmin } = require("@/lib/adminGuard")

export async function GET(req: Request) {
  try {
    verifyAdmin(req)

    const users = db.prepare(`
      SELECT id, name, email, balance, role FROM users
    `).all()

    return NextResponse.json(users)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 })
  }
}
