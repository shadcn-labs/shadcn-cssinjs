"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/stylex/breadcrumb/breadcrumb";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      components: "المكونات",
      current: "مسار التنقل",
      home: "الرئيسية",
    },
  },
  en: {
    dir: "ltr",
    values: { components: "Components", current: "Breadcrumb", home: "Home" },
  },
  he: {
    dir: "rtl",
    values: { components: "רכיבים", current: "פירורי לחם", home: "בית" },
  },
};

export default function BreadcrumbRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Breadcrumb dir={dir}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{t.home}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">
            {t.components}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{t.current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
