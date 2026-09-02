"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      apiKey: "مفتاح API",
      description: "مفتاح API الخاص بك مشفر ومخزن بأمان.",
      placeholder: "sk-...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      apiKey: "API Key",
      description: "Your API key is encrypted and stored securely.",
      placeholder: "sk-...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      apiKey: "מפתח API",
      description: "מפתח ה-API שלך מוצפן ונשמר בצורה מאובטחת.",
      placeholder: "sk-...",
    },
  },
};

export default function InputRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Field dir={dir}>
      <FieldLabel htmlFor="input-rtl-api-key">{t.apiKey}</FieldLabel>
      <Input
        id="input-rtl-api-key"
        type="password"
        placeholder={t.placeholder}
        dir={dir}
      />
      <FieldDescription>{t.description}</FieldDescription>
    </Field>
  );
}
