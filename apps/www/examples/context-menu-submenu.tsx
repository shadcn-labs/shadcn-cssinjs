import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/bases/stylex/ui/context-menu";

export default function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        style={{
          alignItems: "center",
          border: "1px dashed var(--border)",
          borderRadius: "0.5rem",
          color: "var(--muted-foreground)",
          display: "flex",
          fontSize: 14,
          height: 150,
          justifyContent: "center",
          width: 300,
        }}
      >
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent style={{ width: 200 }}>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Messages</ContextMenuItem>
            <ContextMenuItem>Notes</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
