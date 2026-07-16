"use client";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

export default function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon className="size-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon className="size-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon className="size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
