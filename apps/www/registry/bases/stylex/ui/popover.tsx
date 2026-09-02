"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const styles = stylex.create({
  description: {
    color: colors.mutedForeground,
    fontFamily: "inherit",
    margin: 0,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "0.125rem",
  },
  popup: {
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.popoverForeground,
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "0.625rem",
    opacity: 1,
    outline: "none",
    padding: "0.625rem",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "100ms",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    width: "18rem",
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
  title: {
    fontFamily: "inherit",
    fontWeight: 500,
    margin: 0,
  },
});

type PopoverProps = PopoverPrimitive.Root.Props;

const Popover = ({ ...props }: PopoverProps) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);

type PopoverTriggerProps = PopoverPrimitive.Trigger.Props;

const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
);

type PopoverContentProps = Omit<PopoverPrimitive.Popup.Props, "style"> &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    className?: string;
    style?: StyleXStyles;
  };

const PopoverContent = ({
  className,
  style,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...stylex.props(styles.positioner)}
    >
      <PopoverPrimitive.Popup
        data-slot="popover-content"
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className),
            style
          ).className
        }
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);

type PopoverHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const PopoverHeader = ({ className, style, ...props }: PopoverHeaderProps) => (
  <div
    data-slot="popover-header"
    {...stylex.props(styles.header, customClassName(className), style)}
    {...props}
  />
);

type PopoverTitleProps = Omit<PopoverPrimitive.Title.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const PopoverTitle = ({ className, style, ...props }: PopoverTitleProps) => (
  <PopoverPrimitive.Title
    data-slot="popover-title"
    {...stylex.props(styles.title, customClassName(className), style)}
    {...props}
  />
);

type PopoverDescriptionProps = Omit<
  PopoverPrimitive.Description.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const PopoverDescription = ({
  className,
  style,
  ...props
}: PopoverDescriptionProps) => (
  <PopoverPrimitive.Description
    data-slot="popover-description"
    {...stylex.props(styles.description, customClassName(className), style)}
    {...props}
  />
);

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};

export type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverHeaderProps,
  PopoverTitleProps,
  PopoverDescriptionProps,
};
