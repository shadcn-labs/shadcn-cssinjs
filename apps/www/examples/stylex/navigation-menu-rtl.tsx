"use client";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/bases/stylex/ui/navigation-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      alertDialog: "حوار التنبيه",
      alertDialogDesc: "حوار نافذة يقطع المستخدم بمحتوى مهم ويتوقع استجابة.",
      backlog: "قائمة الانتظار",
      components: "المكونات",
      docs: "الوثائق",
      done: "منجز",
      gettingStarted: "البدء",
      hoverCard: "بطاقة التحويم",
      hoverCardDesc: "للمستخدمين المبصرين لمعاينة المحتوى المتاح خلف الرابط.",
      installation: "التثبيت",
      installationDesc: "كيفية تثبيت التبعيات وتنظيم تطبيقك.",
      introduction: "مقدمة",
      introductionDesc:
        "مكونات قابلة لإعادة الاستخدام مبنية باستخدام Tailwind CSS.",
      progress: "التقدم",
      progressDesc:
        "يعرض مؤشرًا يوضح تقدم إتمام المهمة، عادةً يتم عرضه كشريط تقدم.",
      scrollArea: "منطقة التمرير",
      scrollAreaDesc: "يفصل المحتوى بصريًا أو دلاليًا.",
      tabs: "التبويبات",
      tabsDesc:
        "مجموعة من أقسام المحتوى المتعددة الطبقات—المعروفة بألواح التبويب—التي يتم عرضها واحدة في كل مرة.",
      toDo: "المهام",
      tooltip: "تلميح",
      tooltipDesc:
        "نافذة منبثقة تعرض معلومات متعلقة بعنصر عندما يتلقى العنصر التركيز على لوحة المفاتيح أو عند تحويم الماوس فوقه.",
      typography: "الطباعة",
      typographyDesc: "أنماط للعناوين والفقرات والقوائم...إلخ",
      withIcon: "مع أيقونة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      alertDialog: "Alert Dialog",
      alertDialogDesc:
        "A modal dialog that interrupts the user with important content and expects a response.",
      backlog: "Backlog",
      components: "Components",
      docs: "Docs",
      done: "Done",
      gettingStarted: "Getting started",
      hoverCard: "Hover Card",
      hoverCardDesc:
        "For sighted users to preview content available behind a link.",
      installation: "Installation",
      installationDesc: "How to install dependencies and structure your app.",
      introduction: "Introduction",
      introductionDesc: "Re-usable components built with Tailwind CSS.",
      progress: "Progress",
      progressDesc:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      scrollArea: "Scroll-area",
      scrollAreaDesc: "Visually or semantically separates content.",
      tabs: "Tabs",
      tabsDesc:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      toDo: "To Do",
      tooltip: "Tooltip",
      tooltipDesc:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      typography: "Typography",
      typographyDesc: "Styles for headings, paragraphs, lists...etc",
      withIcon: "With Icon",
    },
  },
  he: {
    dir: "rtl",
    values: {
      alertDialog: "דיאלוג התראה",
      alertDialogDesc: "דיאלוג מודאלי שמפריע למשתמש עם תוכן חשוב ומצפה לתגובה.",
      backlog: "רשימת המתנה",
      components: "רכיבים",
      docs: "תיעוד",
      done: "הושלם",
      gettingStarted: "התחלה",
      hoverCard: "כרטיס ריחוף",
      hoverCardDesc:
        "למשתמשים רואים כדי להציג תצוגה מקדימה של תוכן זמין מאחורי קישור.",
      installation: "התקנה",
      installationDesc: "כיצד להתקין תלויות ולבנות את האפליקציה שלך.",
      introduction: "הקדמה",
      introductionDesc: "רכיבים לשימוש חוזר שנבנו עם Tailwind CSS.",
      progress: "התקדמות",
      progressDesc:
        "מציג אינדיקטור המציג את התקדמות ההשלמה של משימה, בדרך כלל מוצג כסרגל התקדמות.",
      scrollArea: "אזור גלילה",
      scrollAreaDesc: "מפריד תוכן חזותית או סמנטית.",
      tabs: "כרטיסיות",
      tabsDesc:
        "קבוצה של חלקי תוכן מרובדים—המכונים לוחות כרטיסיות—המוצגים אחד בכל פעם.",
      toDo: "לעשות",
      tooltip: "טולטיפ",
      tooltipDesc:
        "חלון קופץ המציג מידע הקשור לאלמנט כאשר האלמנט מקבל מיקוד מקלדת או כאשר העכבר מרחף מעליו.",
      typography: "טיפוגרפיה",
      typographyDesc: "סגנונות לכותרות, פסקאות, רשימות...וכו'",
      withIcon: "עם אייקון",
    },
  },
};

const components = [
  {
    descriptionKey: "alertDialogDesc" as const,
    href: "/docs/primitives/alert-dialog",
    titleKey: "alertDialog" as const,
  },
  {
    descriptionKey: "hoverCardDesc" as const,
    href: "/docs/primitives/hover-card",
    titleKey: "hoverCard" as const,
  },
  {
    descriptionKey: "progressDesc" as const,
    href: "/docs/primitives/progress",
    titleKey: "progress" as const,
  },
  {
    descriptionKey: "scrollAreaDesc" as const,
    href: "/docs/primitives/scroll-area",
    titleKey: "scrollArea" as const,
  },
  {
    descriptionKey: "tabsDesc" as const,
    href: "/docs/primitives/tabs",
    titleKey: "tabs" as const,
  },
  {
    descriptionKey: "tooltipDesc" as const,
    href: "/docs/primitives/tooltip",
    titleKey: "tooltip" as const,
  },
] as const;

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => (
  <li {...props}>
    <NavigationMenuLink render={<Link href={href} />}>
      <div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div>
    </NavigationMenuLink>
  </li>
);

const NavigationMenuRtl = () => {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <NavigationMenu dir={dir}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="w-96">
              <ListItem href="/docs" title={t.introduction}>
                {t.introductionDesc}
              </ListItem>
              <ListItem href="/docs/installation" title={t.installation}>
                {t.installationDesc}
              </ListItem>
              <ListItem href="/docs/primitives/typography" title={t.typography}>
                {t.typographyDesc}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>{t.components}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.titleKey}
                  title={t[component.titleKey]}
                  href={component.href}
                >
                  {t[component.descriptionKey]}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.withIcon}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleAlertIcon />
                  {t.backlog}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleDashedIcon />
                  {t.toDo}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleCheckIcon />
                  {t.done}
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs" />}
            className="flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            data-lang={dir === "rtl" ? language : undefined}
          >
            {t.docs}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuRtl;
