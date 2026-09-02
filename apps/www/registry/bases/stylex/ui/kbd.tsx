"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.25rem",
  },
  root: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    color: colors.mutedForeground,
    display: "inline-flex",
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "1.25rem",
    justifyContent: "center",
    lineHeight: "1rem",
    minWidth: "1.25rem",
    paddingInline: "0.25rem",
    pointerEvents: "none",
    userSelect: "none",
    width: "fit-content",
  },
});

export type KbdProps = Omit<React.ComponentProps<"kbd">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Kbd = ({ className, style, ...props }: KbdProps) => (
  <kbd
    data-slot="kbd"
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type KbdGroupProps = Omit<React.ComponentProps<"kbd">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const KbdGroup = ({ className, style, ...props }: KbdGroupProps) => (
  <kbd
    data-slot="kbd-group"
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Kbd, KbdGroup, styles as kbdStyles };
