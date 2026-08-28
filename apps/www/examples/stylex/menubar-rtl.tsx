"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/bases/stylex/ui/menubar";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      addProfile: "إضافة ملف شخصي...",
      andy: "Andy",
      benoit: "Benoit",
      bookmarksBar: "شريط الإشارات المرجعية",
      copy: "نسخ",
      cut: "قص",
      edit: "تعديل",
      editProfile: "تعديل...",
      emailLink: "رابط البريد الإلكتروني",
      file: "ملف",
      find: "بحث",
      findItem: "بحث...",
      findNext: "البحث التالي",
      findPrevious: "البحث السابق",
      forceReload: "إعادة تحميل قسري",
      fullUrls: "عناوين URL الكاملة",
      hideSidebar: "إخفاء الشريط الجانبي",
      luis: "Luis",
      messages: "الرسائل",
      newIncognitoWindow: "نافذة التصفح المتخفي الجديدة",
      newTab: "علامة تبويب جديدة",
      newWindow: "نافذة جديدة",
      notes: "الملاحظات",
      paste: "لصق",
      print: "طباعة...",
      profiles: "الملفات الشخصية",
      redo: "إعادة",
      reload: "إعادة تحميل",
      searchTheWeb: "البحث على الويب",
      share: "مشاركة",
      toggleFullscreen: "تبديل وضع ملء الشاشة",
      undo: "تراجع",
      view: "عرض",
    },
  },
  en: {
    dir: "ltr",
    values: {
      addProfile: "Add Profile...",
      andy: "Andy",
      benoit: "Benoit",
      bookmarksBar: "Bookmarks Bar",
      copy: "Copy",
      cut: "Cut",
      edit: "Edit",
      editProfile: "Edit...",
      emailLink: "Email link",
      file: "File",
      find: "Find",
      findItem: "Find...",
      findNext: "Find Next",
      findPrevious: "Find Previous",
      forceReload: "Force Reload",
      fullUrls: "Full URLs",
      hideSidebar: "Hide Sidebar",
      luis: "Luis",
      messages: "Messages",
      newIncognitoWindow: "New Incognito Window",
      newTab: "New Tab",
      newWindow: "New Window",
      notes: "Notes",
      paste: "Paste",
      print: "Print...",
      profiles: "Profiles",
      redo: "Redo",
      reload: "Reload",
      searchTheWeb: "Search the web",
      share: "Share",
      toggleFullscreen: "Toggle Fullscreen",
      undo: "Undo",
      view: "View",
    },
  },
  he: {
    dir: "rtl",
    values: {
      addProfile: "הוסף פרופיל...",
      andy: "Andy",
      benoit: "Benoit",
      bookmarksBar: "סרגל סימניות",
      copy: "העתק",
      cut: "גזור",
      edit: "ערוך",
      editProfile: "ערוך...",
      emailLink: "קישור אימייל",
      file: "קובץ",
      find: "מצא",
      findItem: "מצא...",
      findNext: "מצא הבא",
      findPrevious: "מצא הקודם",
      forceReload: "רענן בכוח",
      fullUrls: "כתובות URL מלאות",
      hideSidebar: "הסתר סרגל צד",
      luis: "Luis",
      messages: "הודעות",
      newIncognitoWindow: "חלון גלישה בסתר חדש",
      newTab: "כרטיסייה חדשה",
      newWindow: "חלון חדש",
      notes: "הערות",
      paste: "הדבק",
      print: "הדפס...",
      profiles: "פרופילים",
      redo: "בצע שוב",
      reload: "רענן",
      searchTheWeb: "חפש באינטרנט",
      share: "שתף",
      toggleFullscreen: "החלף מסך מלא",
      undo: "בטל",
      view: "תצוגה",
    },
  },
};

export default function MenubarRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [profile, setProfile] = React.useState("benoit");

  return (
    <Menubar className="w-72" dir={dir}>
      <MenubarMenu>
        <MenubarTrigger>{t.file}</MenubarTrigger>
        <MenubarContent dir={dir} align={dir === "rtl" ? "end" : "start"}>
          <MenubarGroup>
            <MenubarItem>
              {t.newTab} <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              {t.newWindow} <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>{t.newIncognitoWindow}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>{t.share}</MenubarSubTrigger>
              <MenubarSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <MenubarGroup>
                  <MenubarItem>{t.emailLink}</MenubarItem>
                  <MenubarItem>{t.messages}</MenubarItem>
                  <MenubarItem>{t.notes}</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              {t.print} <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.edit}</MenubarTrigger>
        <MenubarContent
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarGroup>
            <MenubarItem>
              {t.undo} <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              {t.redo} <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>{t.find}</MenubarSubTrigger>
              <MenubarSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <MenubarGroup>
                  <MenubarItem>{t.searchTheWeb}</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>{t.findItem}</MenubarItem>
                  <MenubarItem>{t.findNext}</MenubarItem>
                  <MenubarItem>{t.findPrevious}</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>{t.cut}</MenubarItem>
            <MenubarItem>{t.copy}</MenubarItem>
            <MenubarItem>{t.paste}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.view}</MenubarTrigger>
        <MenubarContent
          className="w-44"
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarGroup>
            <MenubarCheckboxItem>{t.bookmarksBar}</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>{t.fullUrls}</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              {t.reload} <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              {t.forceReload} <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.toggleFullscreen}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.hideSidebar}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.profiles}</MenubarTrigger>
        <MenubarContent
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            <MenubarRadioItem value="andy">{t.andy}</MenubarRadioItem>
            <MenubarRadioItem value="benoit">{t.benoit}</MenubarRadioItem>
            <MenubarRadioItem value="Luis">{t.luis}</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.editProfile}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.addProfile}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
