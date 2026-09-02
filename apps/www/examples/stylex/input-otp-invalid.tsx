"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/bases/stylex/ui/input-otp";

export default function InputOTPInvalid() {
  const [value, setValue] = React.useState("000000");

  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={(newValue: string) => setValue(newValue)}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
      </InputOTPGroup>
    </InputOTP>
  );
}
