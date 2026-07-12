"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Skeleton } from "@/registry/bases/stylex/skeleton/skeleton";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {},
  },
  en: {
    dir: "ltr",
    values: {},
  },
  he: {
    dir: "rtl",
    values: {},
  },
};

export default function SkeletonRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <div className="flex items-center gap-4" dir={dir}>
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
