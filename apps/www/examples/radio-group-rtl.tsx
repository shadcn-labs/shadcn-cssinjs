"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: { comfortable: "مريح", compact: "مدمج", default: "افتراضي" },
  },
  en: {
    dir: "ltr",
    values: {
      comfortable: "Comfortable",
      compact: "Compact",
      default: "Default",
    },
  },
  he: {
    dir: "rtl",
    values: { comfortable: "נוח", compact: "קומפקטי", default: "ברירת מחדל" },
  },
};

export default function RadioGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <RadioGroup defaultValue="comfortable" dir={dir}>
      {(["default", "comfortable", "compact"] as const).map((value) => (
        <label
          key={value}
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 14,
            gap: 8,
          }}
        >
          <RadioGroupItem value={value} />
          {t[value]}
        </label>
      ))}
    </RadioGroup>
  );
}
