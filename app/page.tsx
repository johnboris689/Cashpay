export default function LandingPage() {
  return (
    <div style={{
      background: "#0a0f1c",
      color: "white",
      minHeight: "100vh",
      fontFamily: "system-ui"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #1f2a44"
      }}>
        <h2 style={{ fontWeight: 700 }}>CashPay</h2>

        <div style={{ display: "flex", gap: 20 }}>
          <a href="/login">Login</a>
          <a href="/register">Get Started</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "100px 40px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 54,
          fontWeight: 800,
          lineHeight: 1.1
        }}>
          Modern financial infrastructure for everyone
        </h1>

        <p style={{
          fontSize: 18,
          opacity: 0.7,
          marginTop: 20
        }}>
          CashPay lets users earn, manage, and withdraw funds with a fast,
          secure digital wallet system.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href="/register" style={{
            padding: "14px 22px",
            background: "#2563eb",
            borderRadius: 10,
            marginRight: 10
          }}>
            Get Started
          </a>

          <a href="/login" style={{
            padding: "14px 22px",
            border: "1px solid #2a3b5f",
            borderRadius: 10
          }}>
            Sign In
          </a>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        padding: "0 40px 80px"
      }}>

        <div style={card}>
          <h3>Secure Wallet</h3>
          <p>Encrypted balances and secure authentication system.</p>
        </div>

        <div style={card}>
          <h3>Task Earnings</h3>
          <p>Users earn rewards through simple task completion system.</p>
        </div>

        <div style={card}>
          <h3>Instant Withdrawals</h3>
          <p>Request and manage withdrawals with admin approval system.</p>
        </div>

      </div>

      {/* TRUST SECTION */}
      <div style={{
        padding: "60px 40px",
        borderTop: "1px solid #1f2a44",
        textAlign: "center",
        opacity: 0.8
      }}>
        <h2>Built for scale</h2>
        <p>
          Designed with modern fintech architecture, role-based security,
          and production-ready APIs.
        </p>
      </div>

    </div>
  )
}

const card = {
  background: "#111c33",
  padding: 20,
  borderRadius: 14,
  border: "1px solid #1f2a44"
}
