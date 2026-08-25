"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { css, cx } from "styled-system/css";

const popup = css({
  _ending: { opacity: "0", transform: "scale(0.95)" },
  _starting: { opacity: "0", transform: "scale(0.95)" },
  backgroundColor: "popover",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  color: "popover.foreground",
  fontSize: "0.875rem",
  opacity: "1",
  outlineStyle: "none",
  padding: "4",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  width: "64",
  zIndex: "50",
});

const HoverCard = (
  props: React.ComponentProps<typeof PreviewCardPrimitive.Root>
) => <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;

const HoverCardTrigger = (
  props: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>
) => <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;

const HoverCardContent = ({
  className,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof PreviewCardPrimitive.Popup>,
  "className"
> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}) => (
  <PreviewCardPrimitive.Portal>
    <PreviewCardPrimitive.Positioner
      align={align}
      side={side}
      sideOffset={sideOffset}
    >
      <PreviewCardPrimitive.Popup
        className={cx(popup, className)}
        data-slot="hover-card-content"
        {...props}
      >
        {children}
      </PreviewCardPrimitive.Popup>
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
);

export { HoverCard, HoverCardContent, HoverCardTrigger };
