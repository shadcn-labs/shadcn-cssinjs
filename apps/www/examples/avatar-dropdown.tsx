"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/ui/avatar";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

export default function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button className="rounded-full" size="icon" variant="ghost" />}
      >
        <Avatar>
          <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
