"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getToken, logout } from "@/lib/auth"
import BottomNav from "@/components/navigation/BottomNav"

export default function Dashboard() {
  const router = useRouter()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      router.push("/login")
      return
    }

    fetch("/api/wallet", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) logout()
        else setData(res)
      })
  }, [])

  if (!data) return <div style={{ color: "white", padding: 20 }}>Loading...</div>

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white", paddingBottom: 80 }}>

      <div style={{ padding: 20 }}>
        <h1>CashPay Wallet</h1>
      </div>

      <div style={{
        margin: 16,
        padding: 20,
        borderRadius: 16,
        background: "linear-gradient(135deg,#2563eb,#1d4ed8)"
      }}>
        <h2>₦{data.user.balance}</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 16 }}>
        <button onClick={() => router.push("/withdraw")} style={btn}>Withdraw</button>
        <button onClick={() => router.push("/dashboard")} style={btn}>Tasks</button>
        <button style={btn}>History</button>
        <button style={btn}>Support</button>
      </div>

      <BottomNav />
    </div>
  )
}

const btn = {
  padding: 14,
  borderRadius: 12,
  background: "#111c33",
  color: "white",
  border: "1px solid #1f2a44"
}
