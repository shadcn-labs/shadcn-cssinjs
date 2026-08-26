import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const textarea = css.compose({
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
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
  "--min-height": 16,
  "--outline-style": "none",
  "--padding-block": 2,
  "--padding-inline": 3,
  "--placeholder_color": "var(--color_muted-foreground)",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow, border-color)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
});

const Textarea = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"textarea">>) => {
  const [cn, sx] = textarea();
  return (
    <textarea
      className={cn(className)}
      data-slot="textarea"
      style={sx(style)}
      {...props}
    />
  );
};

export { Textarea };
