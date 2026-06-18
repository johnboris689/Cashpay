"use client"

import { useState } from "react"
import AuthLayout from "@/components/ui/AuthLayout"
import GlassCard from "@/components/ui/GlassCard"

export default function Register() {
  const [form, setForm] = useState({})

  return (
    <AuthLayout>
      <GlassCard>

        <h1 style={{ fontSize: 26, marginBottom: 5 }}>CashPay</h1>
        <p style={{ opacity: 0.7, marginBottom: 20 }}>Create your account</p>

        <input placeholder="Full Name" style={input} />
        <input placeholder="Email" style={input} />
        <input placeholder="Password" style={input} />
        <input placeholder="Phone Number" style={input} />

        <div style={{ marginTop: 15, marginBottom: 10 }}>
          <h3 style={{ fontSize: 14, opacity: 0.8 }}>
            BANK DETAILS (FOR WITHDRAWAL)
          </h3>
        </div>

        <input placeholder="Bank Name" style={input} />
        <input placeholder="Account Number" style={input} />

        <button style={btn}>
          Create Account
        </button>

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
