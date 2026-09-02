"use client";

import { Search } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/stylex/ui/input-group";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      characterCount: "٠/٢٨٠",
      placeholder: "بحث...",
      post: "نشر",
      results: "١٢ نتيجة",
      saving: "جاري الحفظ...",
      savingChanges: "جاري حفظ التغييرات...",
      searching: "جاري البحث...",
      textareaDescription: "تذييل موضع أسفل منطقة النص.",
      textareaLabel: "منطقة النص",
      textareaPlaceholder: "اكتب تعليقًا...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      characterCount: "0/280",
      placeholder: "Search...",
      post: "Post",
      results: "12 results",
      saving: "Saving...",
      savingChanges: "Saving changes...",
      searching: "Searching...",
      textareaDescription: "Footer positioned below the textarea.",
      textareaLabel: "Textarea",
      textareaPlaceholder: "Write a comment...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      characterCount: "0/280",
      placeholder: "חפש...",
      post: "פרסם",
      results: "12 תוצאות",
      saving: "שומר...",
      savingChanges: "שומר שינויים...",
      searching: "מחפש...",
      textareaDescription: "כותרת תחתונה ממוקמת מתחת לאזור הטקסט.",
      textareaLabel: "אזור טקסט",
      textareaPlaceholder: "כתוב תגובה...",
    },
  },
};

export default function InputGroupRtl() {
  const { t } = useTranslation(translations, "ar");

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder={t.placeholder} />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{t.results}</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder={t.searching} />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder={t.savingChanges} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>{t.saving}</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="rtl-textarea">{t.textareaLabel}</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="rtl-textarea"
              placeholder={t.textareaPlaceholder}
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>{t.characterCount}</InputGroupText>
              <InputGroupButton variant="default" size="sm" className="ms-auto">
                {t.post}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>{t.textareaDescription}</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  );
}
