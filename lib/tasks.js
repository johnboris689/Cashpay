const db = require("./db")

function getTasks() {
  return db.prepare("SELECT * FROM tasks ORDER BY id DESC").all()
}

function completeTask(userId, taskId) {
  const existing = db.prepare(`
    SELECT * FROM task_completions
    WHERE userId = ? AND taskId = ?
  `).get(userId, taskId)

  if (existing) {
    throw new Error("Task already completed")
  }

  const task = db.prepare("SELECT * FROM tasks WHERE id = ?").get(taskId)

  if (!task) {
    throw new Error("Task not found")
  }

  db.prepare(`
    INSERT INTO task_completions (userId, taskId)
    VALUES (?, ?)
  `).run(userId, taskId)

  db.prepare(`
    UPDATE users SET balance = balance + ?
    WHERE id = ?
  `).run(task.reward, userId)

  db.prepare(`
    INSERT INTO transactions (userId, type, amount)
    VALUES (?, 'CREDIT', ?)
  `).run(userId, task.reward)

  return { success: true, reward: task.reward }
}

module.exports = { getTasks, completeTask }
