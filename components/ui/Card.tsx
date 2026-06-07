export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={styles.card}>{children}</div>;
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#121c33",
    padding: 16,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};
