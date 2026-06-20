"use client";

import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/bases/stylex/context-menu/context-menu";

export default function ContextMenuCheckboxes() {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [position, setPosition] = useState("bottom");

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
      <ContextMenuContent style={{ width: 220 }}>
        <ContextMenuLabel>Appearance</ContextMenuLabel>
        <ContextMenuCheckboxItem
          checked={bookmarks}
          onCheckedChange={setBookmarks}
        >
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Panel Position</ContextMenuLabel>
        <ContextMenuRadioGroup onValueChange={setPosition} value={position}>
          <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
          <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
          <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
