export default function AuthLayout({ children }: { children: any }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg,#0b1220,#050814)",
      padding: 20,
      color: "white"
    }}>
      {children}
    </div>
  )
}
