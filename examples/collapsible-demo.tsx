"use client";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/collapsible/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible
      defaultOpen
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
        maxWidth: 350,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600 }}>
          @peduarte starred 3 repositories
        </span>
        <CollapsibleTrigger
          render={
            <Button size="icon-sm" variant="ghost">
              <ChevronsUpDownIcon />
              <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                Toggle
              </span>
            </Button>
          }
        />
      </div>
      <div
        style={{
          borderRadius: "0.5rem",
          border: "1px solid var(--border)",
          padding: "0.75rem",
          fontSize: 14,
          fontFamily: "var(--font-mono, monospace)",
        }}
      >
        @radix-ui/primitives
      </div>
      <CollapsibleContent
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div
          style={{
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            padding: "0.75rem",
            fontSize: 14,
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          @base-ui/react
        </div>
        <div
          style={{
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            padding: "0.75rem",
            fontSize: 14,
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          @stylexjs/stylex
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
