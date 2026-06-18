import { NextResponse } from "next/server"
const db = require("@/lib/db")
const { verifyAdmin } = require("@/lib/adminGuard")

export async function GET(req: Request) {
  try {
    verifyAdmin(req)

    const tasks = db.prepare("SELECT * FROM tasks ORDER BY id DESC").all()
    return NextResponse.json(tasks)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 })
  }
}

export async function POST(req: Request) {
  try {
    verifyAdmin(req)

    const { title, reward } = await req.json()

    db.prepare(`
      INSERT INTO tasks (title, reward)
      VALUES (?, ?)
    `).run(title, reward)

    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 })
  }
}
