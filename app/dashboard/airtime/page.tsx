"use client";

import { useState } from "react";
import { debit } from "@/lib/wallet";

export default function Airtime() {
  const [amount, setAmount] = useState("");

  const buyAirtime = () => {
    try {
      debit(Number(amount));
      alert("Airtime purchase successful");
      setAmount("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Airtime Purchase</h1>

      <input
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={buyAirtime}>Buy Airtime</button>
    </div>
  );
}
