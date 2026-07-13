"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  arrow: {
    backgroundColor: colors.primary,
    borderRadius: "2px",
    height: "0.625rem",
    transform: "rotate(45deg)",
    width: "0.625rem",
    zIndex: 50,
  },
  popup: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: colors.primaryForeground,
    fontSize: "0.75rem",
    lineHeight: "1rem",
    maxWidth: "20rem",
    opacity: 1,
    outline: "none",
    paddingBottom: "0.375rem",
    paddingInline: "0.75rem",
    paddingTop: "0.375rem",
    textAlign: "center",
    textWrap: "balance",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    width: "fit-content",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
}: Omit<React.ComponentProps<typeof TooltipPrimitive.Popup>, "className"> & {
  className?: string;
  sideOffset?: number;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}) => {
  const arrow = stylex.props(styles.arrow);
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={(state) =>
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden,
              customClassName(className)
            ).className
          }
          style={style}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow
            className={arrow.className}
            style={arrow.style}
          />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
