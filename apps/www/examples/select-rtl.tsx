"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/stylex/ui/select";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      apple: "تفاحة",
      banana: "موز",
      blueberry: "توت أزرق",
      grapes: "عنب",
      label: "الفواكه",
      placeholder: "اختر فاكهة",
    },
  },
  en: {
    dir: "ltr",
    values: {
      apple: "Apple",
      banana: "Banana",
      blueberry: "Blueberry",
      grapes: "Grapes",
      label: "Fruits",
      placeholder: "Select a fruit",
    },
  },
  he: {
    dir: "rtl",
    values: {
      apple: "תפוח",
      banana: "בננה",
      blueberry: "אוכמנית",
      grapes: "ענבים",
      label: "פירות",
      placeholder: "בחר פרי",
    },
  },
};

export default function SelectRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Select>
      <SelectTrigger dir={dir} style={{ width: 200 }}>
        <SelectValue placeholder={t.placeholder} />
      </SelectTrigger>
      <SelectContent dir={dir}>
        <SelectGroup>
          <SelectLabel>{t.label}</SelectLabel>
          <SelectItem value="apple">{t.apple}</SelectItem>
          <SelectItem value="banana">{t.banana}</SelectItem>
          <SelectItem value="blueberry">{t.blueberry}</SelectItem>
          <SelectItem value="grapes">{t.grapes}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
