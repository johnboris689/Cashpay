"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 4000);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Payment Received ✅</h1>
      <p>Redirecting to dashboard...</p>
    </main>
  );
}
