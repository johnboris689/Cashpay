"use client";

import { useRouter } from "next/navigation";
import { useBPCStore } from "@/lib/bpc-store";

export default function PaymentPage() {
  const router = useRouter();
  const { amount } = useBPCStore();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
        padding: 20,
      }}
    >
      <h1>Bank Transfer</h1>

      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <p>Amount: ₦{amount.toLocaleString()}</p>

        <p>Bank: Opay</p>
        <p>Account Name: CashPay Limited</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1F2937",
            padding: 12,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <span>1234567890</span>

          <button
            onClick={() =>
              navigator.clipboard.writeText("1234567890")
            }
            style={{
              background: "#2563EB",
              border: "none",
              padding: "6px 10px",
              color: "white",
              borderRadius: 8,
            }}
          >
            Copy
          </button>
        </div>
      </div>

      <button
        onClick={() => router.push("/dashboard/bpc-success")}
        style={{
          width: "100%",
          marginTop: 30,
          padding: 16,
          borderRadius: 12,
          border: "none",
          background: "#22C55E",
          color: "white",
          fontWeight: 700,
        }}
      >
        I Have Paid
      </button>
    </main>
  );
}
