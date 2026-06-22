"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";

const translations: Translations = {
  ar: { dir: "rtl", values: { label: "أوافق على الشروط والأحكام" } },
  en: { dir: "ltr", values: { label: "Accept terms and conditions" } },
  he: { dir: "rtl", values: { label: "אני מקבל את התנאים וההגבלות" } },
};

export default function CheckboxRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <label dir={dir} style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Checkbox defaultChecked />
      <span style={{ fontSize: 14 }}>{t.label}</span>
    </label>
  );
}
