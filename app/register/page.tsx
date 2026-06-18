"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  async function submit(e: any) {
    e.preventDefault()

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    const data = await res.json()

    if (data.success) {
      router.push("/login")
    } else {
      alert(data.error)
    }
  }

  return (
    <div style={{ padding: 40, background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <h1>CashPay Register</h1>

      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 300 }}>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />

        <button style={{ padding: 10, background: "#2563eb", color: "white" }}>
          Create Account
        </button>
      </form>
    </div>
  )
}
