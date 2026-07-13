"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    fontSize: "0.875rem",
    opacity: 1,
    outline: "none",
    padding: "1rem",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    width: "16rem",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

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
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
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
