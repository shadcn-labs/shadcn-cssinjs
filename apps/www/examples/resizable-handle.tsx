import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/stylex/ui/resizable";

export default function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup
      className="min-h-[200px] max-w-md rounded-lg border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
