"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/registry/bases/stylex/ui/menubar";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      edit: "تحرير",
      file: "ملف",
      newTab: "علامة تبويب جديدة",
      newWindow: "نافذة جديدة",
      print: "طباعة",
      redo: "إعادة",
      undo: "تراجع",
    },
  },
  en: {
    dir: "ltr",
    values: {
      edit: "Edit",
      file: "File",
      newTab: "New Tab",
      newWindow: "New Window",
      print: "Print",
      redo: "Redo",
      undo: "Undo",
    },
  },
  he: {
    dir: "rtl",
    values: {
      edit: "עריכה",
      file: "קובץ",
      newTab: "לשונית חדשה",
      newWindow: "חלון חדש",
      print: "הדפס",
      redo: "בצע שוב",
      undo: "בטל",
    },
  },
};

export default function MenubarRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Menubar dir={dir}>
      <MenubarMenu>
        <MenubarTrigger>{t.file}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            {t.newTab} <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>{t.newWindow}</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            {t.print} <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.edit}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>{t.undo}</MenubarItem>
          <MenubarItem>{t.redo}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
