import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const kbd = css.compose({
  "--align-items": "center",
  "--background-color":
    "var(---, color-mix(in oklab, currentColor 5%, transparent))",
  "--border-radius": "var(--radii_sm)",
  "--box-shadow":
    "var(---, inset 0 -1px 2px 0 color-mix(in oklab, currentColor 10%, transparent))",
  "--color": "var(--color_muted-foreground)",
  "--display": "inline-flex",
  "--font-family": "var(---, var(--font-sans))",
  "--font-size": "0.75rem",
  "--font-weight": 400,
  "--gap": 1,
  "--height": "var(---, 1.25rem)",
  "--justify-content": "center",
  "--line-height": "var(---, 1rem)",
  "--min-width": "var(---, 1.25rem)",
  "--padding-inline": 1,
  "--pointer-events": "none",
  "--user-select": "none",
  "--width": "var(---, fit-content)",
});

const kbdGroup = css.compose({
  "--align-items": "center",
  "--display": "inline-flex",
  "--gap": 1,
});

const Kbd = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"kbd">>) => {
  const [cn, sx] = kbd();
  return (
    <kbd
      className={cn(className)}
      data-slot="kbd"
      style={sx(style)}
      {...props}
    />
  );
};

const KbdGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = kbdGroup();
  return (
    <div
      className={cn(className)}
      data-slot="kbd-group"
      style={sx(style)}
      {...props}
    />
  );
};

export { Kbd, KbdGroup };
