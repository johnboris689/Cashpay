"use client"

import { useEffect, useState } from "react"

export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/admin/users")
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <div style={{ padding: 30, background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <h1>Users</h1>

      {users.map((u: any) => (
        <div key={u.id} style={{ padding: 10, marginTop: 10, background: "#111c33" }}>
          <p>Name: {u.name}</p>
          <p>Email: {u.email}</p>
          <p>Balance: ₦{u.balance}</p>
        </div>
      ))}
    </div>
  )
}
