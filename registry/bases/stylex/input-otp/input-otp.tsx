"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import { MinusIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./input-otp.stylex";

const InputOTP = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Root>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.root);
  return (
    <OtpField.Root
      className={cx(p.className, className)}
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
  const p = x(styles.group);
  return (
    <div
      className={cx(p.className, className)}
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
  const p = x(styles.slot);
  return (
    <OtpField.Input
      className={cx(p.className, className)}
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
  const p = x(styles.separator);
  return (
    <div
      className={cx(p.className, className)}
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
