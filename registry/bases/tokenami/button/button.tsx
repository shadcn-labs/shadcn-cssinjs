"use client";

import { useRender } from "@base-ui/react";
import type { TokenamiStyle, Variants } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const button = css.compose({
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
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property":
    "var(---, color, background-color, box-shadow, border-color)",
  "--white-space": "nowrap",

  variants: {
    size: {
      default: { "--height": 9, "--padding-inline": 4 },
      icon: { "--height": 9, "--padding-inline": 0, "--width": 9 },
      "icon-lg": { "--height": 10, "--padding-inline": 0, "--width": 10 },
      "icon-sm": { "--height": 8, "--padding-inline": 0, "--width": 8 },
      lg: { "--height": 10, "--padding-inline": 8 },
      sm: { "--height": 8, "--padding-inline": 3 },
    },
    variant: {
      default: {
        "--background-color": "var(--color_primary)",
        "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        "--color": "var(--color_primary-foreground)",
        "--hover_background-color":
          "var(---, color-mix(in oklab, var(--color_primary) 90%, transparent))",
      },
      destructive: {
        "--background-color": "var(--color_destructive)",
        "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        "--color": "var(--color_primary-foreground)",
        "--hover_background-color":
          "var(---, color-mix(in oklab, var(--color_destructive) 90%, transparent))",
      },
      ghost: {
        "--background-color": "var(--color_transparent)",
        "--color": "var(--color_foreground)",
        "--hover_background-color": "var(--color_accent)",
        "--hover_color": "var(--color_accent-foreground)",
      },
      link: {
        "--background-color": "var(--color_transparent)",
        "--color": "var(--color_primary)",
        "--hover_text-decoration-line": "underline",
        "--text-underline-offset": "var(---, 4px)",
      },
      outline: {
        "--background-color": "var(--color_background)",
        "--border-color": "var(--color_border)",
        "--border-style": "solid",
        "--border-width": 1,
        "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        "--color": "var(--color_foreground)",
        "--hover_background-color": "var(--color_accent)",
        "--hover_color": "var(--color_accent-foreground)",
      },
      secondary: {
        "--background-color": "var(--color_secondary)",
        "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        "--color": "var(--color_secondary-foreground)",
        "--hover_background-color":
          "var(---, color-mix(in oklab, var(--color_secondary) 80%, transparent))",
      },
    },
  },
});

type ButtonVariants = Variants<typeof button>;

export interface ButtonProps
  extends TokenamiStyle<React.ComponentProps<"button">>, ButtonVariants {
  /** Render as a different element (Base UI render API). */
  render?: useRender.RenderProp;
}

const Button = ({
  className,
  style,
  variant = "default",
  size = "default",
  render,
  ...props
}: ButtonProps) => {
  const [cn, sx] = button({ size, variant });
  return useRender({
    props: {
      className: cn(className),
      "data-size": size,
      "data-slot": "button",
      "data-variant": variant,
      style: sx(style),
      ...props,
    },
    render: render ?? <button type="button" />,
  });
};

export { Button };
