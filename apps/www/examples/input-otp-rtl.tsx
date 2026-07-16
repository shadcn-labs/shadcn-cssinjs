"use client";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/bases/stylex/ui/input-otp";

const translations: Translations = {
  ar: { dir: "rtl", values: {} },
  en: { dir: "ltr", values: {} },
  he: { dir: "rtl", values: {} },
};

export default function InputOTPRtl() {
  const { dir } = useTranslation(translations, "ar");

  return (
    <div dir={dir}>
      <InputOTP length={6}>
        <InputOTPGroup>
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
