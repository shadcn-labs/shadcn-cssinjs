"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import { Spinner } from "@/registry/bases/stylex/spinner/spinner";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      button: "زر",
      delete: "حذف",
      loading: "جاري التحميل",
      submit: "إرسال",
    },
  },
  en: {
    dir: "ltr",
    values: {
      button: "Button",
      delete: "Delete",
      loading: "Loading",
      submit: "Submit",
    },
  },
  he: {
    dir: "rtl",
    values: {
      button: "כפתור",
      delete: "מחק",
      loading: "טוען",
      submit: "שלח",
    },
  },
};

export default function ButtonRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row" dir={dir}>
      <Button variant="outline">{t.button}</Button>
      <Button variant="destructive">{t.delete}</Button>
      <Button variant="outline">
        {t.submit}{" "}
        <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" /> {t.loading}
      </Button>
    </div>
  );
}
