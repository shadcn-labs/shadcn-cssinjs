"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/stylex/ui/tooltip";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      bottom: "أسفل",
      content: "إضافة إلى المكتبة",
      "inline-end": "نهاية السطر",
      "inline-start": "بداية السطر",
      left: "يسار",
      right: "يمين",
      top: "أعلى",
    },
  },
  en: {
    dir: "ltr",
    values: {
      bottom: "Bottom",
      content: "Add to library",
      "inline-end": "Inline End",
      "inline-start": "Inline Start",
      left: "Left",
      right: "Right",
      top: "Top",
    },
  },
  he: {
    dir: "rtl",
    values: {
      bottom: "למטה",
      content: "הוסף לספרייה",
      "inline-end": "סוף השורה",
      "inline-start": "תחילת השורה",
      left: "שמאל",
      right: "ימין",
      top: "למעלה",
    },
  },
};

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

export default function TooltipRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" />}>
              {t[side]}
            </TooltipTrigger>
            <TooltipContent side={side} dir={dir}>
              {t.content}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" />}>
              {t[side]}
            </TooltipTrigger>
            <TooltipContent
              side={side === "inline-start" ? "left" : "right"}
              dir={dir}
            >
              {t.content}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
