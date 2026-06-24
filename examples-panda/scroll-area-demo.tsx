"use client";

import { ScrollArea } from "@/registry/bases/panda/scroll-area/scroll-area";

const TAGS = Array.from({ length: 24 }).map((_, i) => `v1.2.0-beta.${24 - i}`);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea
      style={{
        borderColor: "var(--border)",
        borderRadius: "0.5rem",
        borderStyle: "solid",
        borderWidth: "1px",
        height: "15rem",
        width: "13.75rem",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>
          Tags
        </h4>
        {TAGS.map((tag) => (
          <div
            key={tag}
            style={{
              borderTop: "1px solid var(--border)",
              fontSize: 14,
              paddingBlock: 8,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
