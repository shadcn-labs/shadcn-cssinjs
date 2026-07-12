"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./toggle.stylex";

type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

const variantStyles: Record<ToggleVariant, StyleXStyles> = {
  default: styles.default,
  outline: styles.outline,
};

const sizeStyles: Record<ToggleSize, StyleXStyles> = {
  default: styles.sizeDefault,
  lg: styles.sizeLg,
  sm: styles.sizeSm,
};

const Toggle = ({
  variant = "default",
  size = "default",
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TogglePrimitive>, "className"> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
  className?: string;
}) => (
  <TogglePrimitive
    data-slot="toggle"
    data-variant={variant}
    data-size={size}
    className={(state) =>
      [
        stylex.props(
          styles.base,
          variantStyles[variant],
          sizeStyles[size],
          state.pressed && styles.pressed
        ).className,
        className,
      ]
        .filter(Boolean)
        .join(" ") || undefined
    }
    style={style}
    {...props}
  />
);

export { Toggle };
