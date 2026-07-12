"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/stylex/popover/popover";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "اضبط أبعاد الطبقة.",
      height: "الارتفاع",
      title: "الأبعاد",
      trigger: "فتح النافذة",
      width: "العرض",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "Set the dimensions for the layer.",
      height: "Height",
      title: "Dimensions",
      trigger: "Open popover",
      width: "Width",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "הגדר את המידות עבור השכבה.",
      height: "גובה",
      title: "מידות",
      trigger: "פתח חלון",
      width: "רוחב",
    },
  },
};

export default function PopoverRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <PopoverContent dir={dir} style={{ width: 280 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
              {t.title}
            </h4>
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: 14,
                margin: 0,
              }}
            >
              {t.description}
            </p>
          </div>
          <Input defaultValue="100%" placeholder={t.width} />
          <Input defaultValue="25px" placeholder={t.height} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
