"use client";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  corner: {},
  root: {
    position: "relative",
  },
  scrollbar: {
    display: "flex",
    padding: "1px",
    touchAction: "none",
    transitionDuration: "150ms",
    transitionProperty: "colors",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
  },
  scrollbarHorizontal: {
    flexDirection: "column",
    height: "0.375rem",
  },
  scrollbarVertical: {
    height: "100%",
    width: "0.375rem",
  },
  thumb: {
    backgroundColor: colors.border,
    borderRadius: radius.full,
    flex: 1,
    position: "relative",
  },
  viewport: {
    borderRadius: "inherit",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "none",
    },
    height: "100%",
    outline: "none",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    width: "100%",
  },
});

export type ScrollBarProps = Omit<
  ScrollAreaPrimitive.Scrollbar.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ScrollBar = ({
  className,
  orientation = "vertical",
  style,
  ...props
}: ScrollBarProps) => (
  <ScrollAreaPrimitive.Scrollbar
    data-slot="scroll-area-scrollbar"
    orientation={orientation}
    {...stylex.props(
      styles.scrollbar,
      orientation === "vertical"
        ? styles.scrollbarVertical
        : styles.scrollbarHorizontal,
      customClassName(className),
      style
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      {...stylex.props(styles.thumb)}
    />
  </ScrollAreaPrimitive.Scrollbar>
);

export type ScrollAreaProps = Omit<ScrollAreaPrimitive.Root.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const ScrollArea = ({
  className,
  children,
  style,
  ...props
}: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root
    data-slot="scroll-area"
    {...stylex.props(styles.root, customClassName(className), style)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      {...stylex.props(styles.viewport)}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner
      data-slot="scroll-area-corner"
      {...stylex.props(styles.corner)}
    />
  </ScrollAreaPrimitive.Root>
);

export { ScrollArea, ScrollBar, styles as scrollAreaStyles };
