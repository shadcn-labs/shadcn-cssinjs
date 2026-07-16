"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { MinusIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  group: {
    backgroundColor: colors.border,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "1px",
    overflow: "hidden",
  },
  root: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
  },
  separator: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
  },
  slot: {
    backgroundColor: colors.background,
    borderWidth: 0,
    boxShadow: {
      ":focus": `inset 0 0 0 2px ${colors.ring}`,
      default: null,
    },
    color: colors.foreground,
    fontSize: "0.875rem",
    height: "2.25rem",
    outline: "none",
    textAlign: "center",
    transition: "box-shadow 0.15s ease-in-out",
    width: "2.25rem",
  },
});

const InputOTP = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Root>, "className"> & {
  className?: string;
}) => (
  <OtpField.Root
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="input-otp"
    {...props}
  />
);

const InputOTPGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="input-otp-group"
    {...props}
  />
);

const InputOTPSlot = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof OtpField.Input>, "className"> & {
  className?: string;
}) => (
  <OtpField.Input
    {...stylex.props(
      styles.slot,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="input-otp-slot"
    {...props}
  />
);

const InputOTPSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="input-otp-separator"
    role="separator"
    {...props}
  >
    <MinusIcon size={16} />
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
