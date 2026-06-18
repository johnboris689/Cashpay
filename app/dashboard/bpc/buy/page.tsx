"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BuyBpcPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bpc/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          amount: 10000,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to process purchase");
      }

      const data = await res.json();

      // Save reference for next page if needed
      localStorage.setItem("bpc_ref", data.reference || "");

      // Redirect to countdown page
      router.push("/dashboard/bpc/countdown");
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-600 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Buy BPC Code
        </h1>

        <div className="mb-4">
          <label className="text-sm font-medium">Amount</label>
          <div className="p-3 bg-gray-100 rounded-lg font-semibold">
            ₦10,000
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Full Name</label>
          <input
            className="w-full p-3 border rounded-lg mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Email Address</label>
          <input
            className="w-full p-3 border rounded-lg mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button
          onClick={handleBuy}
          disabled={loading}
          className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {loading ? "Processing..." : "Buy BPC Code"}
        </button>
      </div>
    </div>
  );
}
