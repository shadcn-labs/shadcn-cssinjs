"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/stylex/input-otp/input-otp";

export default function InputOTPControlled() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      <InputOTP length={6} onValueChange={setValue} value={value}>
        <InputOTPGroup>
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === ""
          ? "Enter your one-time password."
          : `You entered: ${value}`}
      </div>
    </div>
  );
}
