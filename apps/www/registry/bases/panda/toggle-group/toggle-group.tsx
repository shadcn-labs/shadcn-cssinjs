"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { createContext, useContext } from "react";
import { cva, cx } from "styled-system/css";

type ToggleGroupVariant = "default" | "outline";
type ToggleGroupSize = "default" | "sm" | "lg";

const ToggleGroupContext = createContext<{
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
}>({ size: "default", variant: "default" });

const group = cva({
  base: {
    alignItems: "center",
    display: "inline-flex",
    gap: "1",
    width: "fit-content",
  },
  defaultVariants: { variant: "default" },
  variants: {
    variant: {
      default: {
        backgroundColor: "muted",
        borderRadius: "md",
        padding: "1",
      },
      outline: {},
    },
  },
});

const outlineLook = {
  _hover: { backgroundColor: "accent", color: "accent.foreground" },
  _pressed: { backgroundColor: "accent", color: "accent.foreground" },
  backgroundColor: "transparent",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
} as const;

const item = cva({
  base: {
    _disabled: { cursor: "not-allowed", opacity: "0.5" },
    _focusVisible: {
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    alignItems: "center",
    color: "foreground",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: "medium",
    gap: "1.5",
    justifyContent: "center",
    outlineStyle: "none",
  },
  defaultVariants: { look: "default" },
  variants: {
    look: {
      default: {
        _hover: { backgroundColor: "background" },
        _pressed: {
          backgroundColor: "background",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        },
        backgroundColor: "transparent",
        borderRadius: "sm",
        borderWidth: "0",
        height: "7",
        minWidth: "7",
        paddingInline: "2.5",
      },
      "outline-default": {
        ...outlineLook,
        height: "9",
        minWidth: "9",
        paddingInline: "2",
      },
      "outline-lg": {
        ...outlineLook,
        height: "10",
        minWidth: "10",
        paddingInline: "2.5",
      },
      "outline-sm": {
        ...outlineLook,
        height: "8",
        minWidth: "8",
        paddingInline: "1.5",
      },
    },
  },
});

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
}) => (
  <ToggleGroupContext.Provider value={{ size, variant }}>
    <ToggleGroupPrimitive
      className={cx(group({ variant }), className)}
      data-slot="toggle-group"
      data-variant={variant}
      orientation={orientation}
      style={{
        flexDirection: orientation === "vertical" ? "column" : "row",
        ...(spacing === undefined
          ? undefined
          : { gap: `calc(${spacing} * 0.25rem)` }),
        ...style,
      }}
      {...props}
    />
  </ToggleGroupContext.Provider>
);

const ToggleGroupItem = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof TogglePrimitive>, "className"> & {
  className?: string;
}) => {
  const { variant, size } = useContext(ToggleGroupContext);
  const look = variant === "outline" ? (`outline-${size}` as const) : "default";
  return (
    <TogglePrimitive
      className={cx(item({ look }), className)}
      data-slot="toggle-group-item"
      {...props}
    />
  );
};

export { ToggleGroup, ToggleGroupItem };
