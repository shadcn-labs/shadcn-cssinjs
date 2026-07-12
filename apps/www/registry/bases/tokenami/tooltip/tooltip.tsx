"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const popup = css.compose({
  "--background-color": "var(--color_primary)",
  "--border-radius": "var(--radii_md)",
  "--box-shadow":
    "var(---, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_primary-foreground)",
  "--ending_opacity": 0,
  "--ending_transform": "var(---, scale(0.95))",
  "--font-size": "0.75rem",
  "--line-height": "var(---, 1rem)",
  "--max-width": 80,
  "--opacity": 1,
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline": 3,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--text-align": "center",
  "--text-wrap": "balance",
  "--transform": "var(---, scale(1))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, fit-content)",
  "--z-index": "var(---, 50)",
});

const arrow = css.compose({
  "--background-color": "var(--color_primary)",
  "--border-radius": "var(---, 2px)",
  "--height": 2.5,
  "--transform": "var(---, rotate(45deg))",
  "--width": 2.5,
  "--z-index": "var(---, 50)",
});

const TooltipProvider = (
  props: React.ComponentProps<typeof TooltipPrimitive.Provider>
) => <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />;

const Tooltip = (props: React.ComponentProps<typeof TooltipPrimitive.Root>) => (
  <TooltipProvider>
    <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  </TooltipProvider>
);

const TooltipTrigger = (
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>
) => <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;

const TooltipContent = ({
  className,
  style,
  sideOffset = 4,
  side = "top",
  align = "center",
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof TooltipPrimitive.Popup>,
    "className" | "style"
  >
> & {
  className?: string;
  sideOffset?: number;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}) => {
  const [cn, sx] = popup();
  const [acn, asx] = arrow();
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        <TooltipPrimitive.Popup
          className={cn(className)}
          data-slot="tooltip-content"
          style={sx(style)}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className={acn()} style={asx()} />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
