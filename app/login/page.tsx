"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" })

  async function submit(e: any) {
    e.preventDefault()

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    const data = await res.json()

    if (data.token) {
      localStorage.setItem("token", data.token)
      router.push("/dashboard")
    } else {
      alert(data.error)
    }
  }

  return (
    <div style={{
      background: "#0f172a",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    }}>
      <form onSubmit={submit} style={{
        width: "100%",
        maxWidth: 320,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
        <h1>CashPay Login</h1>

        <input placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input placeholder="Password" type="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button style={{
          padding: 12,
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 10
        }}>
          Login
        </button>
      </form>
    </div>
  )
}
