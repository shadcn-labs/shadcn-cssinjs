"use client";

import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/bases/stylex/ui/context-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      back: "رجوع",
      colm: "Colm Tuite",
      createShortcut: "إنشاء اختصار...",
      delete: "حذف",
      developerTools: "أدوات المطور",
      forward: "تقدم",
      longPress: "اضغط مطولاً هنا",
      moreTools: "المزيد من الأدوات",
      nameWindow: "تسمية النافذة...",
      navigation: "التنقل",
      pedro: "Pedro Duarte",
      people: "الأشخاص",
      reload: "إعادة تحميل",
      rightClick: "انقر بزر الماوس الأيمن هنا",
      savePage: "حفظ الصفحة...",
      showBookmarks: "إظهار الإشارات المرجعية",
      showFullUrls: "إظهار عناوين URL الكاملة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      back: "Back",
      colm: "Colm Tuite",
      createShortcut: "Create Shortcut...",
      delete: "Delete",
      developerTools: "Developer Tools",
      forward: "Forward",
      longPress: "Long press here",
      moreTools: "More Tools",
      nameWindow: "Name Window...",
      navigation: "Navigation",
      pedro: "Pedro Duarte",
      people: "People",
      reload: "Reload",
      rightClick: "Right click here",
      savePage: "Save Page...",
      showBookmarks: "Show Bookmarks",
      showFullUrls: "Show Full URLs",
    },
  },
  he: {
    dir: "rtl",
    values: {
      back: "חזור",
      colm: "Colm Tuite",
      createShortcut: "צור קיצור דרך...",
      delete: "מחק",
      developerTools: "כלי מפתח",
      forward: "קדימה",
      longPress: "לחץ לחיצה ארוכה כאן",
      moreTools: "כלים נוספים",
      nameWindow: "שם חלון...",
      navigation: "ניווט",
      pedro: "Pedro Duarte",
      people: "אנשים",
      reload: "רענן",
      rightClick: "לחץ לחיצה ימנית כאן",
      savePage: "שמור עמוד...",
      showBookmarks: "הצג סימניות",
      showFullUrls: "הצג כתובות URL מלאות",
    },
  },
};

export default function ContextMenuRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [people, setPeople] = React.useState("pedro");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">{t.rightClick}</span>
        <span className="hidden pointer-coarse:inline-block">
          {t.longPress}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent
        className="w-48"
        dir={dir}
        data-lang={dir === "rtl" ? language : undefined}
      >
        <ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>{t.navigation}</ContextMenuSubTrigger>
            <ContextMenuSubContent
              className="w-44"
              dir={dir}
              data-lang={dir === "rtl" ? language : undefined}
            >
              <ContextMenuGroup>
                <ContextMenuItem>
                  <ArrowLeftIcon />
                  {t.back}
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <ArrowRightIcon />
                  {t.forward}
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <RotateCwIcon />
                  {t.reload}
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>{t.moreTools}</ContextMenuSubTrigger>
            <ContextMenuSubContent
              className="w-44"
              dir={dir}
              data-lang={dir === "rtl" ? language : undefined}
            >
              <ContextMenuGroup>
                <ContextMenuItem>{t.savePage}</ContextMenuItem>
                <ContextMenuItem>{t.createShortcut}</ContextMenuItem>
                <ContextMenuItem>{t.nameWindow}</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>{t.developerTools}</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">
                  {t.delete}
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>
            {t.showBookmarks}
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>{t.showFullUrls}</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value={people} onValueChange={setPeople}>
            <ContextMenuLabel>{t.people}</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">{t.pedro}</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">{t.colm}</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
