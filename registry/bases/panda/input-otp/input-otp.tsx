"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import { MinusIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const root = css({
  alignItems: "center",
  display: "flex",
  gap: "2",
});

const group = css({
  backgroundColor: "border",
  borderRadius: "md",
  display: "inline-flex",
  gap: "1px",
  overflow: "hidden",
});

const slot = css({
  _focus: { boxShadow: "inset 0 0 0 2px var(--ring)" },
  backgroundColor: "background",
  borderWidth: "0",
  color: "foreground",
  fontSize: "0.875rem",
  height: "9",
  outlineStyle: "none",
  textAlign: "center",
  transitionDuration: "150ms",
  transitionProperty: "box-shadow",
  transitionTimingFunction: "ease-in-out",
  width: "9",
});

const separator = css({
  alignItems: "center",
  color: "muted.foreground",
  display: "flex",
});

const InputOTP = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Root>, "className"> & {
  className?: string;
}) => (
  <OtpField.Root
    className={cx(root, className)}
    data-slot="input-otp"
    {...props}
  />
);

const InputOTPGroup = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(group, className)}
    data-slot="input-otp-group"
    {...props}
  />
);

const InputOTPSlot = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Input>, "className"> & {
  className?: string;
}) => (
  <OtpField.Input
    className={cx(slot, className)}
    data-slot="input-otp-slot"
    {...props}
  />
);

const InputOTPSeparator = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(separator, className)}
    data-slot="input-otp-separator"
    role="separator"
    {...props}
  >
    <MinusIcon size={16} />
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
