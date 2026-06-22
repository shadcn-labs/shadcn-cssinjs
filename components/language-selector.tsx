"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { cn } from "@/lib/utils";

export type Language = "en" | "ar" | "he";

export type Direction = "ltr" | "rtl";

export type Translations<
  T extends Record<string, string> = Record<string, string>,
> = Record<
  Language,
  {
    dir: Direction;
    locale?: string;
    values: T;
  }
>;

export const languageOptions = [
  { label: "English", value: "en" },
  { label: "Arabic (العربية)", value: "ar" },
  { label: "Hebrew (עברית)", value: "he" },
] as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
  defaultLanguage = "ar",
}: {
  children: ReactNode;
  defaultLanguage?: Language;
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);

export const useTranslation = <T extends Record<string, string>>(
  translations: Translations<T>,
  defaultLanguage: Language = "ar"
) => {
  const context = useLanguageContext();
  const [localLanguage, setLocalLanguage] = useState<Language>(defaultLanguage);

  const language = context?.language ?? localLanguage;
  const setLanguage = context?.setLanguage ?? setLocalLanguage;

  const { dir, locale, values: t } = translations[language];
  return { dir, language, locale, setLanguage, t };
};

export const LanguageSelector = ({
  value,
  onValueChange,
  className,
  languages = ["en", "ar", "he"],
}: {
  value: Language;
  onValueChange: (value: Language) => void;
  className?: string;
  languages?: Language[];
}) => (
  <NativeSelect
    className={cn("w-40", className)}
    data-name="language-selector"
    dir="ltr"
    onChange={(event) => onValueChange(event.target.value as Language)}
    size="sm"
    value={value}
  >
    {languageOptions
      .filter((option) => languages.includes(option.value as Language))
      .map((option) => (
        <NativeSelectOption key={option.value} value={option.value}>
          {option.label}
        </NativeSelectOption>
      ))}
  </NativeSelect>
);
