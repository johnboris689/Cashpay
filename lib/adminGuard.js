const jwt = require("jsonwebtoken")
const db = require("./db")

const SECRET = "cashpay_secret_key"

function verifyAdmin(req) {
  const auth = req.headers.get("authorization")
  if (!auth) throw new Error("No token")

  const token = auth.split(" ")[1]
  const decoded = jwt.verify(token, SECRET)

  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(decoded.id)

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized")
  }

  return user
}

module.exports = { verifyAdmin }
