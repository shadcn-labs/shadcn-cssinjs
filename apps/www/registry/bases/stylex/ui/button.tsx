"use client";
import type { Button as ButtonPrimitive } from "@base-ui/react/button";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { create, props as stylexProps } from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = create({
  base: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundClip: "padding-box",
    borderRadius: radius.md,
    borderStyle: "none",
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "inline-flex",
    flexShrink: 0,
    fontSize: "0.875rem",
    fontWeight: 500,
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    pointerEvents: {
      ":disabled": "none",
      default: null,
    },
    transform: {
      ":active": "translateY(1px)",
      default: null,
    },
    transitionDuration: "150ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  default: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.primary} 80%, transparent)`,
      default: colors.primary,
    },
    color: colors.primaryForeground,
  },
  destructive: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":is(.dark, .dark *):hover": `color-mix(in oklab, ${colors.destructive} 30%, transparent)`,
      default: `color-mix(in oklab, ${colors.destructive} 10%, transparent)`,
    },
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":is(.dark, .dark *):focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 40%, transparent)`,
      default: null,
    },
    color: colors.destructive,
  },
  ghost: {
    backgroundColor: {
      ":hover": colors.muted,
      ":is(.dark, .dark *):hover": `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
      default: "transparent",
    },
    color: {
      ":hover": colors.foreground,
      default: "inherit",
    },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.primary,
    textDecorationLine: {
      ":hover": "underline",
      default: "none",
    },
    textUnderlineOffset: "4px",
  },
  outline: {
    backgroundColor: {
      ":hover": colors.muted,
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.input} 30%, transparent)`,
      ":is(.dark, .dark *):hover": `color-mix(in oklab, ${colors.input} 50%, transparent)`,
      default: colors.background,
    },
    borderColor: {
      ":is(.dark, .dark *)": colors.input,
      default: colors.border,
    },
    borderStyle: "solid",
    borderWidth: "1px",
    color: {
      ":hover": colors.foreground,
      default: "inherit",
    },
  },
  secondary: {
    backgroundColor: {
      ":hover": `color-mix(in oklch, ${colors.secondary}, ${colors.foreground} 5%)`,
      default: colors.secondary,
    },
    color: colors.secondaryForeground,
  },
  sizeDefault: {
    ":is(svg)": {
      height: "1rem",
      width: "1rem",
    },
    gap: "0.375rem",
    height: "2rem",
    paddingInline: "0.625rem",
  },
  sizeIcon: {
    ":is(svg)": {
      height: "1rem",
      width: "1rem",
    },
    height: "2rem",
    paddingBlock: 0,
    paddingInline: 0,
    width: "2rem",
  },
  sizeIconLg: {
    ":is(svg)": {
      height: "1.125rem",
      width: "1.125rem",
    },
    height: "2.25rem",
    paddingBlock: 0,
    paddingInline: 0,
    width: "2.25rem",
  },
  sizeIconSm: {
    ":is(svg)": {
      height: "0.875rem",
      width: "0.875rem",
    },
    borderRadius: `min(${radius.md}, 12px)`,
    height: "1.75rem",
    paddingBlock: 0,
    paddingInline: 0,
    width: "1.75rem",
  },
  sizeIconXs: {
    ":is(svg)": {
      height: "0.75rem",
      width: "0.75rem",
    },
    borderRadius: `min(${radius.md}, 10px)`,
    height: "1.5rem",
    paddingBlock: 0,
    paddingInline: 0,
    width: "1.5rem",
  },
  sizeLg: {
    ":is(svg)": {
      height: "1.125rem",
      width: "1.125rem",
    },
    gap: "0.375rem",
    height: "2.25rem",
    paddingInline: "0.625rem",
  },
  sizeSm: {
    ":is(svg)": {
      height: "1rem",
      width: "1rem",
    },
    borderRadius: `min(${radius.md}, 12px)`,
    fontSize: "0.8rem",
    gap: "0.25rem",
    height: "1.75rem",
    paddingInline: "0.625rem",
  },
  sizeXs: {
    ":is(svg)": {
      height: "0.75rem",
      width: "0.75rem",
    },
    borderRadius: `min(${radius.md}, 10px)`,
    fontSize: "0.75rem",
    gap: "0.25rem",
    height: "1.5rem",
    paddingInline: "0.5rem",
  },
});

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

const variantStyles: Record<ButtonVariant, StyleXStyles> = {
  default: styles.default,
  destructive: styles.destructive,
  ghost: styles.ghost,
  link: styles.link,
  outline: styles.outline,
  secondary: styles.secondary,
};

const sizeStyles: Record<ButtonSize, StyleXStyles> = {
  default: styles.sizeDefault,
  icon: styles.sizeIcon,
  "icon-lg": styles.sizeIconLg,
  "icon-sm": styles.sizeIconSm,
  "icon-xs": styles.sizeIconXs,
  lg: styles.sizeLg,
  sm: styles.sizeSm,
  xs: styles.sizeXs,
};

export type ButtonProps = Omit<ButtonPrimitive.Props, "style"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: StyleXStyles;
};

const Button = ({
  className,
  style,
  variant = "default",
  size = "default",
  render,
  ...restProps
}: ButtonProps) => {
  const styleProps = stylexProps(
    styles.base,
    variantStyles[variant],
    sizeStyles[size],
    customClassName(className),
    style
  );

  return useRender({
    defaultTagName: "button",
    props: mergeProps(
      {
        className: styleProps.className,
        "data-size": size,
        "data-slot": "button",
        "data-variant": variant,
        style: styleProps.style,
      },
      restProps
    ),
    render,
    state: {
      disabled: restProps.disabled ?? false,
      size,
      slot: "button" as const,
      variant,
    },
  });
};

export { Button, styles as buttonStyles };
