"use client";

import { useState } from "react";
import { getBalance, debit } from "@/lib/wallet";
import { user, validateBpc, setUser } from "@/lib/user";
import { getActiveAccount } from "@/lib/accounts";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bpc, setBpc] = useState("");

  const balance = getBalance();

  const handleWithdraw = () => {
    try {
      // Save user data
      setUser({
        fullName: name,
        email,
        bpcCode: bpc,
      });

      // Validate BPC
      const valid = validateBpc();

      if (!valid) {
        alert("Invalid BPC Code. Please purchase a valid code first.");
        return;
      }

      const amt = Number(amount);

      if (amt <= 0) {
        alert("Enter valid amount");
        return;
      }

      debit(amt);

      const account = getActiveAccount();

      alert(
        `Withdrawal Successful!\nSent to ${account.accountName} (${account.bankName})`
      );

      setAmount("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Withdraw Funds</h1>

      {/* 💰 BALANCE DISPLAY */}
      <h2>Available Balance: ₦{balance.toLocaleString()}</h2>

      {/* USER DETAILS */}
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* BPC CODE */}
      <input
        placeholder="Enter BPC Code"
        value={bpc}
        onChange={(e) => setBpc(e.target.value)}
      />

      {/* WITHDRAW AMOUNT */}
      <input
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
