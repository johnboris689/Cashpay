import { CashPayAccount } from "./types";

export let accounts: CashPayAccount[] = [
  {
    id: "main-opay",
    bankName: "OPay",
    accountName: "David John Mbaya",
    accountNumber: "9130892957",
    isActive: true,
  },
];

// 🔁 helper functions (simulate DB behavior)
export function addAccount(account: CashPayAccount) {
  accounts.push(account);
}

export function setActiveAccount(id: string) {
  accounts = accounts.map((acc) => ({
    ...acc,
    isActive: acc.id === id,
  }));
}

export function removeAccount(id: string) {
  accounts = accounts.filter((acc) => acc.id !== id);
}
