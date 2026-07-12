"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/button/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/stylex/drawer/drawer";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      cancel: "إلغاء",
      description: "لا يمكن التراجع عن هذا الإجراء.",
      submit: "إرسال",
      title: "هل أنت متأكد تمامًا؟",
      trigger: "فتح الدرج",
    },
  },
  en: {
    dir: "ltr",
    values: {
      cancel: "Cancel",
      description: "This action cannot be undone.",
      submit: "Submit",
      title: "Are you absolutely sure?",
      trigger: "Open drawer",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cancel: "ביטול",
      description: "לא ניתן לבטל פעולה זו.",
      submit: "שלח",
      title: "האם אתה בטוח לחלוטין?",
      trigger: "פתח מגירה",
    },
  },
};

export default function DrawerRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <DrawerContent dir={dir}>
        <DrawerHeader>
          <DrawerTitle>{t.title}</DrawerTitle>
          <DrawerDescription>{t.description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>{t.submit}</Button>
          <DrawerClose render={<Button variant="outline">{t.cancel}</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
