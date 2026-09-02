"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  ariaInvalid: {
    borderColor: colors.destructive,
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
  },
  root: {
    "::placeholder": {
      color: colors.mutedForeground,
    },
    backgroundColor: {
      ":disabled": `color-mix(in oklab, ${colors.input} 50%, transparent)`,
      default: "transparent",
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "none",
    },
    color: colors.foreground,
    cursor: {
      ":disabled": "not-allowed",
      default: "auto",
    },
    display: "flex",
    fieldSizing: "content",
    fontSize: {
      "@media (min-width: 768px)": "0.875rem",
      default: "1rem",
    },
    lineHeight: {
      "@media (min-width: 768px)": "1.25rem",
      default: "1.5rem",
    },
    minHeight: "4rem",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    paddingBlock: "0.5rem",
    paddingInline: "0.625rem",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    transitionTimingFunction: "ease-in-out",
    width: "100%",
  },
});

export type TextareaProps = Omit<React.ComponentProps<"textarea">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Textarea = ({
  className,
  style,
  "aria-invalid": ariaInvalid,
  ...props
}: TextareaProps) => {
  const isInvalid = ariaInvalid === true || ariaInvalid === "true";

  return (
    <textarea
      data-slot="textarea"
      aria-invalid={ariaInvalid}
      {...stylex.props(
        styles.root,
        isInvalid && styles.ariaInvalid,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

export { Textarea };
