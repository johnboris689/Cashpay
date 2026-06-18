"use client"

import { useState } from "react"
import AppShell from "@/components/ui/AppShell"
import GlassCard from "@/components/ui/GlassCard"

export default function Withdraw() {
  const [form, setForm] = useState({
    amount: "",
    bankName: "",
    accountNo: ""
  })

  async function submit() {
    const token = localStorage.getItem("token")

    const res = await fetch("/api/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })

    const data = await res.json()
    alert(data.success ? "Submitted" : data.error)
  }

  return (
    <AppShell>

      <h2>Withdraw Funds</h2>

      <GlassCard>

        <input placeholder="Amount" style={input}
          onChange={e => setForm({ ...form, amount: e.target.value })}
        />

        <input placeholder="Bank Name" style={input}
          onChange={e => setForm({ ...form, bankName: e.target.value })}
        />

        <input placeholder="Account Number" style={input}
          onChange={e => setForm({ ...form, accountNo: e.target.value })}
        />

        <button style={btn} onClick={submit}>
          Submit Withdrawal
        </button>

      </GlassCard>

    </AppShell>
  )
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  borderRadius: 10,
  border: "1px solid #2a3b5f",
  background: "#0b1220",
  color: "white"
}

const btn = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  background: "#2563eb",
  color: "white",
  border: "none"
}
