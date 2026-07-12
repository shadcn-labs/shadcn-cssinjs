import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/stylex/input-otp/input-otp";

export default function InputOTPDisabled() {
  return (
    <InputOTP disabled length={6}>
      <InputOTPGroup>
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
      </InputOTPGroup>
    </InputOTP>
  );
}
