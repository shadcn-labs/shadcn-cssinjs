"use client";

import { TextFlip } from "@/registry/bases/stylex/text-flip/text-flip";

export default function TextFlipDemo() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: 24,
        fontWeight: 600,
        gap: 8,
      }}
    >
      <span>Styled with</span>
      <TextFlip interval={1.5}>
        <span style={{ color: "var(--primary)" }}>StyleX</span>
        <span style={{ color: "var(--primary)" }}>atomic CSS</span>
        <span style={{ color: "var(--primary)" }}>CSS-in-JS</span>
      </TextFlip>
    </div>
  );
}
