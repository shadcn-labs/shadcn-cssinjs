"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Kbd, KbdGroup } from "@/registry/bases/stylex/kbd/kbd";

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

export default function KbdRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <div className="flex flex-col items-center gap-4" dir={dir}>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  );
}
