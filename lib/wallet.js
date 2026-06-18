const db = require("./db")

function getUser(userId) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(userId)
}

function getTransactions(userId) {
  return db.prepare("SELECT * FROM transactions WHERE userId = ? ORDER BY id DESC").all(userId)
}

function credit(userId, amount) {
  db.prepare("UPDATE users SET balance = balance + ? WHERE id = ?")
    .run(amount, userId)

  db.prepare(`
    INSERT INTO transactions (userId, type, amount)
    VALUES (?, 'CREDIT', ?)
  `).run(userId, amount)
}

function debit(userId, amount) {
  const user = getUser(userId)

  if (!user || user.balance < amount) {
    throw new Error("Insufficient balance")
  }

  db.prepare("UPDATE users SET balance = balance - ? WHERE id = ?")
    .run(amount, userId)

  db.prepare(`
    INSERT INTO transactions (userId, type, amount)
    VALUES (?, 'DEBIT', ?)
  `).run(userId, amount)
}

module.exports = {
  getUser,
  getTransactions,
  credit,
  debit
}
