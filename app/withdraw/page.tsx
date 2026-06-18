"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getToken } from "@/lib/auth"

export default function WithdrawPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    amount: "",
    bankName: "",
    accountNo: ""
  })

  async function submit(e: any) {
    e.preventDefault()

    const token = getToken()

    const res = await fetch("/api/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })

    const data = await res.json()

    if (data.success) {
      alert("Withdrawal request submitted")
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
      padding: 20
    }}>
      <h1>Withdraw Funds</h1>

      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        <input placeholder="Amount"
          onChange={e => setForm({ ...form, amount: e.target.value })}
        />

        <input placeholder="Bank Name"
          onChange={e => setForm({ ...form, bankName: e.target.value })}
        />

        <input placeholder="Account Number"
          onChange={e => setForm({ ...form, accountNo: e.target.value })}
        />

        <button style={{
          padding: 12,
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 10
        }}>
          Submit Withdrawal
        </button>
      </form>
    </div>
  )
}
