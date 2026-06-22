"use client";

import { CalendarIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/bases/stylex/hover-card/hover-card";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "إطار عمل React — تم إنشاؤه وصيانته بواسطة @vercel.",
      joined: "انضم في ديسمبر 2021",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "The React framework — created and maintained by @vercel.",
      joined: "Joined December 2021",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "מסגרת ה-React — נוצרה ומתוחזקת על ידי @vercel.",
      joined: "הצטרף בדצמבר 2021",
    },
  },
};

export default function HoverCardRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@shadcn</Button>} />
      <HoverCardContent dir={dir}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>@shadcn</h4>
          <p style={{ margin: 0 }}>{t.description}</p>
          <div
            style={{
              alignItems: "center",
              color: "var(--muted-foreground)",
              display: "flex",
              fontSize: 12,
              gap: 6,
            }}
          >
            <CalendarIcon size={12} />
            {t.joined}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
