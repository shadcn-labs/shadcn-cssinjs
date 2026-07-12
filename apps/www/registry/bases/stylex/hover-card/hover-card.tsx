"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./hover-card.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
        className={(state) =>
          [
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
        }
        data-slot="hover-card-content"
        style={style}
        {...props}
      >
        {children}
      </PreviewCardPrimitive.Popup>
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
);

export { HoverCard, HoverCardContent, HoverCardTrigger };
