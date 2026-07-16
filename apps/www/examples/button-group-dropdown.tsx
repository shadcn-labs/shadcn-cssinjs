"use client";

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" className="pl-2!" />}
        >
          <ChevronDownIcon className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon className="size-4" />
              Mute Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon className="size-4" />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangleIcon className="size-4" />
              Report Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundXIcon className="size-4" />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon className="size-4" />
              Share Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon className="size-4" />
              Copy Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <TrashIcon className="size-4" />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
