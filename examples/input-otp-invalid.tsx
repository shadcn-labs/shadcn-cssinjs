import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/bases/stylex/input-otp/input-otp";

export default function InputOTPInvalid() {
  return (
    <InputOTP defaultValue="000000" length={6}>
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
