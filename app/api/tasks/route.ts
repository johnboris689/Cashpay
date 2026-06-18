import { NextResponse } from "next/server"
const db = require("@/lib/db")

export async function GET() {
  const tasks = db.prepare("SELECT * FROM tasks").all()
  return NextResponse.json(tasks)
}
