"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { createContext, useContext } from "react";

import { cx, x } from "@/lib/utils";

import { styles as toggleStyles } from "../toggle/toggle.stylex";
import { styles } from "./toggle-group.stylex";

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
  const p = x(outline ? styles.groupOutline : styles.group);
  const gap = spacing === undefined ? undefined : `${spacing * 0.25}rem`;
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleGroupPrimitive
        className={cx(p.className, className)}
        data-slot="toggle-group"
        data-variant={variant}
        orientation={orientation}
        style={{
          ...p.style,
          flexDirection: orientation === "vertical" ? "column" : "row",
          ...(gap === undefined ? {} : { gap }),
          ...style,
        }}
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
          ? cx(
              x(
                toggleStyles.base,
                toggleStyles.outline,
                sizeStyles[size],
                state.pressed && toggleStyles.pressed
              ).className,
              className
            )
          : cx(
              x(styles.item, state.pressed && styles.itemPressed).className,
              className
            )
      }
      data-slot="toggle-group-item"
      style={style}
      {...props}
    />
  );
};

export { ToggleGroup, ToggleGroupItem };
