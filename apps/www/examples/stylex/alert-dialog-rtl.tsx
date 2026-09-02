"use client";

import { BluetoothIcon } from "lucide-react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/stylex/ui/alert-dialog";
import { Button } from "@/registry/bases/stylex/ui/button";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      allow: "السماح",
      cancel: "إلغاء",
      continue: "متابعة",
      description:
        "لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك نهائيًا من خوادمنا.",
      dontAllow: "عدم السماح",
      showDialog: "إظهار الحوار",
      showDialogSm: "إظهار الحوار (صغير)",
      smallDescription: "هل تريد السماح لملحق USB بالاتصال بهذا الجهاز؟",
      smallTitle: "السماح للملحق بالاتصال؟",
      title: "هل أنت متأكد تمامًا؟",
    },
  },
  en: {
    dir: "ltr",
    values: {
      allow: "Allow",
      cancel: "Cancel",
      continue: "Continue",
      description:
        "This action cannot be undone. This will permanently delete your account from our servers.",
      dontAllow: "Don't allow",
      showDialog: "Show Dialog",
      showDialogSm: "Show Dialog (sm)",
      smallDescription:
        "Do you want to allow the USB accessory to connect to this device?",
      smallTitle: "Allow accessory to connect?",
      title: "Are you absolutely sure?",
    },
  },
  he: {
    dir: "rtl",
    values: {
      allow: "אפשר",
      cancel: "ביטול",
      continue: "המשך",
      description:
        "פעולה זו לא ניתנת לביטול. זה ימחק לצמיתות את החשבון שלך מהשרתים שלנו.",
      dontAllow: "אל תאפשר",
      showDialog: "הצג דיאלוג",
      showDialogSm: "הצג דיאלוג (קטן)",
      smallDescription: "האם אתה רוצה לאפשר להתקן USB להתחבר למכשיר זה?",
      smallTitle: "לאפשר להתקן להתחבר?",
      title: "האם אתה בטוח לחלוטין?",
    },
  },
};

export default function AlertDialogRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <div className="flex gap-4" dir={dir}>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          {t.showDialog}
        </AlertDialogTrigger>
        <AlertDialogContent
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>{t.title}</AlertDialogTitle>
            <AlertDialogDescription>{t.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
            <AlertDialogAction>{t.continue}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          {t.showDialogSm}
        </AlertDialogTrigger>
        <AlertDialogContent
          size="sm"
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <AlertDialogHeader>
            <AlertDialogMedia>
              <BluetoothIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>{t.smallTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.smallDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.dontAllow}</AlertDialogCancel>
            <AlertDialogAction>{t.allow}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
