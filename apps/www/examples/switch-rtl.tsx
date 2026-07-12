"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Switch } from "@/registry/bases/stylex/switch/switch";

const translations: Translations = {
  ar: { dir: "rtl", values: { label: "وضع الطيران" } },
  en: { dir: "ltr", values: { label: "Airplane Mode" } },
  he: { dir: "rtl", values: { label: "מצב טיסה" } },
};

export default function SwitchRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <label dir={dir} style={{ alignItems: "center", display: "flex", gap: 8 }}>
      <Switch defaultChecked />
      <span style={{ fontSize: 14 }}>{t.label}</span>
    </label>
  );
}
