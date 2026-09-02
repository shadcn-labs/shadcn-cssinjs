"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/stylex/ui/sheet";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      close: "إغلاق",
      description:
        "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر حفظ عند الانتهاء.",
      editProfile: "تعديل الملف الشخصي",
      name: "الاسم",
      open: "فتح",
      save: "حفظ التغييرات",
      username: "اسم المستخدم",
    },
  },
  en: {
    dir: "ltr",
    values: {
      close: "Close",
      description:
        "Make changes to your profile here. Click save when you're done.",
      editProfile: "Edit profile",
      name: "Name",
      open: "Open",
      save: "Save changes",
      username: "Username",
    },
  },
  he: {
    dir: "rtl",
    values: {
      close: "סגור",
      description: "בצע שינויים בפרופיל שלך כאן. לחץ שמור כשתסיים.",
      editProfile: "עריכת פרופיל",
      name: "שם",
      open: "פתח",
      save: "שמור שינויים",
      username: "שם משתמש",
    },
  },
};

export default function SheetRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        {t.open}
      </SheetTrigger>
      <SheetContent
        dir={dir}
        side={dir === "rtl" ? "left" : "right"}
        data-lang={dir === "rtl" ? language : undefined}
      >
        <SheetHeader>
          <SheetTitle>{t.editProfile}</SheetTitle>
          <SheetDescription>{t.description}</SheetDescription>
        </SheetHeader>
        <FieldGroup className="px-4">
          <Field>
            <FieldLabel htmlFor="sheet-rtl-name">{t.name}</FieldLabel>
            <Input id="sheet-rtl-name" defaultValue="Pedro Duarte" />
          </Field>
          <Field>
            <FieldLabel htmlFor="sheet-rtl-username">{t.username}</FieldLabel>
            <Input id="sheet-rtl-username" defaultValue="peduarte" />
          </Field>
        </FieldGroup>
        <SheetFooter>
          <Button type="submit">{t.save}</Button>
          <SheetClose render={<Button variant="outline" />}>
            {t.close}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
