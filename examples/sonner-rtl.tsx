"use client";

import { toast } from "sonner";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import { Toaster } from "@/registry/bases/stylex/sonner/sonner";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "الأحد، 03 ديسمبر 2023 الساعة 9:00 صباحًا",
      show: "إظهار الإشعار",
      title: "تم إنشاء الحدث",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      show: "Show toast",
      title: "Event has been created",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "יום ראשון, 03 בדצמבר 2023 בשעה 9:00",
      show: "הצג התראה",
      title: "האירוע נוצר",
    },
  },
};

export default function SonnerRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div dir={dir}>
      <Button
        onClick={() => toast(t.title, { description: t.description })}
        variant="outline"
      >
        {t.show}
      </Button>
      <Toaster dir={dir} />
    </div>
  );
}
