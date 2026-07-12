"use client";

import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/dropdown-menu/dropdown-menu";

export default function DropdownMenuCheckboxes() {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [panel, setPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Open menu</Button>}
      />
      <DropdownMenuContent align="start" style={{ width: 224 }}>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={statusBar}
          onCheckedChange={setStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={activityBar}
          onCheckedChange={setActivityBar}
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
