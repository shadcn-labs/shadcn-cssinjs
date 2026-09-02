"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  ariaInvalid: {
    borderColor: colors.destructive,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 40%, transparent)`,
      default: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
    },
  },
  icon: {
    color: colors.mutedForeground,
    height: "1rem",
    insetInlineEnd: "0.625rem",
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    userSelect: "none",
    width: "1rem",
  },
  option: {
    backgroundColor: "Canvas",
    color: "CanvasText",
  },
  select: {
    "::placeholder": {
      color: colors.mutedForeground,
    },
    "::selection": {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    },
    MozAppearance: "none",
    WebkitAppearance: "none",
    appearance: "none",
    backgroundColor: "transparent",
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    },
    boxSizing: "border-box",
    color: colors.foreground,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    fontFamily: "inherit",
    fontSize: "0.875rem",
    height: "2rem",
    lineHeight: "1.25rem",
    minWidth: 0,
    outline: "none",
    paddingBottom: 0,
    paddingInlineEnd: "2rem",
    paddingInlineStart: "0.75rem",
    paddingTop: 0,
    pointerEvents: {
      ":disabled": "none",
      default: null,
    },
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    userSelect: "none",
    width: "100%",
  },
  selectSm: {
    borderRadius: `min(${radius.md}, 10px)`,
    height: "1.75rem",
    paddingBottom: "0.125rem",
    paddingTop: "0.125rem",
  },
  wrapper: {
    opacity: {
      ":has(select:disabled)": 0.5,
      default: 1,
    },
    position: "relative",
    width: "fit-content",
  },
});

export type NativeSelectProps = Omit<
  React.ComponentProps<"select">,
  "size" | "style"
> & {
  className?: string;
  size?: "sm" | "default";
  style?: StyleXStyles;
};

const NativeSelect = ({
  className,
  size = "default",
  style,
  ...props
}: NativeSelectProps) => {
  const isInvalid =
    props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      {...stylex.props(styles.wrapper, customClassName(className), style)}
    >
      <select
        data-slot="native-select"
        data-size={size}
        {...props}
        {...stylex.props(
          styles.select,
          size === "sm" && styles.selectSm,
          isInvalid && styles.ariaInvalid
        )}
      />
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        {...stylex.props(styles.icon)}
      />
    </div>
  );
};

export type NativeSelectOptionProps = Omit<
  React.ComponentProps<"option">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NativeSelectOption = ({
  className,
  style,
  ...props
}: NativeSelectOptionProps) => (
  <option
    data-slot="native-select-option"
    {...props}
    {...stylex.props(styles.option, customClassName(className), style)}
  />
);

export type NativeSelectOptGroupProps = Omit<
  React.ComponentProps<"optgroup">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NativeSelectOptGroup = ({
  className,
  style,
  ...props
}: NativeSelectOptGroupProps) => (
  <optgroup
    data-slot="native-select-optgroup"
    {...props}
    {...stylex.props(styles.option, customClassName(className), style)}
  />
);

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
