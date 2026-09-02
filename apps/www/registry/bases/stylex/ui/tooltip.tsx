"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const styles = stylex.create({
  arrow: {
    backgroundColor: colors.primary,
    borderRadius: "2px",
    bottom: {
      ":is([data-side=top])": "-0.625rem",
      default: null,
    },
    fill: colors.primary,
    height: "0.625rem",
    left: {
      ":is([data-side=right], [data-side=inline-end])": "-0.25rem",
      default: null,
    },
    right: {
      ":is([data-side=left], [data-side=inline-start])": "-0.25rem",
      default: null,
    },
    top: {
      ":is([data-side=bottom])": "0.25rem",
      default: null,
    },
    transform: {
      ":is([data-side=left], [data-side=right], [data-side=inline-start], [data-side=inline-end])":
        "rotate(45deg)",
      default: "translateY(calc(-50% - 2px)) rotate(45deg)",
    },
    width: "0.625rem",
    zIndex: 50,
  },
  popup: {
    ":is(*)": {
      margin: 0,
    },
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    color: colors.primaryForeground,
    display: "inline-flex",
    fontSize: "0.75rem",
    gap: "0.375rem",
    lineHeight: "1rem",
    maxWidth: "20rem",
    opacity: 1,
    outline: "none",
    paddingBlock: "0.375rem",
    paddingInline: "0.75rem",
    textAlign: "center",
    textWrap: "balance",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "100ms",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    width: "fit-content",
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

type TooltipProviderProps = TooltipPrimitive.Provider.Props;

const TooltipProvider = ({ delay = 0, ...props }: TooltipProviderProps) => (
  <TooltipPrimitive.Provider
    data-slot="tooltip-provider"
    delay={delay}
    {...props}
  />
);

type TooltipProps = TooltipPrimitive.Root.Props;

const Tooltip = ({ ...props }: TooltipProps) => (
  <TooltipProvider>
    <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  </TooltipProvider>
);

type TooltipTriggerProps = TooltipPrimitive.Trigger.Props;

const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => (
  <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
);

type TooltipPortalProps = TooltipPrimitive.Portal.Props;

const TooltipPortal = ({ ...props }: TooltipPortalProps) => (
  <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />
);

type TooltipArrowProps = Omit<TooltipPrimitive.Arrow.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TooltipArrow = ({ className, style, ...props }: TooltipArrowProps) => (
  <TooltipPrimitive.Arrow
    data-slot="tooltip-arrow"
    {...stylex.props(styles.arrow, customClassName(className), style)}
    {...props}
  />
);

type TooltipContentProps = Omit<TooltipPrimitive.Popup.Props, "style"> &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    className?: string;
    style?: StyleXStyles;
  };

const TooltipContent = ({
  className,
  style,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...stylex.props(styles.positioner)}
    >
      <TooltipPrimitive.Popup
        data-slot="tooltip-content"
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className),
            style
          ).className
        }
        {...props}
      >
        {children}
        {/* <TooltipArrow /> */}
      </TooltipPrimitive.Popup>
    </TooltipPrimitive.Positioner>
  </TooltipPrimitive.Portal>
);

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  TooltipArrow,
  styles as tooltipStyles,
};

export type {
  TooltipProps,
  TooltipTriggerProps,
  TooltipContentProps,
  TooltipProviderProps,
  TooltipPortalProps,
  TooltipArrowProps,
};
