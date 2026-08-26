import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const input = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--color": "var(--color_foreground)",
  "--cursor": "auto",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--display": "flex",
  "--file-selector-button_background-color": "var(--color_transparent)",
  "--file-selector-button_border-width": "var(---, 0)",
  "--file-selector-button_color": "var(--color_foreground)",
  "--file-selector-button_font-size": "0.875rem",
  "--file-selector-button_font-weight": 500,
  "--file-selector-button_margin-inline-end": 2,
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--height": 9,
  "--line-height": "var(---, 1.25rem)",
  "--min-width": "var(---, 0)",
  "--outline-style": "none",
  "--padding-block": 1,
  "--padding-inline": 3,
  "--placeholder_color": "var(--color_muted-foreground)",
  "--selection_background-color": "var(--color_primary)",
  "--selection_color": "var(--color_primary-foreground)",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow, border-color)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
});

const Input = ({
  className,
  style,
  type,
  ...props
}: TokenamiStyle<React.ComponentProps<"input">>) => {
  const [cn, sx] = input();
  return (
    <input
      className={cn(className)}
      data-slot="input"
      style={sx(style)}
      type={type}
      {...props}
    />
  );
};

export { Input };
