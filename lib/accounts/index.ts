import { accounts } from "./data";

export function getActiveAccount() {
  const active = accounts.find((acc) => acc.isActive);

  if (!active) {
    throw new Error("No active payout account found");
  }

  return active;
}

export function getAllAccounts() {
  return accounts;
}
