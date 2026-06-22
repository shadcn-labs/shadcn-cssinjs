"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
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

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      empty: "لم يتم العثور على إطار عمل.",
      search: "ابحث عن إطار عمل...",
      select: "اختر إطار العمل...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      empty: "No framework found.",
      search: "Search framework...",
      select: "Select framework...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      empty: "לא נמצאה מסגרת.",
      search: "חפש מסגרת...",
      select: "בחר מסגרת...",
    },
  },
};

export default function ComboboxRtl() {
  const { dir, t } = useTranslation(translations, "ar");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button
            dir={dir}
            style={{ justifyContent: "space-between", width: 220 }}
            variant="outline"
          >
            {value
              ? FRAMEWORKS.find((f) => f.value === value)?.label
              : t.select}
            <ChevronsUpDownIcon size={16} style={{ opacity: 0.5 }} />
          </Button>
        }
      />
      <PopoverContent dir={dir} style={{ padding: 0, width: 220 }}>
        <Command>
          <CommandInput placeholder={t.search} />
          <CommandList>
            <CommandEmpty>{t.empty}</CommandEmpty>
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
