"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Progress } from "@/registry/bases/stylex/ui/progress";

const translations: Translations = {
  ar: { dir: "rtl", values: {} },
  en: { dir: "ltr", values: {} },
  he: { dir: "rtl", values: {} },
};

export default function ProgressRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <div dir={dir} style={{ maxWidth: 320, width: "100%" }}>
      <Progress value={60} />
    </div>
  );
}
