"use client";

import { FolderCodeIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/empty/empty";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      create: "إنشاء مشروع",
      description: "لم تنشئ أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.",
      title: "لا توجد مشاريع بعد",
    },
  },
  en: {
    dir: "ltr",
    values: {
      create: "Create Project",
      description:
        "You haven't created any projects yet. Get started by creating your first project.",
      title: "No Projects Yet",
    },
  },
  he: {
    dir: "rtl",
    values: {
      create: "צור פרויקט",
      description:
        "עדיין לא יצרת פרויקטים. התחל על ידי יצירת הפרויקט הראשון שלך.",
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
      <EmptyContent>
        <Button>{t.create}</Button>
      </EmptyContent>
    </Empty>
  );
}
