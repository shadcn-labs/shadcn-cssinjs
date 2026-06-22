"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/bases/stylex/combobox/combobox";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      empty: "لا توجد نتائج.",
      placeholder: "اختر إطار العمل",
    },
  },
  en: {
    dir: "ltr",
    values: {
      empty: "No items found.",
      placeholder: "Select a framework",
    },
  },
  he: {
    dir: "rtl",
    values: {
      empty: "לא נמצאו פריטים.",
      placeholder: "בחר מסגרת עבודה",
    },
  },
};

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default function ComboboxRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="w-full max-w-xs" dir={dir}>
      <Combobox items={frameworks}>
        <ComboboxInput placeholder={t.placeholder} />
        <ComboboxContent>
          <ComboboxEmpty>{t.empty}</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
