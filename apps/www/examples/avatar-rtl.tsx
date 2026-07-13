"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/stylex/ui/avatar";

const translations: Translations = {
  ar: { dir: "rtl", values: {} },
  en: { dir: "ltr", values: {} },
  he: { dir: "rtl", values: {} },
};

export default function AvatarRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <div dir={dir} style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AP</AvatarFallback>
      </Avatar>
    </div>
  );
}
