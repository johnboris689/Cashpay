"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F4F7FC",
        paddingBottom: "100px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#2563EB",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          color: "white",
        }}
      >
        <button style={{ background: "transparent", border: "none", color: "white", fontSize: "28px" }}>
          ☰
        </button>

        <h1 style={{ fontSize: "32px", fontWeight: 700 }}>
          CASHPAY
        </h1>

        <button style={{ background: "transparent", border: "none", color: "white", fontSize: "26px" }}>
          🔔
        </button>
      </div>

      {/* USER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#FACC15",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
          }}
        >
          👤
        </div>

        <h2>Hi, David John</h2>
      </div>

      {/* BALANCE */}
      <div
        style={{
          margin: "0 20px",
          background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
          borderRadius: "24px",
          padding: "24px",
          color: "white",
        }}
      >
        <p>Available Balance</p>

        <h1 style={{ fontSize: "42px" }}>
          ₦200,000
        </h1>

        <button
          style={{
            padding: "12px 18px",
            borderRadius: "12px",
            border: "none",
            background: "white",
            color: "#2563EB",
            fontWeight: 700,
          }}
        >
          Withdraw
        </button>
      </div>

      {/* QUICK ACTIONS */}
      <section
        style={{
          background: "white",
          margin: "20px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>Quick Actions</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "15px",
          }}
        >
          <ActionItem icon="💬" label="Platform" />
          <ActionItem
            icon="💳"
            label="Buy BPC"
            onClick={() => router.push("/dashboard/bpc-buy")}
          />
          <ActionItem icon="📞" label="Airtime" />
          <ActionItem icon="📶" label="Data" />
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "white",
          margin: "20px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>More Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "15px",
          }}
        >
          <ActionItem icon="❓" label="FAQ" />
          <ActionItem icon="💬" label="Support" />
          <ActionItem icon="👤" label="Profile" />
          <ActionItem icon="⚙️" label="Settings" />
        </div>
      </section>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "16px 0",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <span>🏠</span>
        <span>💬</span>
        <span>➕</span>
        <span>📶</span>
        <span>👤</span>
      </div>
    </main>
  );
}

function ActionItem({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#EFF6FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto 10px",
          fontSize: "24px",
        }}
      >
        {icon}
      </div>

      <div>{label}</div>
    </div>
  );
}
