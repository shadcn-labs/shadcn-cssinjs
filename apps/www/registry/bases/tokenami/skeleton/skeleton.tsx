import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const skeleton = css.compose({
  "--animation-duration": "var(---, 2s)",
  "--animation-iteration-count": "infinite",
  "--animation-name": "tokenami-pulse",
  "--animation-timing-function": "var(---, cubic-bezier(0.4, 0, 0.6, 1))",
  "--background-color":
    "var(---, color-mix(in oklab, var(--color_muted) 50%, transparent))",
  "--border-radius": "var(--radii_md)",
});

const Skeleton = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = skeleton();
  return (
    <div
      className={cn(className)}
      data-slot="skeleton"
      style={sx(style)}
      {...props}
    />
  );
};

export { Skeleton };
