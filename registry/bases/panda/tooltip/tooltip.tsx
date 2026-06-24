"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { css, cx } from "styled-system/css";

const popup = css({
  _ending: { opacity: "0", transform: "scale(0.95)" },
  _starting: { opacity: "0", transform: "scale(0.95)" },
  backgroundColor: "primary",
  borderRadius: "md",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  color: "primary.foreground",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  maxWidth: "80",
  opacity: "1",
  outlineStyle: "none",
  paddingBlock: "1.5",
  paddingInline: "3",
  textAlign: "center",
  textWrap: "balance",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  width: "fit-content",
  zIndex: "50",
});

const arrow = css({
  backgroundColor: "primary",
  borderRadius: "2px",
  height: "2.5",
  transform: "rotate(45deg)",
  width: "2.5",
  zIndex: "50",
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
}) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Positioner
      align={align}
      side={side}
      sideOffset={sideOffset}
    >
      <TooltipPrimitive.Popup
        className={cx(popup, className)}
        data-slot="tooltip-content"
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrow} />
      </TooltipPrimitive.Popup>
    </TooltipPrimitive.Positioner>
  </TooltipPrimitive.Portal>
);

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
