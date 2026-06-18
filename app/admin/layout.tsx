"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getToken } from "@/lib/session"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      router.replace("/login")
      return
    }

    fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          router.replace("/login")
          return
        }

        if (data.user.role !== "admin") {
          router.replace("/dashboard")
          return
        }

        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ padding: 30 }}>
        Checking admin access...
      </div>
    )
  }

  return <>{children}</>
}
