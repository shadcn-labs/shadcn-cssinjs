"use client";

import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      createProject: "إنشاء مشروع",
      description: "لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.",
      importProject: "استيراد مشروع",
      learnMore: "تعرف على المزيد",
      title: "لا توجد مشاريع بعد",
    },
  },
  en: {
    dir: "ltr",
    values: {
      createProject: "Create Project",
      description:
        "You haven't created any projects yet. Get started by creating your first project.",
      importProject: "Import Project",
      learnMore: "Learn More",
      title: "No Projects Yet",
    },
  },
  he: {
    dir: "rtl",
    values: {
      createProject: "צור פרויקט",
      description:
        "עדיין לא יצרת פרויקטים. התחל על ידי יצירת הפרויקט הראשון שלך.",
      importProject: "ייבא פרויקט",
      learnMore: "למד עוד",
      title: "אין פרויקטים עדיין",
    },
  },
};

export default function EmptyRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Empty dir={dir}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon className="size-6" />
        </EmptyMedia>
        <EmptyTitle>{t.title}</EmptyTitle>
        <EmptyDescription>{t.description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>{t.createProject}</Button>
        <Button variant="outline">{t.importProject}</Button>
      </EmptyContent>
      <Button
        variant="link"
        // oxlint-disable-next-line no-html-link-for-pages
        render={<a href="/docs" aria-label={t.learnMore} />}
        className="text-muted-foreground"
        size="sm"
      >
        {t.learnMore}{" "}
        <ArrowUpRightIcon className="rtl:rotate-270" data-icon="inline-end" />
      </Button>
    </Empty>
  );
}
