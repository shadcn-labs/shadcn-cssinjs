"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  popup: {
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.popoverForeground,
    fontSize: "0.875rem",
    outline: "none",
    padding: "0.625rem",
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "100ms",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "ease-out",
    width: "16rem",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  positioner: {
    isolation: "isolate",
    zIndex: 50,
  },
});

type HoverCardProps = PreviewCardPrimitive.Root.Props;

const HoverCard = (props: HoverCardProps) => (
  <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
);

type HoverCardTriggerProps = PreviewCardPrimitive.Trigger.Props;

const HoverCardTrigger = (props: HoverCardTriggerProps) => (
  <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
);

type HoverCardContentProps = Omit<
  PreviewCardPrimitive.Popup.Props,
  "className" | "style"
> &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    className?: string;
    style?: StyleXStyles;
  };

const HoverCardContent = ({
  className,
  style,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: HoverCardContentProps) => (
  <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
    <PreviewCardPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...stylex.props(styles.positioner)}
    >
      <PreviewCardPrimitive.Popup
        data-slot="hover-card-content"
        className={(state) =>
          stylex.props(
            styles.popup,
            (state.transitionStatus === "starting" ||
              state.transitionStatus === "ending") &&
              styles.popupHidden,
            customClassName(className),
            style as StyleXStyles
          ).className
        }
        {...props}
      />
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
);

export { HoverCard, HoverCardTrigger, HoverCardContent };
