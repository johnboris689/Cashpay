"use client"

import { useEffect, useState } from "react"

export default function TasksPage() {
  const [tasks, setTasks] = useState([])
  const [form, setForm] = useState({ title: "", reward: "" })

  async function createTask() {
    await fetch("/api/admin/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    location.reload()
  }

  useEffect(() => {
    fetch("/api/admin/tasks")
      .then(res => res.json())
      .then(setTasks)
  }, [])

  return (
    <div style={{ padding: 30, background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <h1>Tasks</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Task title"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Reward"
          onChange={e => setForm({ ...form, reward: e.target.value })}
        />
        <button onClick={createTask} style={{ marginLeft: 10 }}>
          Create
        </button>
      </div>

      {tasks.map((t: any) => (
        <div key={t.id} style={{ padding: 10, marginTop: 10, background: "#111c33" }}>
          <p>{t.title}</p>
          <p>Reward: ₦{t.reward}</p>
        </div>
      ))}
    </div>
  )
}
