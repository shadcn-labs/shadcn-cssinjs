"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/bases/stylex/ui/hover-card";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      bottom: "أسفل",
      "inline-end": "نهاية السطر",
      "inline-start": "بداية السطر",
      left: "يسار",
      name: "سماعات لاسلكية",
      price: "٩٩.٩٩ $",
      right: "يمين",
      top: "أعلى",
      trigger: "سماعات لاسلكية",
    },
  },
  en: {
    dir: "ltr",
    values: {
      bottom: "Bottom",
      "inline-end": "Inline End",
      "inline-start": "Inline Start",
      left: "Left",
      name: "Wireless Headphones",
      price: "$99.99",
      right: "Right",
      top: "Top",
      trigger: "Wireless Headphones",
    },
  },
  he: {
    dir: "rtl",
    values: {
      bottom: "למטה",
      "inline-end": "סוף השורה",
      "inline-start": "תחילת השורה",
      left: "שמאל",
      name: "אוזניות אלחוטיות",
      price: "99.99 $",
      right: "ימין",
      top: "למעלה",
      trigger: "אוזניות אלחוטיות",
    },
  },
};

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

export default function HoverCardRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map((side) => (
          <HoverCard key={side}>
            <HoverCardTrigger
              delay={10}
              closeDelay={100}
              render={<Button variant="outline" />}
            >
              {t[side]}
            </HoverCardTrigger>
            <HoverCardContent
              side={side}
              className="flex w-64 flex-col gap-1"
              dir={dir}
            >
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.price}</div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map((side) => (
          <HoverCard key={side}>
            <HoverCardTrigger
              delay={10}
              closeDelay={100}
              render={<Button variant="outline" />}
            >
              {t[side]}
            </HoverCardTrigger>
            <HoverCardContent
              side={side === "inline-start" ? "left" : "right"}
              className="flex w-64 flex-col gap-1"
              dir={dir}
            >
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.price}</div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
