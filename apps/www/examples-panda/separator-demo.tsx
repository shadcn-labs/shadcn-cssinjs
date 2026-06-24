"use client";

import { Separator } from "@/registry/bases/panda/separator/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
          shadcn-cssinjs
        </h4>
        <p
          style={{ color: "var(--muted-foreground)", fontSize: 14, margin: 0 }}
        >
          StyleX-styled Base UI components.
        </p>
      </div>
      <Separator style={{ marginBlock: "1rem" }} />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 14,
          gap: 16,
          height: 20,
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
