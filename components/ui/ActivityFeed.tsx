"use client"

import { useEffect, useState } from "react"

const messages = [
  "User A just completed a task +₦500",
  "Withdrawal processed ₦2,000",
  "New user joined CashPay",
  "Task reward distributed",
  "Wallet funded successfully"
]

export default function ActivityFeed() {
  const [feed, setFeed] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const item = messages[Math.floor(Math.random() * messages.length)]
      setFeed(prev => [item, ...prev.slice(0, 4)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      marginTop: 16,
      padding: 16,
      borderRadius: 14,
      background: "#111c33",
      border: "1px solid #1f2a44"
    }}>
      <h4>Live Activity</h4>

      {feed.map((f, i) => (
        <div key={i} style={{
          fontSize: 12,
          opacity: 0.8,
          padding: "6px 0",
          borderBottom: "1px solid #1f2a44"
        }}>
          {f}
        </div>
      ))}
    </div>
  )
}
