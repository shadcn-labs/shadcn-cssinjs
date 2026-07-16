"use client";

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
  ar: { dir: "rtl", values: {} },
  en: { dir: "ltr", values: {} },
  he: { dir: "rtl", values: {} },
};

export default function PaginationRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <Pagination dir={dir}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#prev" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
