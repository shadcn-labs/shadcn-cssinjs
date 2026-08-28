"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/bases/stylex/ui/progress";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      label: "تقدم الرفع",
    },
  },
  en: {
    dir: "ltr",
    values: {
      label: "Upload progress",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "התקדמות העלאה",
    },
  },
};

const toArabicNumerals = (num: number): string => {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return [...num.toString()]
    .map((digit) => arabicNumerals[Number.parseInt(digit, 10)])
    .join("");
};

const ProgressRtl = () => {
  const { dir, t, language } = useTranslation(translations, "ar");

  const formatNumber = (num: number): string =>
    language === "ar" ? toArabicNumerals(num) : num.toString();

  return (
    <Progress value={56} className="w-full max-w-sm" dir={dir}>
      <ProgressLabel>{t.label}</ProgressLabel>
      <ProgressValue>
        {(value) => (
          <span className="ms-auto">
            {formatNumber(Number.parseFloat(value ?? "0"))}%
          </span>
        )}
      </ProgressValue>
    </Progress>
  );
};

export default ProgressRtl;
