import { Separator } from "@/registry/bases/stylex/separator/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
          shadcn-cssinjs
        </h4>
        <p style={{ fontSize: 14, color: "var(--muted-foreground)", margin: 0 }}>
          StyleX-styled Base UI components.
        </p>
      </div>
      <Separator style={{ margin: "16px 0" }} />
      <div
        style={{
          display: "flex",
          height: 20,
          alignItems: "center",
          gap: 16,
          fontSize: 14,
        }}
      >
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Registry</span>
      </div>
    </div>
  );
}
