"use client"

import { useState } from "react"

export default function GlassCard({ children }: { children: any }) {
  const [active, setActive] = useState(false)

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{
        width: "100%",
        maxWidth: 420,
        background: "rgba(17, 28, 51, 0.85)",
        border: "1px solid #1f2a44",
        borderRadius: 18,
        padding: 20,
        backdropFilter: "blur(10px)",
        boxShadow: active
          ? "0 25px 70px rgba(0,0,0,0.6)"
          : "0 15px 40px rgba(0,0,0,0.3)",
        transform: active ? "translateY(-4px)" : "translateY(0px)",
        transition: "0.25s ease"
      }}
    >
      {children}
    </div>
  )
}
