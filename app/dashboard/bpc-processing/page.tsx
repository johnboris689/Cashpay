"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProcessingPage() {
  const router = useRouter();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/dashboard/bpc-payment");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0B1220",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>Processing Request</h1>

      <div
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {count}
      </div>

      <p>Please wait...</p>
    </main>
  );
}
