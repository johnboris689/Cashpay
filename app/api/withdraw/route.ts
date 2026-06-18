import { NextResponse } from "next/server"
const jwt = require("jsonwebtoken")
const db = require("@/lib/db")
const { isNumber } = require("@/lib/validate")

export async function POST(req: Request) {
  const auth = req.headers.get("authorization")
  if (!auth) return NextResponse.json({ error: "No token" }, { status: 401 })

  const token = auth.split(" ")[1]

  try {
    const user = jwt.verify(token, "cashpay_secret_key")
    const { amount, bankName, accountNo } = await req.json()

    if (!isNumber(amount)) {
      return NextResponse.json({ error: "Invalid amount" })
    }

    const current = db.prepare("SELECT * FROM users WHERE id = ?").get(user.id)

    if (!current || current.balance < amount) {
      return NextResponse.json({ error: "Insufficient balance" })
    }

    db.prepare(`
      INSERT INTO withdrawals (userId, amount, bankName, accountNo, status)
      VALUES (?, ?, ?, ?, 'pending')
    `).run(user.id, amount, bankName, accountNo)

    return NextResponse.json({ success: true })

  } catch (e) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
