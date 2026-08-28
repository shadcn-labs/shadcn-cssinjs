"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/stylex/ui/native-select";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cancelled: "ملغي",
      done: "منجز",
      inProgress: "قيد التنفيذ",
      placeholder: "اختر الحالة",
      todo: "مهام",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cancelled: "Cancelled",
      done: "Done",
      inProgress: "In Progress",
      placeholder: "Select status",
      todo: "Todo",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cancelled: "בוטל",
      done: "הושלם",
      inProgress: "בתהליך",
      placeholder: "בחר סטטוס",
      todo: "לעשות",
    },
  },
};

export default function NativeSelectRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <NativeSelect dir={dir}>
      <NativeSelectOption value="">{t.placeholder}</NativeSelectOption>
      <NativeSelectOption value="todo">{t.todo}</NativeSelectOption>
      <NativeSelectOption value="in-progress">
        {t.inProgress}
      </NativeSelectOption>
      <NativeSelectOption value="done">{t.done}</NativeSelectOption>
      <NativeSelectOption value="cancelled">{t.cancelled}</NativeSelectOption>
    </NativeSelect>
  );
}
