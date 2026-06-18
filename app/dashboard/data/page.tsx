"use client";

import { useState } from "react";
import { debit } from "@/lib/wallet";

export default function Data() {
  const [amount, setAmount] = useState("");

  const buyData = () => {
    try {
      debit(Number(amount));
      alert("Data purchase successful");
      setAmount("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Data Purchase</h1>

      <input
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={buyData}>Buy Data</button>
    </div>
  );
}
