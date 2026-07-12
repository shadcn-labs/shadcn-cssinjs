"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      lead: "حوار مشروط يقاطع المستخدم بمحتوى مهم ويتوقع استجابة.",
      paragraph:
        "في يوم من الأيام، في أرض بعيدة، كان هناك ملك كسول جدًا يقضي يومه كله مستلقيًا على عرشه.",
      title: "ضريبة الضحك: سجلات ضريبة النكتة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      lead: "A modal dialog that interrupts the user with important content and expects a response.",
      paragraph:
        "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.",
      title: "Taxing Laughter: The Joke Tax Chronicles",
    },
  },
  he: {
    dir: "rtl",
    values: {
      lead: "תיבת דו-שיח מודאלית שמפריעה למשתמש עם תוכן חשוב ומצפה לתגובה.",
      paragraph:
        "היה היה, בארץ רחוקה, מלך עצלן מאוד שבילה את כל היום שרוע על כיסאו.",
      title: "מיסוי הצחוק: כרוניקות מס הבדיחה",
    },
  },
};

export default function TypographyRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div dir={dir}>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t.title}
      </h2>
      <p className="text-xl text-muted-foreground [&:not(:first-child)]:mt-6">
        {t.lead}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{t.paragraph}</p>
    </div>
  );
}
