export default function Skeleton({ width = "100%", height = 20 }) {
  return (
    <div style={{
      width,
      height,
      borderRadius: 8,
      background: "linear-gradient(90deg,#1a2440,#223055,#1a2440)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.2s infinite"
    }} />
  )
}
