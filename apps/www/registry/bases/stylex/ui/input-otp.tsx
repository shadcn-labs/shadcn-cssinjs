"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const caretBlink = stylex.keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0 },
});

const styles = stylex.create({
  caret: {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationName: caretBlink,
    backgroundColor: colors.foreground,
    height: "1rem",
    width: "1px",
  },
  caretContainer: {
    alignItems: "center",
    display: "flex",
    inset: 0,
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
  },
  container: {
    alignItems: "center",
    display: "flex",
  },
  containerDisabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  group: {
    alignItems: "center",
    borderRadius: radius.md,
    display: "flex",
  },
  groupInvalid: {
    borderColor: colors.destructive,
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
  },
  input: {
    cursor: {
      ":disabled": "not-allowed",
      default: "auto",
    },
  },
  separator: {
    alignItems: "center",
    display: "flex",
  },
  separatorIcon: {
    height: "1rem",
    width: "1rem",
  },
  slot: {
    alignItems: "center",
    borderBottomLeftRadius: {
      ":first-child": radius.md,
      default: null,
    },
    borderBottomRightRadius: {
      ":last-child": radius.md,
      default: null,
    },
    borderBottomWidth: "1px",
    borderColor: colors.input,
    borderLeftWidth: {
      ":first-child": "1px",
      default: "0px",
    },
    borderRightWidth: "1px",
    borderStyle: "solid",
    borderTopLeftRadius: {
      ":first-child": radius.md,
      default: null,
    },
    borderTopRightRadius: {
      ":last-child": radius.md,
      default: null,
    },
    borderTopWidth: "1px",
    display: "flex",
    fontSize: "0.875rem",
    height: "2rem",
    justifyContent: "center",
    lineHeight: "1.25rem",
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "all",
    width: "2rem",
  },
  slotActive: {
    borderColor: colors.ring,
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    zIndex: 10,
  },
  slotActiveInvalid: {
    borderColor: colors.destructive,
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
    zIndex: 10,
  },
  slotInvalid: {
    borderColor: colors.destructive,
  },
});

export type InputOTPProps = Omit<
  React.ComponentProps<typeof OTPInput>,
  "style" | "render"
> & {
  containerClassName?: string;
  containerStyle?: StyleXStyles;
  style?: StyleXStyles;
  children: React.ReactNode;
};

const InputOTP = ({
  className,
  containerClassName,
  containerStyle,
  style,
  children,
  ...props
}: InputOTPProps) => {
  const containerProps = stylex.props(
    styles.container,
    props.disabled && styles.containerDisabled,
    customClassName(containerClassName),
    containerStyle
  );
  const inputStyleProps = stylex.props(
    styles.input,
    customClassName(className),
    style
  );

  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={containerProps.className}
      spellCheck={false}
      className={inputStyleProps.className}
      style={inputStyleProps.style}
      {...props}
    >
      {children}
    </OTPInput>
  );
};

export type InputOTPGroupProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const InputOTPGroup = ({ className, style, ...props }: InputOTPGroupProps) => {
  const isInvalid = props["aria-invalid"] && props["aria-invalid"] !== "false";

  return (
    <div
      data-slot="input-otp-group"
      {...props}
      {...stylex.props(
        styles.group,
        isInvalid && styles.groupInvalid,
        customClassName(className),
        style
      )}
    />
  );
};

export type InputOTPSlotProps = Omit<React.ComponentProps<"div">, "style"> & {
  index: number;
  style?: StyleXStyles;
};

const InputOTPSlot = ({
  index,
  className,
  style,
  ...props
}: InputOTPSlotProps) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const isInvalid = props["aria-invalid"] && props["aria-invalid"] !== "false";

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      {...props}
      {...stylex.props(
        styles.slot,
        isActive && !isInvalid && styles.slotActive,
        !isActive && isInvalid && styles.slotInvalid,
        isActive && isInvalid && styles.slotActiveInvalid,
        customClassName(className),
        style
      )}
    >
      {char}
      {hasFakeCaret && (
        <div {...stylex.props(styles.caretContainer)}>
          <div {...stylex.props(styles.caret)} />
        </div>
      )}
    </div>
  );
};

export type InputOTPSeparatorProps = Omit<
  React.ComponentProps<"div">,
  "style"
> & {
  style?: StyleXStyles;
};

const InputOTPSeparator = ({
  className,
  style,
  children,
  ...props
}: InputOTPSeparatorProps) => (
  <div
    data-slot="input-otp-separator"
    role="separator"
    {...props}
    {...stylex.props(styles.separator, customClassName(className), style)}
  >
    {children ?? <MinusIcon {...stylex.props(styles.separatorIcon)} />}
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
