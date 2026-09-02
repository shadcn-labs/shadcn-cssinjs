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
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      comfortable: "مريح",
      comfortableDescription: "مساحة أكبر بين العناصر.",
      compact: "مضغوط",
      compactDescription: "تباعد أدنى للتخطيطات الكثيفة.",
      default: "افتراضي",
      defaultDescription: "تباعد قياسي لمعظم حالات الاستخدام.",
    },
  },
  en: {
    dir: "ltr",
    values: {
      comfortable: "Comfortable",
      comfortableDescription: "More space between elements.",
      compact: "Compact",
      compactDescription: "Minimal spacing for dense layouts.",
      default: "Default",
      defaultDescription: "Standard spacing for most use cases.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      comfortable: "נוח",
      comfortableDescription: "יותר מקום בין האלמנטים.",
      compact: "קומפקטי",
      compactDescription: "ריווח מינימלי לפריסות צפופות.",
      default: "ברירת מחדל",
      defaultDescription: "ריווח סטנדרטי לרוב מקרי השימוש.",
    },
  },
};

export default function RadioGroupRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <RadioGroup defaultValue="comfortable" className="w-fit" dir={dir}>
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="r1-rtl" dir={dir} />
        <FieldContent>
          <FieldLabel htmlFor="r1-rtl" dir={dir}>
            {t.default}
          </FieldLabel>
          <FieldDescription dir={dir}>{t.defaultDescription}</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="r2-rtl" dir={dir} />
        <FieldContent>
          <FieldLabel htmlFor="r2-rtl" dir={dir}>
            {t.comfortable}
          </FieldLabel>
          <FieldDescription dir={dir}>
            {t.comfortableDescription}
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="r3-rtl" dir={dir} />
        <FieldContent>
          <FieldLabel htmlFor="r3-rtl" dir={dir}>
            {t.compact}
          </FieldLabel>
          <FieldDescription dir={dir}>{t.compactDescription}</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  );
}
