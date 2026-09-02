"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  badgeBase: {
    ":is(svg)": {
      flexShrink: 0,
      height: "0.75rem",
      pointerEvents: "none",
      width: "0.75rem",
    },
    alignItems: "center",
    borderColor: {
      ":focus-visible": colors.ring,
      default: null,
    },
    borderRadius: radius.full,
    borderStyle: "none",
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: "inherit",
    fontSize: "0.75rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "1.25rem",
    justifyContent: "center",
    lineHeight: "1rem",
    outline: "none",
    overflow: "hidden",
    paddingBlock: 0,
    paddingInline: "0.5rem",
    transitionDuration: "150ms",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
  variantDefault: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
  },
  variantDestructive: {
    backgroundColor: `color-mix(in oklab, ${colors.destructive} 10%, transparent)`,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      default: null,
    },
    color: colors.destructive,
  },
  variantGhost: {
    backgroundColor: {
      ":hover": colors.muted,
      default: "transparent",
    },
    color: {
      ":hover": colors.mutedForeground,
      default: "inherit",
    },
  },
  variantLink: {
    backgroundColor: "transparent",
    color: colors.primary,
    textDecorationLine: {
      ":hover": "underline",
      default: "none",
    },
    textUnderlineOffset: "4px",
  },
  variantOutline: {
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: "1px",
    color: colors.foreground,
  },
  variantSecondary: {
    backgroundColor: colors.secondary,
    color: colors.secondaryForeground,
  },
});

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

const variantStyles: Record<BadgeVariant, StyleXStyles> = {
  default: styles.variantDefault,
  destructive: styles.variantDestructive,
  ghost: styles.variantGhost,
  link: styles.variantLink,
  outline: styles.variantOutline,
  secondary: styles.variantSecondary,
};

export type BadgeProps = Omit<useRender.ComponentProps<"span">, "style"> & {
  variant?: BadgeVariant;
  className?: string;
  style?: StyleXStyles;
};

const Badge = ({
  className,
  variant = "default",
  render,
  style,
  ...props
}: BadgeProps) => {
  const styleProps = stylex.props(
    styles.badgeBase,
    variantStyles[variant],
    customClassName(className),
    style as StyleXStyles
  );

  return useRender({
    defaultTagName: "span",
    props: mergeProps(
      {
        className: styleProps.className,
        "data-slot": "badge",
        "data-variant": variant,
        style: styleProps.style,
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
};

export { Badge, styles as badgeStyles };
