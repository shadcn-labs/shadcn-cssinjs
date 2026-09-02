"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/bases/stylex/ui/pagination";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      next: "التالي",
      previous: "السابق",
    },
  },
  en: {
    dir: "ltr",
    values: {
      next: "Next",
      previous: "Previous",
    },
  },
  he: {
    dir: "rtl",
    values: {
      next: "הבא",
      previous: "הקודם",
    },
  },
};

const toArabicNumerals = (num: number): string => {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return [...num.toString()]
    .map((digit) => arabicNumerals[Number.parseInt(digit, 10)])
    .join("");
};

export default function PaginationRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  const formatNumber = (num: number): string => {
    if (language === "ar") {
      return toArabicNumerals(num);
    }
    return num.toString();
  };

  return (
    <Pagination dir={dir}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#">
            <span>{t.previous}</span>
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(1)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {formatNumber(2)}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(3)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#">
            <span>{t.next}</span>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
