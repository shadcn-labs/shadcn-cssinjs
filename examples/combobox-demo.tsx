"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/bases/stylex/button/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/bases/stylex/command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/popover/popover";

const FRAMEWORKS = [
  { label: "Next.js", value: "next" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

export default function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button
            style={{ justifyContent: "space-between", width: 220 }}
            variant="outline"
          >
            {value
              ? FRAMEWORKS.find((f) => f.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDownIcon size={16} style={{ opacity: 0.5 }} />
          </Button>
        }
      />
      <PopoverContent style={{ padding: 0, width: 220 }}>
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {FRAMEWORKS.map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={() => {
                    setValue(framework.value === value ? "" : framework.value);
                    setOpen(false);
                  }}
                  value={framework.value}
                >
                  {framework.label}
                  <CheckIcon
                    size={16}
                    style={{
                      marginInlineStart: "auto",
                      opacity: value === framework.value ? 1 : 0,
                    }}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
