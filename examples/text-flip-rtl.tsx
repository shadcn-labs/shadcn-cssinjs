"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { TextFlip } from "@/registry/bases/stylex/text-flip/text-flip";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: { atomic: "CSS الذري", prefix: "مصمم باستخدام" },
  },
  en: {
    dir: "ltr",
    values: { atomic: "atomic CSS", prefix: "Styled with" },
  },
  he: {
    dir: "rtl",
    values: { atomic: "CSS אטומי", prefix: "מעוצב עם" },
  },
};

export default function TextFlipRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div
      dir={dir}
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: 24,
        fontWeight: 600,
        gap: 8,
      }}
    >
      <span>{t.prefix}</span>
      <TextFlip interval={1.5}>
        <span style={{ color: "var(--primary)" }}>StyleX</span>
        <span style={{ color: "var(--primary)" }}>{t.atomic}</span>
        <span style={{ color: "var(--primary)" }}>CSS-in-JS</span>
      </TextFlip>
    </div>
  );
}
