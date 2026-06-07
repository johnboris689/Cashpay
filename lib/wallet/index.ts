let balance = 200000; // 💰 REQUIRED BALANCE

export function getBalance() {
  return balance;
}

export function credit(amount: number) {
  balance += amount;
}

export function debit(amount: number) {
  if (amount > balance) throw new Error("Insufficient balance");
  balance -= amount;
}
