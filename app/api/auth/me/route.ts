import { NextResponse } from "next/server"
const jwt = require("jsonwebtoken")
const db = require("@/lib/db")

const SECRET = "cashpay_secret_key"

export async function GET(req: Request) {
  const auth = req.headers.get("authorization")

  if (!auth) {
    return NextResponse.json({ error: "No token" }, { status: 401 })
  }

  const token = auth.split(" ")[1]

  try {
    const decoded = jwt.verify(token, SECRET)

    const user = db.prepare(`
      SELECT id, name, email, role FROM users WHERE id = ?
    `).get(decoded.id)

    return NextResponse.json({
      user
    })
  } catch (e) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
