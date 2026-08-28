"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { MinusIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "flex",
  },
  root: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    opacity: { "[data-disabled]": 0.5, default: 1 },
  },
  separator: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
  },
  slot: {
    backgroundColor: "transparent",
    borderBottomLeftRadius: { ":first-child": radius.md, default: 0 },
    borderBottomRightRadius: { ":last-child": radius.md, default: 0 },
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderColor: {
      ":focus": {
        '[aria-invalid="true"]': colors.destructive,
        default: colors.ring,
      },
      '[aria-invalid="true"]': colors.destructive,
      default: colors.input,
    },
    borderLeftStyle: "solid",
    borderLeftWidth: { ":first-child": "1px", default: 0 },
    borderRightStyle: "solid",
    borderRightWidth: "1px",
    borderTopLeftRadius: { ":first-child": radius.md, default: 0 },
    borderTopRightRadius: { ":last-child": radius.md, default: 0 },
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    boxShadow: {
      ":focus": {
        '[aria-invalid="true"]': `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
        default: `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      },
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    color: colors.foreground,
    fontSize: "0.875rem",
    height: "2.25rem",
    lineHeight: "1.25rem",
    outline: "none",
    position: "relative",
    textAlign: "center",
    transition: "box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out",
    width: "2.25rem",
    zIndex: { ":focus": 10, default: "auto" },
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
