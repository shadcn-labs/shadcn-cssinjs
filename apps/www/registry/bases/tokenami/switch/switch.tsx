"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_input)",
  "--border-radius": "var(--radii_full)",
  "--border-width": "var(---, 0)",
  "--checked_background-color": "var(--color_primary)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--display": "inline-flex",
  "--flex-shrink": 0,
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--height": "var(---, 1.15rem)",
  "--outline-style": "none",
  "--padding": 0,
  "--position": "relative",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, background-color)",
  "--transition-timing-function": "ease-in-out",
  "--width": 8,

  variants: {
    size: {
      default: {},
      sm: { "--height": 4, "--width": "var(---, 1.65rem)" },
    },
  },
});

const thumb = css.compose({
  "--background-color": "var(--color_background)",
  "--border-radius": "var(--radii_full)",
  "--checked_transform": "var(---, translateX(0.925rem))",
  "--display": "block",
  "--height": 4,
  "--pointer-events": "none",
  "--transform": "var(---, translateX(0.075rem))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": 4,

  variants: {
    size: {
      default: {},
      sm: {
        "--checked_transform": "var(---, translateX(0.775rem))",
        "--height": 3,
        "--width": 3,
      },
    },
  },
});

const Switch = ({
  className,
  style,
  size = "default",
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "className" | "style">
> & { className?: string; size?: "default" | "sm" }) => {
  const [cn, sx] = root({ size });
  const [tcn, tsx] = thumb({ size });
  return (
    <SwitchPrimitive.Root
      className={cn(className)}
      data-size={size}
      data-slot="switch"
      style={sx(style)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={tcn()}
        data-slot="switch-thumb"
        style={tsx()}
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
