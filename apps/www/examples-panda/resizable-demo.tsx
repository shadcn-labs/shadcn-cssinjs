"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/panda/resizable/resizable";

const panel = {
  alignItems: "center",
  display: "flex",
  fontSize: 14,
  fontWeight: 500,
  justifyContent: "center",
  padding: 16,
} as const;

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      style={{
        borderColor: "var(--border)",
        borderRadius: "0.5rem",
        borderStyle: "solid",
        borderWidth: "1px",
        height: "12.5rem",
        maxWidth: "30rem",
      }}
    >
      <ResizablePanel>
        <div style={panel}>One</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div style={panel}>Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
