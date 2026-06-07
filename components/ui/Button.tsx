import { motion } from "framer-motion";
import { colors } from "@/lib/ui/tokens";

export default function Button({
  children,
  onClick,
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
}
