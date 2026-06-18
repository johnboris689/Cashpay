"use client";

import { useRouter } from "next/navigation";

export default function BPCBuyPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F4F7FC",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <h1
          style={{
            fontSize: 42,
            marginBottom: 30,
          }}
        >
          ₦10,000
        </h1>

        <div style={{ marginBottom: 20 }}>
          <label>User Name</label>

          <input
            value="David John"
            readOnly
            style={{
              width: "100%",
              padding: 14,
              marginTop: 8,
            }}
          />
        </div>

        <div>
          <label>Email Address</label>

          <input
            value="david@example.com"
            readOnly
            style={{
              width: "100%",
              padding: 14,
              marginTop: 8,
            }}
          />
        </div>
      </div>

      <button
        onClick={() =>
          router.push("/dashboard/bpc-processing")
        }
        style={{
          width: "100%",
          marginTop: 30,
          padding: 16,
          borderRadius: 12,
          border: "none",
          background: "#2563EB",
          color: "white",
          fontWeight: 700,
        }}
      >
        Buy BPC Code
      </button>
    </main>
  );
}
