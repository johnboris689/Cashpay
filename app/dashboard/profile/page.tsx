"use client";

import { getBalance } from "@/lib/wallet";
import { getUser } from "@/lib/user";
import { getActiveAccount } from "@/lib/accounts";

export default function ProfilePage() {
  const user = getUser();
  const balance = getBalance();
  const account = getActiveAccount();

  return (
    <div style={{ padding: 20 }}>
      <h1>👤 Profile</h1>

      <h2>User Information</h2>
      <p><b>Name:</b> {user.fullName || "Not set"}</p>
      <p><b>Email:</b> {user.email || "Not set"}</p>
      <p><b>BPC Status:</b> {user.hasValidBpc ? "Valid ✅" : "Not Valid ❌"}</p>

      <h2>Wallet</h2>
      <p><b>Balance:</b> ₦{balance.toLocaleString()}</p>

      <h2>Withdrawal Account</h2>
      <p><b>Bank:</b> {account.bankName}</p>
      <p><b>Name:</b> {account.accountName}</p>
      <p><b>Number:</b> {account.accountNumber}</p>
    </div>
  );
}
