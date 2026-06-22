"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Textarea } from "@/registry/bases/stylex/textarea/textarea";

const translations: Translations = {
  ar: { dir: "rtl", values: { placeholder: "اكتب رسالتك هنا." } },
  en: { dir: "ltr", values: { placeholder: "Type your message here." } },
  he: { dir: "rtl", values: { placeholder: "הקלד את ההודעה שלך כאן." } },
};

export default function TextareaRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Textarea dir={dir} placeholder={t.placeholder} style={{ maxWidth: 320 }} />
  );
}
