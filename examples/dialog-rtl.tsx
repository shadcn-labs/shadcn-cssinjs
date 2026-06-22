"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/dialog/dialog";
import { Input } from "@/registry/bases/stylex/input/input";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cancel: "إلغاء",
      description:
        "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر على حفظ عند الانتهاء.",
      name: "الاسم",
      save: "حفظ التغييرات",
      title: "تعديل الملف الشخصي",
      trigger: "تعديل الملف الشخصي",
      username: "اسم المستخدم",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cancel: "Cancel",
      description:
        "Make changes to your profile here. Click save when you're done.",
      name: "Name",
      save: "Save changes",
      title: "Edit profile",
      trigger: "Edit profile",
      username: "Username",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cancel: "ביטול",
      description: "בצע שינויים בפרופיל שלך כאן. לחץ על שמור בסיום.",
      name: "שם",
      save: "שמור שינויים",
      title: "ערוך פרופיל",
      trigger: "ערוך פרופיל",
      username: "שם משתמש",
    },
  },
};

export default function DialogRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <DialogContent dir={dir} style={{ maxWidth: 425 }}>
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Input defaultValue="Aniket Pawar" placeholder={t.name} />
          <Input defaultValue="@alaymanguy" placeholder={t.username} />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">{t.cancel}</Button>} />
          <DialogClose render={<Button>{t.save}</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
