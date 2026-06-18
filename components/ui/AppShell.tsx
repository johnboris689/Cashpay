import BottomNav from "@/components/navigation/BottomNav"

export default function AppShell({ children }: { children: any }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#0b1220,#050814)",
      color: "white"
    }}>
      <div style={{ padding: 16, paddingBottom: 80 }}>
        {children}
      </div>

      <BottomNav />
    </div>
  )
}
