import { getActiveAccount } from "@/lib/accounts";

export default function Success() {
  const account = getActiveAccount();

  return (
    <div>
      <h1>Payment Successful 🎉</h1>

      <h3>Send Payment To:</h3>

      <p><b>Bank:</b> {account.bankName}</p>
      <p><b>Account Name:</b> {account.accountName}</p>
      <p><b>Account Number:</b> {account.accountNumber}</p>
    </div>
  );
}
