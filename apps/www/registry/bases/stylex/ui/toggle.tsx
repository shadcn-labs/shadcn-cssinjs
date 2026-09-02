"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  base: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: {
      ":hover": colors.muted,
      default: "transparent",
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: "transparent",
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: {
      ":hover": colors.foreground,
      default: "inherit",
    },
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
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
    transitionDuration: "150ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
  },
  default: {
    backgroundColor: {
      ":hover": colors.muted,
      default: "transparent",
    },
  },
  invalid: {
    borderColor: colors.destructive,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      default: null,
    },
  },
  outline: {
    backgroundColor: {
      ":hover": colors.muted,
      default: "transparent",
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
  },
  pressed: {
    ":is(svg)": {
      fill: colors.foreground,
    },
    backgroundColor: colors.muted,
    color: colors.foreground,
  },
  sizeDefault: {
    height: "2rem",
    minWidth: "2rem",
    paddingInline: "0.625rem",
  },
  sizeLg: {
    height: "2.25rem",
    minWidth: "2.25rem",
    paddingInline: "0.625rem",
  },
  sizeSm: {
    ":is(svg)": {
      height: "0.875rem",
      width: "0.875rem",
    },
    borderRadius: `min(${radius.md}, 12px)`,
    fontSize: "0.8rem",
    height: "1.75rem",
    minWidth: "1.75rem",
    paddingInline: "0.625rem",
  },
});

export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";

const variantStyles: Record<ToggleVariant, StyleXStyles> = {
  default: styles.default,
  outline: styles.outline,
};

const sizeStyles: Record<ToggleSize, StyleXStyles> = {
  default: styles.sizeDefault,
  lg: styles.sizeLg,
  sm: styles.sizeSm,
};

const toggleVariants = (options?: {
  variant?: ToggleVariant;
  size?: ToggleSize;
  className?: string;
  style?: StyleXStyles;
}) => {
  const variant = options?.variant ?? "default";
  const size = options?.size ?? "default";

  return stylex.props(
    styles.base,
    variantStyles[variant],
    sizeStyles[size],
    customClassName(options?.className),
    options?.style
  );
};

export type ToggleProps = Omit<TogglePrimitive.Props, "style"> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
  className?: string;
  style?: StyleXStyles;
};

const Toggle = ({
  className,
  variant = "default",
  size = "default",
  style,
  "aria-invalid": ariaInvalid,
  ...props
}: ToggleProps) => (
  <TogglePrimitive
    data-slot="toggle"
    data-variant={variant}
    data-size={size}
    aria-invalid={ariaInvalid}
    className={(state) =>
      stylex.props(
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        state.pressed && styles.pressed,
        ariaInvalid && styles.invalid,
        customClassName(className),
        style
      ).className
    }
    {...props}
  />
);

export { Toggle, toggleVariants, styles as toggleStyles };
