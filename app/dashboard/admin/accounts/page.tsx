import { prisma } from "@/lib/db/prisma";

export default async function AccountsPage() {
  const accounts = await prisma.wallet.findMany();

  return (
    <div>
      <h1>Account Control</h1>

      {accounts.map((a) => (
        <div key={a.id} style={styles.card}>
          <p>User ID: {a.userId}</p>
          <p>Balance: ₦{a.balance}</p>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#18243f",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
};
