"use client";

import { ChevronLeftIcon, ShieldAlertIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/item/item";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "تم اكتشاف تسجيل دخول جديد من جهاز غير معروف.",
      title: "تنبيه أمني",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "New login detected from unknown device.",
      title: "Security Alert",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "זוהתה כניסה חדשה ממכשיר לא מוכר.",
      title: "התראת אבטחה",
    },
  },
};

export default function ItemRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="w-full max-w-md" dir={dir}>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{t.title}</ItemTitle>
          <ItemDescription>{t.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronLeftIcon className="size-4 rtl:rotate-180" />
        </ItemActions>
      </Item>
    </div>
  );
}
