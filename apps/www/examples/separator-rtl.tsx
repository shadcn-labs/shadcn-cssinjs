"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Separator } from "@/registry/bases/stylex/separator/separator";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description:
        "مجموعة من المكونات المصممة بشكل جميل يمكنك تخصيصها وتوسيعها والبناء عليها.",
      subtitle: "الأساس لنظام التصميم الخاص بك",
      title: "shadcn/ui",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description:
        "A set of beautifully designed components that you can customize, extend, and build on.",
      subtitle: "The Foundation for your Design System",
      title: "shadcn/ui",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description:
        "סט של רכיבים מעוצבים בצורה יפה שאתה יכול להתאים אישית, להרחיב ולבנות עליהם.",
      subtitle: "הבסיס למערכת העיצוב שלך",
      title: "shadcn/ui",
    },
  },
};

export default function SeparatorRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm" dir={dir}>
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">{t.title}</div>
        <div className="text-muted-foreground">{t.subtitle}</div>
      </div>
      <Separator />
      <div>{t.description}</div>
    </div>
  );
}
