import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/bases/stylex/context-menu/context-menu";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        style={{
          display: "flex",
          height: 150,
          width: 300,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          border: "1px dashed var(--border)",
          fontSize: 14,
          color: "var(--muted-foreground)",
        }}
      >
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent style={{ width: 200 }}>
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
