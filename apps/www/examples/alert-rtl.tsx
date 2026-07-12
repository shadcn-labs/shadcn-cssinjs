"use client";

import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/stylex/alert/alert";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      featureDescription:
        "لقد أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.",
      featureTitle: "ميزة جديدة متاحة",
      paymentDescription:
        "تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان بريدك الإلكتروني.",
      paymentTitle: "تم الدفع بنجاح",
    },
  },
  en: {
    dir: "ltr",
    values: {
      featureDescription:
        "We've added dark mode support. You can enable it in your account settings.",
      featureTitle: "New feature available",
      paymentDescription:
        "Your payment of $29.99 has been processed. A receipt has been sent to your email address.",
      paymentTitle: "Payment successful",
    },
  },
  he: {
    dir: "rtl",
    values: {
      featureDescription:
        "הוספנו תמיכה במצב כהה. אתה יכול להפעיל אותו בהגדרות החשבון שלך.",
      featureTitle: "תכונה חדשה זמינה",
      paymentDescription:
        "התשלום שלך בסך 29.99 דולר עובד. קבלה נשלחה לכתובת האימייל שלך.",
      paymentTitle: "התשלום בוצע בהצלחה",
    },
  },
};

const alerts = [
  {
    descriptionKey: "paymentDescription" as const,
    icon: CheckCircle2Icon,
    titleKey: "paymentTitle" as const,
  },
  {
    descriptionKey: "featureDescription" as const,
    icon: InfoIcon,
    titleKey: "featureTitle" as const,
  },
] as const;

export default function AlertRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="grid w-full max-w-md items-start gap-4" dir={dir}>
      {alerts.map((alert, index) => {
        const Icon = alert.icon;
        return (
          <Alert key={index}>
            <Icon />
            <AlertTitle>{t[alert.titleKey]}</AlertTitle>
            <AlertDescription>{t[alert.descriptionKey]}</AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
}
