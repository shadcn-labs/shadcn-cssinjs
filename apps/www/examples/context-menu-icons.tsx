import {
  ClipboardPasteIcon,
  CopyIcon,
  ScissorsIcon,
  TrashIcon,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/bases/stylex/context-menu/context-menu";

export default function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon className="size-4" />
            Copy
          </ContextMenuItem>
          <ContextMenuItem>
            <ScissorsIcon className="size-4" />
            Cut
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon className="size-4" />
            Paste
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon className="size-4" />
            Delete
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
