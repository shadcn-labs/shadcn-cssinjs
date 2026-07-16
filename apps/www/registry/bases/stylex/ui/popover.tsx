"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    opacity: 1,
    outline: "none",
    padding: "1rem",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    width: "18rem",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  title: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1,
  },
});

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const Popover = (props: React.ComponentProps<typeof PopoverPrimitive.Root>) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);

const PopoverTrigger = (
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>
) => <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;

const PopoverAnchor = (
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>
) => <PopoverPrimitive.Trigger data-slot="popover-anchor" {...props} />;

const PopoverContent = ({
  className,
  style,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  alignOffset,
  collisionPadding,
  children,
  ...props
}: Omit<React.ComponentProps<typeof PopoverPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  alignOffset?: number;
  collisionPadding?: number;
}) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      collisionPadding={collisionPadding}
      side={side}
      sideOffset={sideOffset}
    >
      <PopoverPrimitive.Popup
        data-slot="popover-content"
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
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);

const PopoverHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="popover-header"
    {...props}
  />
);

const PopoverTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof PopoverPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <PopoverPrimitive.Title
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="popover-title"
    {...props}
  />
);

const PopoverDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof PopoverPrimitive.Description>,
  "className"
> & {
  className?: string;
}) => (
  <PopoverPrimitive.Description
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="popover-description"
    {...props}
  />
);

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
