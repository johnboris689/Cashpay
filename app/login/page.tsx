"use client"

import AuthLayout from "@/components/ui/AuthLayout"
import GlassCard from "@/components/ui/GlassCard"

export default function Login() {
  return (
    <AuthLayout>
      <GlassCard>

        <h1 style={{ fontSize: 26 }}>CashPay</h1>
        <p style={{ opacity: 0.7, marginBottom: 20 }}>Login to continue</p>

        <input placeholder="Email" style={input} />
        <input placeholder="Password" type="password" style={input} />

        <button style={btn}>Login</button>

      </GlassCard>
    </AuthLayout>
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
  border: "none",
  marginTop: 10,
  fontWeight: 600
}
