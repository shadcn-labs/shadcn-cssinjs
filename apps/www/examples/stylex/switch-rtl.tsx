"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Switch } from "@/registry/bases/stylex/ui/switch";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description:
        "يتم مشاركة التركيز عبر الأجهزة، ويتم إيقاف تشغيله عند مغادرة التطبيق.",
      label: "المشاركة عبر الأجهزة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description:
        "Focus is shared across devices, and turns off when you leave the app.",
      label: "Share across devices",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "המיקוד משותף בין מכשירים, וכבה כשאתה עוזב את האפליקציה.",
      label: "שיתוף בין מכשירים",
    },
  },
};

export default function SwitchRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Field orientation="horizontal" className="max-w-sm" dir={dir}>
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode-rtl" dir={dir}>
          {t.label}
        </FieldLabel>
        <FieldDescription dir={dir}>{t.description}</FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode-rtl" dir={dir} />
    </Field>
  );
}
