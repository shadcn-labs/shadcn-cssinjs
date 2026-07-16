"use client";

import { SearchIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/stylex/ui/input-group";
import { Kbd } from "@/registry/bases/stylex/ui/kbd";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      placeholder: "ابحث...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      placeholder: "Search...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      placeholder: "חיפוש...",
    },
  },
};

export default function InputGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <InputGroup className="max-w-sm" dir={dir}>
      <InputGroupInput placeholder={t.placeholder} />
      <InputGroupAddon>
        <SearchIcon className="size-4 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
