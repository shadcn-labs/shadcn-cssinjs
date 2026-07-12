import type { TokenamiStyle, Variants } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const badge = css.compose({
  "--align-items": "center",
  "--border-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--display": "inline-flex",
  "--flex-shrink": 0,
  "--font-size": "0.75rem",
  "--font-weight": 600,
  "--gap": 1,
  "--justify-content": "center",
  "--line-height": "var(---, 1rem)",
  "--outline-style": "none",
  "--overflow": "hidden",
  "--padding-block": "var(---, 0.125rem)",
  "--padding-inline": 2,
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow)",
  "--transition-timing-function": "ease-in-out",
  "--white-space": "nowrap",
  "--width": "var(---, fit-content)",

  variants: {
    variant: {
      default: {
        "--background-color": "var(--color_primary)",
        "--color": "var(--color_primary-foreground)",
      },
      destructive: {
        "--background-color": "var(--color_destructive)",
        "--color": "var(--color_primary-foreground)",
      },
      outline: {
        "--border-color": "var(--color_border)",
        "--color": "var(--color_foreground)",
      },
      secondary: {
        "--background-color": "var(--color_secondary)",
        "--color": "var(--color_secondary-foreground)",
      },
    },
  },
});

type BadgeVariants = Variants<typeof badge>;

const Badge = ({
  variant = "default",
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">> & BadgeVariants) => {
  const [cn, sx] = badge({ variant });
  return (
    <span
      className={cn(className)}
      data-slot="badge"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

export { Badge };
