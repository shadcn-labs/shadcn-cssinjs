"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { styles } from "./tooltip.stylex";

import { cx, x } from "@/lib/utils";

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
  const arrow = x(styles.arrow);
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner align={align} side={side} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={(state) =>
            cx(
              x(
                styles.popup,
                hidden(state.transitionStatus) && styles.popupHidden
              ).className,
              className
            )
          }
          style={style}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className={arrow.className} style={arrow.style} />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
