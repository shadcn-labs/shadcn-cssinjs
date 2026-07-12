"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import * as stylex from "@stylexjs/stylex";
import { MinusIcon } from "lucide-react";

import { styles } from "./input-otp.stylex";

const InputOTP = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Root>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.root);
  return (
    <OtpField.Root
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="input-otp"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputOTPGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.group);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="input-otp-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputOTPSlot = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Input>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.slot);
  return (
    <OtpField.Input
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="input-otp-slot"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputOTPSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.separator);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="input-otp-separator"
      role="separator"
      style={{ ...p.style, ...style }}
      {...props}
    >
      <MinusIcon size={16} />
    </div>
  );
};

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
