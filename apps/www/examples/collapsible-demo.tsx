"use client";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible
      defaultOpen
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: 350,
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600 }}>
          @peduarte starred 3 repositories
        </span>
        <CollapsibleTrigger
          render={
            <Button size="icon-sm" variant="ghost">
              <ChevronsUpDownIcon />
              <span
                style={{
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  overflow: "hidden",
                  position: "absolute",
                  width: 1,
                }}
              >
                Toggle
              </span>
            </Button>
          }
        />
      </div>
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 14,
          padding: "0.75rem",
        }}
      >
        @radix-ui/primitives
      </div>
      <CollapsibleContent
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 14,
            padding: "0.75rem",
          }}
        >
          @base-ui/react
        </div>
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 14,
            padding: "0.75rem",
          }}
        >
          @stylexjs/stylex
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
