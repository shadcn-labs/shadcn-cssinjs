"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/registry/bases/stylex/ui/combobox";
import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";

const categories = [
  "technology",
  "design",
  "business",
  "marketing",
  "education",
  "health",
] as const;

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      business: "الأعمال",
      design: "التصميم",
      education: "التعليم",
      empty: "لم يتم العثور على فئات.",
      health: "الصحة",
      label: "الفئات",
      marketing: "التسويق",
      placeholder: "أضف فئات",
      technology: "التكنولوجيا",
    },
  },
  en: {
    dir: "ltr",
    values: {
      business: "Business",
      design: "Design",
      education: "Education",
      empty: "No categories found.",
      health: "Health",
      label: "Categories",
      marketing: "Marketing",
      placeholder: "Add categories",
      technology: "Technology",
    },
  },
  he: {
    dir: "rtl",
    values: {
      business: "עסקים",
      design: "עיצוב",
      education: "חינוך",
      empty: "לא נמצאו קטגוריות.",
      health: "בריאות",
      label: "קטגוריות",
      marketing: "שיווק",
      placeholder: "הוסף קטגוריות",
      technology: "טכנולוגיה",
    },
  },
};

export default function ComboboxRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const anchor = useComboboxAnchor();

  const categoryLabels: Record<string, string> = {
    business: t.business,
    design: t.design,
    education: t.education,
    health: t.health,
    marketing: t.marketing,
    technology: t.technology,
  };

  return (
    <Field className="mx-auto w-full max-w-xs">
      <FieldLabel>{t.label}</FieldLabel>
      <Combobox
        multiple
        autoHighlight
        items={categories}
        defaultValue={[categories[0]]}
        itemToStringValue={(item: (typeof categories)[number]) =>
          categoryLabels[item] || item
        }
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values) => (
              <React.Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>
                    {categoryLabels[value] || value}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder={t.placeholder} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent
          anchor={anchor}
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <ComboboxEmpty>{t.empty}</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {categoryLabels[item] || item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  );
}
