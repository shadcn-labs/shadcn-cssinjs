"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/accordion/accordion";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      answer1:
        "انقر على 'نسيت كلمة المرور' في صفحة تسجيل الدخول، أدخل عنوان بريدك الإلكتروني، وسنرسل لك رابطًا لإعادة تعيين كلمة المرور. سينتهي صلاحية الرابط خلال 24 ساعة.",
      answer2:
        "نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت من إعدادات حسابك. ستظهر التغييرات في دورة الفوترة التالية.",
      answer3:
        "نقبل جميع بطاقات الائتمان الرئيسية و PayPal والتحويلات المصرفية. تتم معالجة جميع المدفوعات بأمان من خلال شركاء الدفع لدينا.",
      question1: "كيف يمكنني إعادة تعيين كلمة المرور؟",
      question2: "هل يمكنني تغيير خطة الاشتراك الخاصة بي؟",
      question3: "ما هي طرق الدفع التي تقبلونها؟",
    },
  },
  en: {
    dir: "ltr",
    values: {
      answer1:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password.",
      answer2:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
      answer3:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
      question1: "How do I reset my password?",
      question2: "Can I change my subscription plan?",
      question3: "What payment methods do you accept?",
    },
  },
  he: {
    dir: "rtl",
    values: {
      answer1:
        "לחץ על 'שכחתי סיסמה' בעמוד ההתחברות, הזן את כתובת האימייל שלך, ונשלח לך קישור לאיפוס הסיסמה. הקישור יפוג תוך 24 שעות.",
      answer2:
        "כן, אתה יכול לשדרג או להוריד את התוכנית שלך בכל עת מההגדרות של החשבון שלך. השינויים יבואו לידי ביטוי במחזור החיוב הבא.",
      answer3: "אנו מקבלים כרטיסי אשראי, PayPal והעברות בנקאיות.",
      question1: "איך אני מאפס את הסיסמה שלי?",
      question2: "האם אני יכול לשנות את תוכנית המנוי שלי?",
      question3: "אילו אמצעי תשלום אתם מקבלים?",
    },
  },
};

const items = [
  {
    answerKey: "answer1" as const,
    questionKey: "question1" as const,
    value: "item-1",
  },
  {
    answerKey: "answer2" as const,
    questionKey: "question2" as const,
    value: "item-2",
  },
  {
    answerKey: "answer3" as const,
    questionKey: "question3" as const,
    value: "item-3",
  },
] as const;

export default function AccordionRtl() {
  const { t } = useTranslation(translations, "ar");

  return (
    <Accordion defaultValue={["item-1"]} className="max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{t[item.questionKey]}</AccordionTrigger>
          <AccordionContent>{t[item.answerKey]}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
