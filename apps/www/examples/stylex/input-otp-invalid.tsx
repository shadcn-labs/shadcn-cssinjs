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
      length={6}
      value={value}
      onValueChange={(nextValue) => setValue(nextValue)}
    >
      <InputOTPGroup>
        <InputOTPSlot aria-invalid />
        <InputOTPSlot aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot aria-invalid />
        <InputOTPSlot aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot aria-invalid />
        <InputOTPSlot aria-invalid />
      </InputOTPGroup>
    </InputOTP>
  );
}
