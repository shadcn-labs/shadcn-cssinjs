import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/stylex/ui/input-otp";

export default function InputOTPFourDigits() {
  return (
    <InputOTP length={4}>
      <InputOTPGroup>
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
        <InputOTPSlot />
      </InputOTPGroup>
    </InputOTP>
  );
}
