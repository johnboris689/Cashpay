import { colors } from "@/lib/ui/tokens";

export default function Input(props: any) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 10,
        border: `1px solid ${colors.border}`,
        background: "#0f172a",
        color: colors.text,
        outline: "none",
      }}
    />
  );
}
