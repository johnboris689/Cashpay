"use client"

import { useEffect, useState } from "react"
import AppShell from "@/components/ui/AppShell"
import GlassCard from "@/components/ui/GlassCard"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return router.push("/login")

    fetch("/api/wallet", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(setData)
  }, [])

  if (!data) return <div style={{ color: "white" }}>Loading...</div>

  return (
    <AppShell>

      <h2 style={{ marginBottom: 10 }}>CashPay Wallet</h2>

      <GlassCard>
        <p style={{ opacity: 0.7 }}>Available Balance</p>
        <h1 style={{ fontSize: 32 }}>₦{data.user.balance}</h1>
      </GlassCard>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginTop: 16
      }}>

        <button style={btn} onClick={() => router.push("/withdraw")}>
          Withdraw
        </button>

        <button style={btn}>
          Tasks
        </button>

        <button style={btn}>
          History
        </button>

        <button style={btn}>
          Support
        </button>

      </div>

      <GlassCard>
        <h3>Recent Transactions</h3>

        {data.transactions?.map((t: any) => (
          <div key={t.id} style={row}>
            <span>{t.type}</span>
            <span>₦{t.amount}</span>
          </div>
        ))}
      </GlassCard>

    </AppShell>
  )
}

const btn = {
  padding: 14,
  borderRadius: 12,
  background: "#111c33",
  color: "white",
  border: "1px solid #1f2a44"
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #1f2a44"
}
