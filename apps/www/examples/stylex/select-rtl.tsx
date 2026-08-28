"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      apple: "تفاح",
      banana: "موز",
      blueberry: "توت أزرق",
      broccoli: "بروكلي",
      carrot: "جزر",
      fruits: "الفواكه",
      grapes: "عنب",
      pineapple: "أناناس",
      selectFruit: "اختر فاكهة",
      spinach: "سبانخ",
      vegetables: "الخضروات",
    },
  },
  en: {
    dir: "ltr",
    values: {
      apple: "Apple",
      banana: "Banana",
      blueberry: "Blueberry",
      broccoli: "Broccoli",
      carrot: "Carrot",
      fruits: "Fruits",
      grapes: "Grapes",
      pineapple: "Pineapple",
      selectFruit: "Select a fruit",
      spinach: "Spinach",
      vegetables: "Vegetables",
    },
  },
  he: {
    dir: "rtl",
    values: {
      apple: "תפוח",
      banana: "בננה",
      blueberry: "אוכמניה",
      broccoli: "ברוקולי",
      carrot: "גזר",
      fruits: "פירות",
      grapes: "ענבים",
      pineapple: "אננס",
      selectFruit: "בחר פרי",
      spinach: "תרד",
      vegetables: "ירקות",
    },
  },
};

export default function SelectRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [selectedFruit, setSelectedFruit] = React.useState<string | null>(null);

  const fruits = [
    { label: t.apple, value: "apple" },
    { label: t.banana, value: "banana" },
    { label: t.blueberry, value: "blueberry" },
    { label: t.grapes, value: "grapes" },
    { label: t.pineapple, value: "pineapple" },
  ];

  const vegetables = [
    { label: t.carrot, value: "carrot" },
    { label: t.broccoli, value: "broccoli" },
    { label: t.spinach, value: "spinach" },
  ];

  const allItems = [
    { label: t.selectFruit, value: null },
    ...fruits,
    ...vegetables,
  ];

  return (
    <Select
      items={allItems}
      value={selectedFruit}
      onValueChange={(value) => setSelectedFruit(value as string | null)}
    >
      <SelectTrigger className="w-32" dir={dir}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent dir={dir} data-lang={dir === "rtl" ? language : undefined}>
        <SelectGroup>
          <SelectLabel>{t.fruits}</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>{t.vegetables}</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
