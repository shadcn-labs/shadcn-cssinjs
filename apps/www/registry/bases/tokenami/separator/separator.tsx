"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const separator = css.compose({
  "--background-color": "var(--color_border)",
  "--flex-shrink": 0,

  variants: {
    orientation: {
      horizontal: { "--height": "var(---, 1px)", "--width": "var(---, 100%)" },
      vertical: { "--height": "var(---, 100%)", "--width": "var(---, 1px)" },
    },
  },
});

const Separator = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof SeparatorPrimitive>, "style" | "className">
> & { className?: string }) => {
  const [cn, sx] = separator({ orientation });
  return (
    <SeparatorPrimitive
      className={cn(className)}
      data-slot="separator"
      orientation={orientation}
      style={sx(style)}
      {...props}
    />
  );
};

export { Separator };
