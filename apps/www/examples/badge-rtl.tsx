"use client";

import { BadgeCheck, BookmarkIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Badge } from "@/registry/bases/stylex/ui/badge";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      badge: "شارة",
      bookmark: "إشارة مرجعية",
      destructive: "مدمر",
      outline: "مخطط",
      secondary: "ثانوي",
      verified: "متحقق",
    },
  },
  en: {
    dir: "ltr",
    values: {
      badge: "Badge",
      bookmark: "Bookmark",
      destructive: "Destructive",
      outline: "Outline",
      secondary: "Secondary",
      verified: "Verified",
    },
  },
  he: {
    dir: "rtl",
    values: {
      badge: "תג",
      bookmark: "סימנייה",
      destructive: "הרסני",
      outline: "קווי מתאר",
      secondary: "משני",
      verified: "מאומת",
    },
  },
};

export default function BadgeRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex w-full flex-wrap justify-center gap-2" dir={dir}>
      <Badge>{t.badge}</Badge>
      <Badge variant="secondary">{t.secondary}</Badge>
      <Badge variant="destructive">{t.destructive}</Badge>
      <Badge variant="outline">{t.outline}</Badge>
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        {t.verified}
      </Badge>
      <Badge variant="outline">
        {t.bookmark}
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  );
}
