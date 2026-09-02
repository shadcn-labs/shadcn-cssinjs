"use client";

import { ChevronDownIcon, DotIcon } from "lucide-react";
import Link from "next/link";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/stylex/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/stylex/ui/dropdown-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      breadcrumb: "مسار التنقل",
      components: "المكونات",
      documentation: "التوثيق",
      github: "جيت هاب",
      home: "الرئيسية",
      themes: "السمات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      breadcrumb: "Breadcrumb",
      components: "Components",
      documentation: "Documentation",
      github: "GitHub",
      home: "Home",
      themes: "Themes",
    },
  },
  he: {
    dir: "rtl",
    values: {
      breadcrumb: "פירורי לחם",
      components: "רכיבים",
      documentation: "תיעוד",
      github: "גיטהאב",
      home: "בית",
      themes: "ערכות נושא",
    },
  },
};

export default function BreadcrumbRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <Breadcrumb dir={dir}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>{t.home}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<button className="flex items-center gap-1" />}
            >
              {t.components}
              <ChevronDownIcon data-icon="inline-end" className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={dir === "rtl" ? "end" : "start"}
              data-lang={dir === "rtl" ? language : undefined}
              dir={dir}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>{t.documentation}</DropdownMenuItem>
                <DropdownMenuItem>{t.themes}</DropdownMenuItem>
                <DropdownMenuItem>{t.github}</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{t.breadcrumb}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
