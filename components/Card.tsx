export default function Card({ children }: { children: any }) {
  return (
    <div style={{
      background: "#111c33",
      border: "1px solid #1f2a44",
      borderRadius: 14,
      padding: 16,
      marginTop: 12,
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
    }}>
      {children}
    </div>
  )
}
