"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/ui/dialog";
import { Field, FieldGroup } from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Label } from "@/registry/bases/stylex/ui/label";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cancel: "إلغاء",
      description:
        "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.",
      editProfile: "تعديل الملف الشخصي",
      name: "الاسم",
      openDialog: "فتح الحوار",
      saveChanges: "حفظ التغييرات",
      username: "اسم المستخدم",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cancel: "Cancel",
      description:
        "Make changes to your profile here. Click save when you're done.",
      editProfile: "Edit profile",
      name: "Name",
      openDialog: "Open Dialog",
      saveChanges: "Save changes",
      username: "Username",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cancel: "בטל",
      description: "בצע שינויים בפרופיל שלך כאן. לחץ על שמור כשתסיים.",
      editProfile: "ערוך פרופיל",
      name: "שם",
      openDialog: "פתח דיאלוג",
      saveChanges: "שמור שינויים",
      username: "שם משתמש",
    },
  },
};

export default function DialogRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="outline" />}>
          {t.openDialog}
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-sm"
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <DialogHeader>
            <DialogTitle>{t.editProfile}</DialogTitle>
            <DialogDescription>{t.description}</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">{t.name}</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">{t.username}</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              {t.cancel}
            </DialogClose>
            <Button type="submit">{t.saveChanges}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
