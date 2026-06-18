<<<<<<< HEAD
"use client"

import { useState } from "react"
=======
import { motion } from "framer-motion";
import { colors } from "@/lib/ui/tokens";
>>>>>>> 975a4f6af978e65d5efad06445a87effd0f4e150

export default function Button({
  children,
  onClick,
<<<<<<< HEAD
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
=======
  disabled,
}: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      disabled={disabled}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: 12,
        background: disabled ? "#334155" : colors.primary,
        color: "white",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.button>
  );
>>>>>>> 975a4f6af978e65d5efad06445a87effd0f4e150
}
