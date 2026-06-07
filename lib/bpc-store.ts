import { create } from "zustand";

type BPCState = {
  amount: number;
  username: string;
  email: string;

  setUser: (name: string, email: string) => void;
};

export const useBPCStore = create<BPCState>((set) => ({
  amount: 10000,
  username: "David John",
  email: "david@example.com",

  setUser: (name, email) =>
    set({
      username: name,
      email,
    }),
}));
