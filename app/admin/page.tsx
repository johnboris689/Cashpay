"use client"

import { useEffect, useState } from "react"
import AppShell from "@/components/ui/AppShell"
import GlassCard from "@/components/ui/GlassCard"

export default function Admin() {
  const [stats, setStats] = useState<any>({})

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/users").then(r => r.json()),
      fetch("/api/admin/tasks").then(r => r.json()),
      fetch("/api/admin/withdrawals").then(r => r.json())
    ]).then(([users, tasks, withdrawals]) => {
      setStats({ users, tasks, withdrawals })
    })
  }, [])

  return (
    <AppShell>

      <h2>Admin Dashboard</h2>

      <GlassCard>
        <p>Total Users: {stats.users?.length || 0}</p>
        <p>Total Tasks: {stats.tasks?.length || 0}</p>
        <p>Withdrawals: {stats.withdrawals?.length || 0}</p>
      </GlassCard>

    </AppShell>
  )
}
