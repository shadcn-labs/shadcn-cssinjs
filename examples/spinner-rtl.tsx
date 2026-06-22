"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import { Spinner } from "@/registry/bases/stylex/spinner/spinner";

const translations: Translations = {
  ar: { dir: "rtl", values: { wait: "يرجى الانتظار" } },
  en: { dir: "ltr", values: { wait: "Please wait" } },
  he: { dir: "rtl", values: { wait: "אנא המתן" } },
};

export default function SpinnerRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div dir={dir} style={{ alignItems: "center", display: "flex", gap: 16 }}>
      <Spinner />
      <Button disabled>
        <Spinner />
        {t.wait}
      </Button>
    </div>
  );
}
