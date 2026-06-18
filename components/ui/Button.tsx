"use client"

import { useState } from "react"

export default function Button({
  children,
  onClick,
  variant = "primary"
}: any) {

  const [pressed, setPressed] = useState(false)

  const styles: any = {
    primary: {
      background: "#2563eb",
      border: "none",
      color: "white"
    },
    dark: {
      background: "#111c33",
      border: "1px solid #1f2a44",
      color: "white"
    }
  }

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 12,
        cursor: "pointer",
        fontWeight: 600,
        transition: "0.15s ease",
        transform: pressed ? "scale(0.97)" : "scale(1)",
        ...styles[variant]
      }}
    >
      {children}
    </button>
  )
}
