"use client"

import { useEffect, useState } from "react"

export default function WithdrawalsPage() {
  const [data, setData] = useState([])

  async function action(id: number, action: string) {
    await fetch("/api/admin/withdrawals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action })
    })

    location.reload()
  }

  useEffect(() => {
    fetch("/api/admin/withdrawals")
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div style={{ padding: 30, background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <h1>Withdrawals</h1>

      {data.map((w: any) => (
        <div key={w.id} style={{ padding: 10, marginTop: 10, background: "#111c33" }}>
          <p>Amount: ₦{w.amount}</p>
          <p>Status: {w.status}</p>

          <button onClick={() => action(w.id, "approve")}>Approve</button>
          <button onClick={() => action(w.id, "reject")} style={{ marginLeft: 10 }}>
            Reject
          </button>
        </div>
      ))}
    </div>
  )
}
