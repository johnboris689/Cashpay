import { prisma } from "@/lib/db/prisma";

export default async function AdminPage() {
  const users = await prisma.user.findMany();
  const transactions = await prisma.transaction.findMany();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Users</h2>
      {users.map((u) => (
        <div key={u.id} style={styles.card}>
          <p>{u.fullName}</p>
          <p>{u.email}</p>
          <p>Role: {u.role}</p>
        </div>
      ))}

      <h2>Transactions</h2>
      {transactions.map((t) => (
        <div key={t.id} style={styles.card}>
          <p>{t.type}</p>
          <p>₦{t.amount}</p>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#111a2e",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
};
