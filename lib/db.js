const initSqlJs = require("sql.js")
const fs = require("fs")

let db

async function init() {
  const SQL = await initSqlJs()

  if (fs.existsSync("cashpay.db")) {
    const filebuffer = fs.readFileSync("cashpay.db")
    db = new SQL.Database(filebuffer)
  } else {
    db = new SQL.Database()
  }

  return db
}

function saveDatabase() {
  const data = db.export()
  fs.writeFileSync("cashpay.db", Buffer.from(data))
}

module.exports = { init, saveDatabase, getDb: () => db }
