"use client";

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
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/stylex/alert-dialog/alert-dialog";
import { Button } from "@/registry/bases/stylex/button/button";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cancel: "إلغاء",
      continue: "متابعة",
      description:
        "لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك نهائيًا وإزالة بياناتك من خوادمنا.",
      title: "هل أنت متأكد تمامًا؟",
      trigger: "حذف الحساب",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cancel: "Cancel",
      continue: "Continue",
      description:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      title: "Are you absolutely sure?",
      trigger: "Delete account",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cancel: "ביטול",
      continue: "המשך",
      description:
        "לא ניתן לבטל פעולה זו. הדבר ימחק לצמיתות את חשבונך ויסיר את הנתונים שלך מהשרתים שלנו.",
      title: "האם אתה בטוח לחלוטין?",
      trigger: "מחק חשבון",
    },
  },
};

export default function AlertDialogRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">{t.trigger}</Button>}
      />
      <AlertDialogContent dir={dir}>
        <AlertDialogHeader>
          <AlertDialogTitle>{t.title}</AlertDialogTitle>
          <AlertDialogDescription>{t.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            render={<Button variant="outline">{t.cancel}</Button>}
          />
          <AlertDialogAction render={<Button>{t.continue}</Button>} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
