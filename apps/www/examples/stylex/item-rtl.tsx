"use client";

import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      action: "إجراء",
      basicItem: "عنصر أساسي",
      basicItemDesc: "عنصر بسيط يحتوي على عنوان ووصف.",
      verifiedTitle: "تم التحقق من ملفك الشخصي.",
    },
  },
  en: {
    dir: "ltr",
    values: {
      action: "Action",
      basicItem: "Basic Item",
      basicItemDesc: "A simple item with title and description.",
      verifiedTitle: "Your profile has been verified.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      action: "פעולה",
      basicItem: "פריט בסיסי",
      basicItemDesc: "פריט פשוט עם כותרת ותיאור.",
      verifiedTitle: "הפרופיל שלך אומת.",
    },
  },
};

export default function ItemRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir={dir}>
      <Item variant="outline" dir={dir}>
        <ItemContent>
          <ItemTitle>{t.basicItem}</ItemTitle>
          <ItemDescription>{t.basicItemDesc}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            {t.action}
          </Button>
        </ItemActions>
      </Item>
      <Item
        variant="outline"
        size="sm"
        render={<a href="/docs" aria-label={t.verifiedTitle} />}
        dir={dir}
      >
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{t.verifiedTitle}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  );
}
