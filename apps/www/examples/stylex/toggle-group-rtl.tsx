"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/ui/toggle-group";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cards: "بطاقات",
      grid: "شبكة",
      list: "قائمة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cards: "Cards",
      grid: "Grid",
      list: "List",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cards: "כרטיסים",
      grid: "רשת",
      list: "רשימה",
    },
  },
};

export default function ToggleGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <ToggleGroup variant="outline" defaultValue={["list"]} dir={dir}>
      <ToggleGroupItem value="list" aria-label={t.list}>
        {t.list}
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label={t.grid}>
        {t.grid}
      </ToggleGroupItem>
      <ToggleGroupItem value="cards" aria-label={t.cards}>
        {t.cards}
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
