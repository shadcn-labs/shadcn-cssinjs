import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/stylex/ui/resizable";

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
        border: "1px solid var(--border)",
        borderRadius: "0.5rem",
        height: 200,
        maxWidth: 480,
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
