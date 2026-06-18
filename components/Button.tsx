export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid #2a3b5f",
        background: "#2563eb",
        color: "white",
        cursor: "pointer",
        fontWeight: 500
      }}
    >
      {children}
    </button>
  )
}
