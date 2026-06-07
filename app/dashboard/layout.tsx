import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>CASHPAY</h2>

        <nav style={styles.nav}>
          <Link href="/dashboard">🏠 Home</Link>
          <Link href="/dashboard/wallet">💰 Wallet</Link>
          <Link href="/dashboard/airtime">📱 Airtime</Link>
          <Link href="/dashboard/data">🌐 Data</Link>
          <Link href="/dashboard/withdraw">🏧 Withdraw</Link>
          <Link href="/dashboard/transactions">🧾 Transactions</Link>
          <Link href="/dashboard/profile">👤 Profile</Link>
          <Link href="/dashboard/settings">⚙️ Settings</Link>
          <Link href="/dashboard/admin">👑 Admin</Link>
        </nav>
      </aside>

      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#0b1020",
    color: "#fff",
    fontFamily: "system-ui",
  },
  sidebar: {
    width: 240,
    padding: 20,
    background: "#0f172a",
    borderRight: "1px solid rgba(255,255,255,0.05)",
  },
  logo: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    fontSize: 14,
  },
  main: {
    flex: 1,
    padding: 24,
  },
};
