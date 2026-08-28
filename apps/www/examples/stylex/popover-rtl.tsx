"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/stylex/ui/popover";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      bottom: "أسفل",
      description: "تعيين الأبعاد للطبقة.",
      "inline-end": "نهاية السطر",
      "inline-start": "بداية السطر",
      left: "يسار",
      right: "يمين",
      title: "الأبعاد",
      top: "أعلى",
    },
  },
  en: {
    dir: "ltr",
    values: {
      bottom: "Bottom",
      description: "Set the dimensions for the layer.",
      "inline-end": "Inline End",
      "inline-start": "Inline Start",
      left: "Left",
      right: "Right",
      title: "Dimensions",
      top: "Top",
    },
  },
  he: {
    dir: "rtl",
    values: {
      bottom: "למטה",
      description: "הגדר את המימדים לשכבה.",
      "inline-end": "סוף השורה",
      "inline-start": "תחילת השורה",
      left: "שמאל",
      right: "ימין",
      title: "מימדים",
      top: "למעלה",
    },
  },
};

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

export default function PopoverRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map((side) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="outline" />}>
              {t[side]}
            </PopoverTrigger>
            <PopoverContent side={side} dir={dir}>
              <PopoverHeader>
                <PopoverTitle>{t.title}</PopoverTitle>
                <PopoverDescription>{t.description}</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map((side) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="outline" />}>
              {t[side]}
            </PopoverTrigger>
            <PopoverContent
              side={side === "inline-start" ? "left" : "right"}
              dir={dir}
            >
              <PopoverHeader>
                <PopoverTitle>{t.title}</PopoverTitle>
                <PopoverDescription>{t.description}</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
