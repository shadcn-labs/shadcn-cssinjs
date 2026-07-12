"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/stylex/field/field";
import { Input } from "@/registry/bases/stylex/input/input";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "نحتاج إلى عنوانك لتوصيل طلبك.",
      legend: "معلومات العنوان",
      nameDescription: "أدخل اسمك الكامل لتحديد الهوية.",
      nameLabel: "الاسم الكامل",
      street: "عنوان الشارع",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "We need your address to deliver your order.",
      legend: "Address Information",
      nameDescription: "Provide your full name for identification.",
      nameLabel: "Full Name",
      street: "Street Address",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "אנחנו צריכים את הכתובת שלך כדי לספק את ההזמנה.",
      legend: "פרטי כתובת",
      nameDescription: "ספק את שמך המלא לזיהוי.",
      nameLabel: "שם מלא",
      street: "כתובת רחוב",
    },
  },
};

export default function FieldRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <FieldSet className="w-full max-w-sm" dir={dir}>
      <FieldLegend>{t.legend}</FieldLegend>
      <FieldDescription>{t.description}</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="rtl-name">{t.nameLabel}</FieldLabel>
          <Input id="rtl-name" />
          <FieldDescription>{t.nameDescription}</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="rtl-street">{t.street}</FieldLabel>
          <Input id="rtl-street" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
