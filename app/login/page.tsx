<<<<<<< HEAD
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
=======
import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div style={{ width: "100%", maxWidth: 400 }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          CashPay
        </h1>

        <p style={{ opacity: 0.7 }}>
          Welcome back
        </p>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 14,
            marginTop: 20,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: 14,
            marginTop: 12,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
          }}
        />

        <Link href="/dashboard">
          <button
            style={{
              width: "100%",
              marginTop: 20,
              padding: 14,
              borderRadius: 12,
              border: "none",
              background: "#2563EB",
              color: "white",
              fontWeight: 700,
            }}
          >
            Login
          </button>
        </Link>

        <p style={{ marginTop: 20 }}>
          No account?{" "}
          <Link href="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
>>>>>>> 975a4f6af978e65d5efad06445a87effd0f4e150
}
