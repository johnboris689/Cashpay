import { create } from "zustand";

type Transaction = {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
};

type FinanceState = {
  balance: number;
  transactions: Transaction[];

  fundWallet: (amount: number) => void;
  sendMoney: (amount: number, description: string) => void;
};

export const useFinanceStore = create<FinanceState>((set) => ({
  balance: 200000,

  transactions: [],

  fundWallet: (amount) =>
    set((state) => ({
      balance: state.balance + amount,
      transactions: [
        {
          id: crypto.randomUUID(),
          type: "credit",
          amount,
          description: "Wallet Funding",
        },
        ...state.transactions,
      ],
    })),

  sendMoney: (amount, description) =>
    set((state) => ({
      balance: state.balance - amount,
      transactions: [
        {
          id: crypto.randomUUID(),
          type: "debit",
          amount,
          description,
        },
        ...state.transactions,
      ],
    })),
}));
