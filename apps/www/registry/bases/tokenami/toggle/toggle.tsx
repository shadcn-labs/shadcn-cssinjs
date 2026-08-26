"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import type { TokenamiStyle, Variants } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const toggle = css.compose({
  "--align-items": "center",
  "--border-radius": "var(--radii_md)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--disabled_pointer-events": "none",
  "--display": "inline-flex",
  "--flex-shrink": 0,
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--justify-content": "center",
  "--outline-style": "none",
  "--pressed_background-color": "var(--color_accent)",
  "--pressed_color": "var(--color_accent-foreground)",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, background-color, box-shadow)",
  "--transition-timing-function": "ease-in-out",
  "--white-space": "nowrap",

  variants: {
    size: {
      default: { "--height": 9, "--min-width": 9, "--padding-inline": 2 },
      lg: {
        "--height": 10,
        "--min-width": 10,
        "--padding-inline": 2.5,
      },
      sm: { "--height": 8, "--min-width": 8, "--padding-inline": 1.5 },
    },
    variant: {
      default: {
        "--background-color": "var(--color_transparent)",
        "--color": "var(--color_foreground)",
        "--hover_background-color": "var(--color_muted)",
        "--hover_color": "var(--color_muted-foreground)",
      },
      outline: {
        "--background-color": "var(--color_transparent)",
        "--border-color": "var(--color_border)",
        "--border-style": "solid",
        "--border-width": "var(---, 1px)",
        "--color": "var(--color_foreground)",
        "--hover_background-color": "var(--color_accent)",
        "--hover_color": "var(--color_accent-foreground)",
      },
    },
  },
});

type ToggleVariants = Variants<typeof toggle>;

const Toggle = ({
  variant = "default",
  size = "default",
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TogglePrimitive>, "className" | "style">
> &
  ToggleVariants & { className?: string }) => {
  const [cn, sx] = toggle({ size, variant });
  return (
    <TogglePrimitive
      className={cn(className)}
      data-size={size}
      data-slot="toggle"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

export { Toggle, toggle as toggleStyles };
