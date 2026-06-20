"use client";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/collapsible/collapsible";

const row = {
  border: "1px solid var(--border)",
  borderRadius: "0.5rem",
  fontSize: 14,
  padding: "0.5rem 0.75rem",
};

export default function CollapsibleSettings() {
  return (
    <Collapsible
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
        <span style={{ fontSize: 14, fontWeight: 600 }}>Advanced settings</span>
        <CollapsibleTrigger
          render={
            <Button aria-label="Toggle" size="icon-sm" variant="ghost">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div style={row}>Email notifications</div>
      <CollapsibleContent
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div style={row}>Push notifications</div>
        <div style={row}>Weekly digest</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
