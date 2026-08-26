"use client";

import { CalendarIcon, SettingsIcon, SmileIcon, UserIcon } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/tokenami/command/command";

export default function CommandDemo() {
  return (
    <Command
      style={{
        "--border-color": "var(--color_border)",
        "--border-radius": "var(---, 0.5rem)",
        "--border-style": "solid",
        "--border-width": "var(---, 1px)",
        "--max-width": 100,
        "--width": "var(---, 100%)",
      }}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon size={16} />
            Calendar
          </CommandItem>
          <CommandItem>
            <SmileIcon size={16} />
            Search Emoji
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon size={16} />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon size={16} />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
