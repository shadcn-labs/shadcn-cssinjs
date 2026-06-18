import {
  CalendarIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/stylex/command/command";

export default function CommandDemo() {
  return (
    <Command
      style={{
        width: "100%",
        maxWidth: 400,
        borderRadius: "0.5rem",
        border: "1px solid var(--border)",
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
