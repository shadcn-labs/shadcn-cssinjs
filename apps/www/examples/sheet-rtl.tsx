"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/stylex/sheet/sheet";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description:
        "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر على حفظ عند الانتهاء.",
      name: "الاسم",
      save: "حفظ التغييرات",
      title: "تعديل الملف الشخصي",
      trigger: "فتح اللوحة",
      username: "اسم المستخدم",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description:
        "Make changes to your profile here. Click save when you're done.",
      name: "Name",
      save: "Save changes",
      title: "Edit profile",
      trigger: "Open sheet",
      username: "Username",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "בצע שינויים בפרופיל שלך כאן. לחץ על שמור בסיום.",
      name: "שם",
      save: "שמור שינויים",
      title: "ערוך פרופיל",
      trigger: "פתח גיליון",
      username: "שם משתמש",
    },
  },
};

export default function SheetRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <SheetContent dir={dir}>
        <SheetHeader>
          <SheetTitle>{t.title}</SheetTitle>
          <SheetDescription>{t.description}</SheetDescription>
        </SheetHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "0 16px",
          }}
        >
          <Input defaultValue="Aniket Pawar" placeholder={t.name} />
          <Input defaultValue="@alaymanguy" placeholder={t.username} />
        </div>
        <SheetFooter>
          <SheetClose render={<Button>{t.save}</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
