"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/toggle-group/toggle-group";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: { bold: "عريض", italic: "مائل", underline: "تسطير" },
  },
  en: {
    dir: "ltr",
    values: { bold: "Bold", italic: "Italic", underline: "Underline" },
  },
  he: {
    dir: "rtl",
    values: { bold: "מודגש", italic: "נטוי", underline: "קו תחתון" },
  },
};

export default function ToggleGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <ToggleGroup defaultValue={["bold"]} dir={dir} multiple>
      <ToggleGroupItem aria-label={t.bold} value="bold">
        <BoldIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={t.italic} value="italic">
        <ItalicIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={t.underline} value="underline">
        <UnderlineIcon size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
