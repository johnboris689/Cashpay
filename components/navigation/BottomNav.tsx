"use client"

import { useRouter } from "next/navigation"

export default function BottomNav() {
  const router = useRouter()

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#0b1220",
      borderTop: "1px solid #1f2a44",
      display: "flex",
      justifyContent: "space-around",
      padding: 12,
      color: "white"
    }}>
      <button onClick={() => router.push("/dashboard")} style={btn}>Home</button>
      <button onClick={() => router.push("/dashboard")} style={btn}>Wallet</button>
      <button onClick={() => router.push("/admin")} style={btn}>Admin</button>
    </div>
  )
}

const btn = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: 14
}
