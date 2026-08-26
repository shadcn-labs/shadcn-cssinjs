"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import type { TokenamiStyle } from "@tokenami/css";
import { createContext, useContext } from "react";

import { css } from "@/lib/tokenami";

type ToggleGroupVariant = "default" | "outline";
type ToggleGroupSize = "default" | "sm" | "lg";

const ToggleGroupContext = createContext<{
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
}>({ size: "default", variant: "default" });

const group = css.compose({
  "--align-items": "center",
  "--display": "inline-flex",
  "--gap": 1,
  "--width": "var(---, fit-content)",

  variants: {
    variant: {
      default: {
        "--background-color": "var(--color_muted)",
        "--border-radius": "var(--radii_md)",
        "--padding": 1,
      },
      outline: {},
    },
  },
});

const outlineLook = {
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--pressed_background-color": "var(--color_accent)",
  "--pressed_color": "var(--color_accent-foreground)",
} as const;

const item = css.compose({
  "--align-items": "center",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--display": "inline-flex",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 1.5,
  "--justify-content": "center",
  "--outline-style": "none",

  variants: {
    // Default ignores size (fixed); outline is size-responsive.
    look: {
      default: {
        "--background-color": "var(--color_transparent)",
        "--border-radius": "var(--radii_sm)",
        "--border-width": "var(---, 0)",
        "--height": 7,
        "--hover_background-color": "var(--color_background)",
        "--min-width": 7,
        "--padding-inline": 2.5,
        "--pressed_background-color": "var(--color_background)",
        "--pressed_box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
      },
      "outline-default": {
        ...outlineLook,
        "--height": 9,
        "--min-width": 9,
        "--padding-inline": 2,
      },
      "outline-lg": {
        ...outlineLook,
        "--height": 10,
        "--min-width": 10,
        "--padding-inline": 2.5,
      },
      "outline-sm": {
        ...outlineLook,
        "--height": 8,
        "--min-width": 8,
        "--padding-inline": 1.5,
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
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof ToggleGroupPrimitive>, "className" | "style">
> & {
  className?: string;
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  spacing?: number;
}) => {
  const [cn, sx] = group({ variant });
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleGroupPrimitive
        className={cn(className)}
        data-slot="toggle-group"
        data-variant={variant}
        orientation={orientation}
        style={sx(
          {
            "--flex-direction": orientation === "vertical" ? "column" : "row",
          },
          spacing === undefined ? undefined : { "--gap": spacing },
          style
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
};

const ToggleGroupItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TogglePrimitive>, "className" | "style">
> & { className?: string }) => {
  const { variant, size } = useContext(ToggleGroupContext);
  const look = variant === "outline" ? (`outline-${size}` as const) : "default";
  const [cn, sx] = item({ look });
  return (
    <TogglePrimitive
      className={cn(className)}
      data-slot="toggle-group-item"
      style={sx(style)}
      {...props}
    />
  );
};

export { ToggleGroup, ToggleGroupItem };
