"use client";

import { CalendarIcon, SettingsIcon, SmileIcon, UserIcon } from "lucide-react";

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
      calendar: "التقويم",
      emoji: "البحث عن إيموجي",
      empty: "لا توجد نتائج.",
      placeholder: "اكتب أمرًا أو ابحث...",
      profile: "الملف الشخصي",
      settings: "الإعدادات",
      suggestions: "اقتراحات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      calendar: "Calendar",
      emoji: "Search Emoji",
      empty: "No results found.",
      placeholder: "Type a command or search...",
      profile: "Profile",
      settings: "Settings",
      suggestions: "Suggestions",
    },
  },
  he: {
    dir: "rtl",
    values: {
      calendar: "יומן",
      emoji: "חיפוש אימוג'י",
      empty: "לא נמצאו תוצאות.",
      placeholder: "הקלד פקודה או חפש...",
      profile: "פרופיל",
      settings: "הגדרות",
      suggestions: "הצעות",
    },
  },
};

export default function CommandRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Command
      dir={dir}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "0.5rem",
        maxWidth: 400,
        width: "100%",
      }}
    >
      <CommandInput placeholder={t.placeholder} />
      <CommandList>
        <CommandEmpty>{t.empty}</CommandEmpty>
        <CommandGroup heading={t.suggestions}>
          <CommandItem>
            <CalendarIcon size={16} />
            {t.calendar}
          </CommandItem>
          <CommandItem>
            <SmileIcon size={16} />
            {t.emoji}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.settings}>
          <CommandItem>
            <UserIcon size={16} />
            {t.profile}
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon size={16} />
            {t.settings}
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
