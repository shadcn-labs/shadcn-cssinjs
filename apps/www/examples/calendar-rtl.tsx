"use client";

import * as React from "react";
import { arSA, he } from "react-day-picker/locale";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Calendar } from "@/registry/bases/stylex/ui/calendar";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {},
  },
  en: {
    dir: "ltr",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
};

const locales = {
  ar: arSA,
  he,
} as const;

export default function CalendarRtl() {
  const { dir, language } = useTranslation(translations, "ar");
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border [--cell-size:--spacing(9)]"
      captionLayout="dropdown"
      dir={dir}
      locale={
        dir === "rtl" ? locales[language as keyof typeof locales] : undefined
      }
    />
  );
}
