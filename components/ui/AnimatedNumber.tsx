"use client"

import { useEffect, useState } from "react"

export default function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 600
    const stepTime = 16
    const steps = duration / stepTime
    const increment = (end - start) / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setDisplay(Math.floor(start))
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return <span>₦{display.toLocaleString()}</span>
}
