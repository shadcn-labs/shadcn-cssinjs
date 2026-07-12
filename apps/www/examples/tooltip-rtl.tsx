"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/stylex/tooltip/tooltip";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: { content: "أضف إلى المكتبة", trigger: "مرّر فوقي" },
  },
  en: {
    dir: "ltr",
    values: { content: "Add to library", trigger: "Hover me" },
  },
  he: { dir: "rtl", values: { content: "הוסף לספרייה", trigger: "רחף מעליי" } },
};

export default function TooltipRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <TooltipContent dir={dir}>
        <p>{t.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
