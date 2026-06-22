"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/bases/stylex/navigation-menu/navigation-menu";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      docs: "الوثائق",
      gettingStarted: "البدء",
      installation: "التثبيت",
      introduction: "مقدمة",
      tokens: "رموز التصميم",
    },
  },
  en: {
    dir: "ltr",
    values: {
      docs: "Docs",
      gettingStarted: "Getting started",
      installation: "Installation",
      introduction: "Introduction",
      tokens: "Design tokens",
    },
  },
  he: {
    dir: "rtl",
    values: {
      docs: "תיעוד",
      gettingStarted: "תחילת העבודה",
      installation: "התקנה",
      introduction: "מבוא",
      tokens: "אסימוני עיצוב",
    },
  },
};

export default function NavigationMenuRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <NavigationMenu dir={dir}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ display: "grid", gap: 4, width: 360 }}>
              <NavigationMenuLink href="#intro">
                {t.introduction}
              </NavigationMenuLink>
              <NavigationMenuLink href="#install">
                {t.installation}
              </NavigationMenuLink>
              <NavigationMenuLink href="#tokens">{t.tokens}</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#docs">{t.docs}</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
