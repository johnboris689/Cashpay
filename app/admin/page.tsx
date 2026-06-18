"use client"

import { useEffect, useState } from "react"
import Container from "@/components/Container"
import Card from "@/components/Card"

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>({})

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/users").then(r => r.json()),
      fetch("/api/admin/tasks").then(r => r.json()),
      fetch("/api/admin/withdrawals").then(r => r.json())
    ]).then(([users, tasks, withdrawals]) => {
      const totalBalance = users.reduce((sum: number, u: any) => sum + (u.balance || 0), 0)
      const pendingWithdrawals = withdrawals.filter((w: any) => w.status === "pending")

      setStats({
        users,
        tasks,
        withdrawals,
        totalBalance,
        pendingWithdrawals
      })
    })
  }, [])

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>
      <Container>

        <h1>Admin Analytics</h1>

        <Card>
          <p>Total Users: {stats.users?.length || 0}</p>
          <p>Total Tasks: {stats.tasks?.length || 0}</p>
          <p>Total Platform Balance: ₦{stats.totalBalance || 0}</p>
          <p>Pending Withdrawals: {stats.pendingWithdrawals?.length || 0}</p>
        </Card>

      </Container>
    </div>
  )
}
