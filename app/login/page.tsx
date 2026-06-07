import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div style={{ width: "100%", maxWidth: 400 }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          CashPay
        </h1>

        <p style={{ opacity: 0.7 }}>
          Welcome back
        </p>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 14,
            marginTop: 20,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: 14,
            marginTop: 12,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "white",
          }}
        />

        <Link href="/dashboard">
          <button
            style={{
              width: "100%",
              marginTop: 20,
              padding: 14,
              borderRadius: 12,
              border: "none",
              background: "#2563EB",
              color: "white",
              fontWeight: 700,
            }}
          >
            Login
          </button>
        </Link>

        <p style={{ marginTop: 20 }}>
          No account?{" "}
          <Link href="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
