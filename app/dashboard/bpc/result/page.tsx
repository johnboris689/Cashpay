"use client";

import { useEffect, useState } from "react";

export default function BpcResultPage() {
  const [ref, setRef] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("bpc_ref") || "";
    setRef(stored);
  }, []);

  const generatedCode =
    "BPC-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-600 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">

        {/* CASHPAY HEADER */}
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          CASHPAY
        </h1>
        <p className="text-gray-500 mb-6">
          Transaction Successful
        </p>

        {/* SUCCESS ICON */}
        <div className="text-green-500 text-5xl mb-4">✔</div>

        {/* GENERATED CODE */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-500">Your BPC Code</p>
          <p className="text-xl font-bold tracking-widest">
            {generatedCode}
          </p>
        </div>

        {/* REFERENCE */}
        <p className="text-xs text-gray-500 mb-4">
          Reference: {ref || "N/A"}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
