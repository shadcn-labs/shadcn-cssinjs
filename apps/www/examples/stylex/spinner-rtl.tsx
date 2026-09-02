"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/stylex/ui/item";
import { Spinner } from "@/registry/bases/stylex/ui/spinner";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      amount: "١٠٠.٠٠ دولار",
      title: "جاري معالجة الدفع...",
    },
  },
  en: {
    dir: "ltr",
    values: {
      amount: "$100.00",
      title: "Processing payment...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      amount: "$100.00",
      title: "מעבד תשלום...",
    },
  },
};

export default function SpinnerRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div
      className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]"
      dir={dir}
    >
      <Item variant="muted" dir={dir}>
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">{t.title}</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">{t.amount}</span>
        </ItemContent>
      </Item>
    </div>
  );
}
