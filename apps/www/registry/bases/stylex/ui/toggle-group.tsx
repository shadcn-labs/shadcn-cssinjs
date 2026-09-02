"use client";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { toggleStyles } from "@/registry/bases/stylex/ui/toggle";

export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";
export type ToggleGroupOrientation = "horizontal" | "vertical";

const styles = stylex.create({
  group: {
    borderRadius: radius.md,
    display: "flex",
    width: "fit-content",
  },
  horizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  item: {
    flexShrink: 0,
    zIndex: {
      ":focus": 10,
      ":focus-visible": 10,
      default: null,
    },
  },
  sizeSm: {
    borderRadius: `min(${radius.md}, 10px)`,
  },
  vertical: {
    alignItems: "stretch",
    flexDirection: "column",
  },
});

const variantStyles: Record<ToggleVariant, StyleXStyles> = {
  default: toggleStyles.default,
  outline: toggleStyles.outline,
};

const sizeStyles: Record<ToggleSize, StyleXStyles> = {
  default: toggleStyles.sizeDefault,
  lg: toggleStyles.sizeLg,
  sm: toggleStyles.sizeSm,
};

interface ToggleGroupContextValue {
  variant?: ToggleVariant;
  size?: ToggleSize;
  spacing?: number;
  orientation?: ToggleGroupOrientation;
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  orientation: "horizontal",
  size: "default",
  spacing: 2,
  variant: "default",
});

export type ToggleGroupProps = Omit<
  ToggleGroupPrimitive.Props,
  "className" | "style"
> & {
  className?: string;
  variant?: ToggleVariant;
  size?: ToggleSize;
  spacing?: number;
  orientation?: ToggleGroupOrientation;
  style?: StyleXStyles;
};

const ToggleGroup = ({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  style,
  children,
  ...props
}: ToggleGroupProps) => {
  const styleProps = stylex.props(
    styles.group,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    size === "sm" && styles.sizeSm,
    customClassName(className),
    { gap: `calc(${spacing} * 0.25rem)` } as StyleXStyles,
    style
  );

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      orientation={orientation}
      {...styleProps}
      style={
        {
          "--gap": spacing,
          ...styleProps.style,
        } as React.CSSProperties
      }
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ orientation, size, spacing, variant }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
};

export type ToggleGroupItemProps = Omit<
  TogglePrimitive.Props,
  "className" | "style"
> & {
  className?: string | ((state: TogglePrimitive.State) => string | undefined);
  variant?: ToggleVariant;
  size?: ToggleSize;
  style?: StyleXStyles;
};

const ToggleGroupItem = ({
  className,
  children,
  variant = "default",
  size = "default",
  style,
  ...props
}: ToggleGroupItemProps) => {
  const context = React.useContext(ToggleGroupContext);
  const itemVariant = context.variant || variant;
  const itemSize = context.size || size;

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={itemVariant}
      data-size={itemSize}
      data-spacing={context.spacing}
      className={(state) =>
        stylex.props(
          toggleStyles.base,
          variantStyles[itemVariant],
          sizeStyles[itemSize],
          styles.item,
          state.pressed && toggleStyles.pressed,
          customClassName(
            typeof className === "function" ? className(state) : className
          ),
          style
        ).className
      }
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
};

export { ToggleGroup, ToggleGroupItem, styles as toggleGroupStyles };
