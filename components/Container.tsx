export default function Container({ children }: { children: any }) {
  return (
    <div style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: 24
    }}>
      {children}
    </div>
  )
}
