const { init, saveDatabase } = require("../lib/db")

async function run() {
  const db = await init()

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      balance REAL DEFAULT 0
    )
  `)

  saveDatabase()
  console.log("Database initialized (sql.js)")
}

run()
