"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Input } from "@/registry/bases/stylex/input/input";

const translations: Translations = {
  ar: { dir: "rtl", values: { placeholder: "البريد الإلكتروني" } },
  en: { dir: "ltr", values: { placeholder: "Email" } },
  he: { dir: "rtl", values: { placeholder: "אימייל" } },
};

export default function InputRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Input
      dir={dir}
      placeholder={t.placeholder}
      style={{ maxWidth: 280 }}
      type="email"
    />
  );
}
