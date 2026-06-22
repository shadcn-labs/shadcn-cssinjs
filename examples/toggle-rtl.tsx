"use client";

import { BookmarkIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Toggle } from "@/registry/bases/stylex/toggle/toggle";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      label: "إشارة مرجعية",
    },
  },
  en: {
    dir: "ltr",
    values: {
      label: "Bookmark",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "סימנייה",
    },
  },
};

export default function ToggleRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline" dir={dir}>
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      {t.label}
    </Toggle>
  );
}
