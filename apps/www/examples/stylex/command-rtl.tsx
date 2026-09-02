"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/stylex/ui/command";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      billing: "الفوترة",
      calculator: "الآلة الحاسبة",
      calendar: "التقويم",
      empty: "لم يتم العثور على نتائج.",
      placeholder: "اكتب أمرًا أو ابحث...",
      profile: "الملف الشخصي",
      searchEmoji: "البحث عن الرموز التعبيرية",
      settings: "الإعدادات",
      suggestions: "اقتراحات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      billing: "Billing",
      calculator: "Calculator",
      calendar: "Calendar",
      empty: "No results found.",
      placeholder: "Type a command or search...",
      profile: "Profile",
      searchEmoji: "Search Emoji",
      settings: "Settings",
      suggestions: "Suggestions",
    },
  },
  he: {
    dir: "rtl",
    values: {
      billing: "חיוב",
      calculator: "מחשבון",
      calendar: "לוח שנה",
      empty: "לא נמצאו תוצאות.",
      placeholder: "הקלד פקודה או חפש...",
      profile: "פרופיל",
      searchEmoji: "חפש אמוג'י",
      settings: "הגדרות",
      suggestions: "הצעות",
    },
  },
};

export default function CommandRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Command className="max-w-sm rounded-lg border" dir={dir}>
      <CommandInput placeholder={t.placeholder} dir={dir} />
      <CommandList>
        <CommandEmpty>{t.empty}</CommandEmpty>
        <CommandGroup heading={t.suggestions}>
          <CommandItem>
            <Calendar />
            <span>{t.calendar}</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>{t.searchEmoji}</span>
          </CommandItem>
          <CommandItem className="pointer-events-none opacity-50">
            <Calculator />
            <span>{t.calculator}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.settings}>
          <CommandItem>
            <User />
            <span>{t.profile}</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>{t.billing}</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>{t.settings}</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
