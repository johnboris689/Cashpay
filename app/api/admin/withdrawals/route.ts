import { NextResponse } from "next/server"
const db = require("@/lib/db")
const { verifyAdmin } = require("@/lib/adminGuard")

export async function GET(req: Request) {
  try {
    verifyAdmin(req)

    const data = db.prepare("SELECT * FROM withdrawals ORDER BY id DESC").all()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 })
  }
}

export async function POST(req: Request) {
  try {
    verifyAdmin(req)

    const { id, action } = await req.json()

    const wd = db.prepare("SELECT * FROM withdrawals WHERE id = ?").get(id)

    if (!wd) {
      return NextResponse.json({ error: "Not found" })
    }

    if (action === "approve") {
      db.prepare(`
        UPDATE users SET balance = balance - ?
        WHERE id = ?
      `).run(wd.amount, wd.userId)

      db.prepare(`
        UPDATE withdrawals SET status = 'approved'
        WHERE id = ?
      `).run(id)
    }

    if (action === "reject") {
      db.prepare(`
        UPDATE withdrawals SET status = 'rejected'
        WHERE id = ?
      `).run(id)
    }

    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 })
  }
}
