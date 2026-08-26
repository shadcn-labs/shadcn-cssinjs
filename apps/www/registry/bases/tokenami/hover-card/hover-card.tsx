"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const popup = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_popover-foreground)",
  "--ending_opacity": 0,
  "--ending_transform": "var(---, scale(0.95))",
  "--font-size": "0.875rem",
  "--opacity": 1,
  "--outline-style": "none",
  "--padding": 4,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--transform": "var(---, scale(1))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": 64,
  "--z-index": "var(---, 50)",
});

const HoverCard = (
  props: React.ComponentProps<typeof PreviewCardPrimitive.Root>
) => <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;

const HoverCardTrigger = (
  props: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>
) => <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;

const HoverCardContent = ({
  className,
  style,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof PreviewCardPrimitive.Popup>,
    "className" | "style"
  >
> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}) => {
  const [cn, sx] = popup();
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(className)}
          data-slot="hover-card-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
};

export { HoverCard, HoverCardContent, HoverCardTrigger };
