"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "شاركنا أفكارك حول خدمتنا.",
      label: "التعليقات",
      placeholder: "تعليقاتك تساعدنا على التحسين...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "Share your thoughts about our service.",
      label: "Feedback",
      placeholder: "Your feedback helps us improve...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "שתף את מחשבותיך על השירות שלנו.",
      label: "משוב",
      placeholder: "המשוב שלך עוזר לנו להשתפר...",
    },
  },
};

export default function TextareaRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Field className="w-full max-w-xs" dir={dir}>
      <FieldLabel htmlFor="feedback" dir={dir}>
        {t.label}
      </FieldLabel>
      <Textarea id="feedback" placeholder={t.placeholder} dir={dir} rows={4} />
      <FieldDescription dir={dir}>{t.description}</FieldDescription>
    </Field>
  );
}
