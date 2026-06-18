import { NextResponse } from "next/server"
const db = require("@/lib/db")

export async function GET(req: Request) {
  const auth = req.headers.get("authorization")
  if (!auth) return NextResponse.json({ error: "No token" }, { status: 401 })

  const token = auth.split(" ")[1]
  const jwt = require("jsonwebtoken")

  try {
    const decoded = jwt.verify(token, "cashpay_secret_key")

    const user = db.prepare("SELECT id, name, email, balance FROM users WHERE id = ?")
      .get(decoded.id)

    const transactions = db.prepare(
      "SELECT * FROM transactions WHERE userId = ? ORDER BY id DESC"
    ).all(decoded.id)

    return NextResponse.json({
      user,
      transactions
    })
  } catch (e) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
