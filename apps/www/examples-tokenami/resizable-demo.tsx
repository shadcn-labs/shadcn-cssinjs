"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/tokenami/resizable/resizable";

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
        "--border-color": "var(--color_border)",
        "--border-radius": "var(---, 0.5rem)",
        "--border-style": "solid",
        "--border-width": "var(---, 1px)",
        "--height": 50,
        "--max-width": 120,
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
