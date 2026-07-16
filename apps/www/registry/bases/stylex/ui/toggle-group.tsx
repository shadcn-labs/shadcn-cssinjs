"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { createContext, useContext } from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { toggleStyles } from "@/registry/bases/stylex/ui/toggle";

const styles = stylex.create({
  group: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "0.25rem",
    padding: "0.25rem",
    width: "fit-content",
  },
  groupOutline: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.25rem",
    width: "fit-content",
  },
  item: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.background, default: "transparent" },
    borderRadius: radius.sm,
    borderWidth: 0,
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.375rem",
    height: "1.75rem",
    justifyContent: "center",
    minWidth: "1.75rem",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingInline: "0.625rem",
  },
  itemPressed: {
    backgroundColor: colors.background,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
});

type ToggleGroupVariant = "default" | "outline";
type ToggleGroupSize = "default" | "sm" | "lg";

const ToggleGroupContext = createContext<{
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
}>({ size: "default", variant: "default" });

const sizeStyles = {
  default: toggleStyles.sizeDefault,
  lg: toggleStyles.sizeLg,
  sm: toggleStyles.sizeSm,
};

const ToggleGroup = ({
  className,
  style,
  variant = "default",
  size = "default",
  spacing,
  orientation = "horizontal",
  ...props
}: Omit<React.ComponentProps<typeof ToggleGroupPrimitive>, "className"> & {
  className?: string;
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  spacing?: number;
}) => {
  const outline = variant === "outline";
  const gap = spacing === undefined ? undefined : `${spacing * 0.25}rem`;
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleGroupPrimitive
        {...stylex.props(
          outline ? styles.groupOutline : styles.group,
          customClassName(className),
          {
            flexDirection: orientation === "vertical" ? "column" : "row",
            ...(gap === undefined ? {} : { gap }),
          } as StyleXStyles,
          style as StyleXStyles
        )}
        data-slot="toggle-group"
        data-variant={variant}
        orientation={orientation}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
};

const ToggleGroupItem = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TogglePrimitive>, "className"> & {
  className?: string;
}) => {
  const { variant, size } = useContext(ToggleGroupContext);
  return (
    <TogglePrimitive
      className={(state) =>
        variant === "outline"
          ? stylex.props(
              toggleStyles.base,
              toggleStyles.outline,
              sizeStyles[size],
              state.pressed && toggleStyles.pressed,
              customClassName(className)
            ).className
          : stylex.props(
              styles.item,
              state.pressed && styles.itemPressed,
              customClassName(className)
            ).className
      }
      data-slot="toggle-group-item"
      style={style}
      {...props}
    />
  );
};

export { ToggleGroup, ToggleGroupItem };
