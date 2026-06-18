"use client"

import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: any }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0px)" : "translateY(10px)",
      transition: "0.3s ease"
    }}>
      {children}
    </div>
  )
}
