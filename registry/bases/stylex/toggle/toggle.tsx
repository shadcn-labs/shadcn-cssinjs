"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import type { StyleXStyles } from "@stylexjs/stylex";
import { styles } from "./toggle.stylex";

import { cx, x } from "@/lib/utils";

type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

const variantStyles: Record<ToggleVariant, StyleXStyles> = {
  default: styles.default,
  outline: styles.outline,
};

const sizeStyles: Record<ToggleSize, StyleXStyles> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  lg: styles.sizeLg,
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
      cx(
        x(
          styles.base,
          variantStyles[variant],
          sizeStyles[size],
          state.pressed && styles.pressed
        ).className,
        className
      )
    }
    style={style}
    {...props}
  />
);

export { Toggle };
