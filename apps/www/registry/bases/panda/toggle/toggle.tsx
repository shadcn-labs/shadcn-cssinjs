"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

const toggle = cva({
  base: {
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
      pointerEvents: "none",
    },
    _focusVisible: {
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    _pressed: {
      backgroundColor: "accent",
      color: "accent.foreground",
    },
    alignItems: "center",
    borderRadius: "md",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: "0",
    fontSize: "0.875rem",
    fontWeight: "medium",
    gap: "2",
    justifyContent: "center",
    outlineStyle: "none",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, box-shadow",
    transitionTimingFunction: "ease-in-out",
    whiteSpace: "nowrap",
  },
  defaultVariants: { size: "default", variant: "default" },
  variants: {
    size: {
      default: { height: "9", minWidth: "9", paddingInline: "2" },
      lg: { height: "10", minWidth: "10", paddingInline: "2.5" },
      sm: { height: "8", minWidth: "8", paddingInline: "1.5" },
    },
    variant: {
      default: {
        _hover: {
          backgroundColor: "muted",
          color: "muted.foreground",
        },
        backgroundColor: "transparent",
        color: "foreground",
      },
      outline: {
        _hover: {
          backgroundColor: "accent",
          color: "accent.foreground",
        },
        backgroundColor: "transparent",
        borderColor: "border",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "foreground",
      },
    },
  },
});

type ToggleVariants = NonNullable<RecipeVariantProps<typeof toggle>>;

const Toggle = ({
  variant = "default",
  size = "default",
  className,
  ...props
}: Omit<React.ComponentProps<typeof TogglePrimitive>, "className"> &
  ToggleVariants & { className?: string }) => (
  <TogglePrimitive
    className={cx(toggle({ size, variant }), className)}
    data-size={size}
    data-slot="toggle"
    data-variant={variant}
    {...props}
  />
);

export { Toggle, toggle as toggleStyles };
