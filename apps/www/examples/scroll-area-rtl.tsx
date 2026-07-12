"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { ScrollArea } from "@/registry/bases/stylex/scroll-area/scroll-area";
import { Separator } from "@/registry/bases/stylex/separator/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      tags: "العلامات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      tags: "Tags",
    },
  },
  he: {
    dir: "rtl",
    values: {
      tags: "תגיות",
    },
  },
};

export default function ScrollAreaRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <ScrollArea className="h-72 w-48 rounded-md border" dir={dir}>
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">{t.tags}</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
