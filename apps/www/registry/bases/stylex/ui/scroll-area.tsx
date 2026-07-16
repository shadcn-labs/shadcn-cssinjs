"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  root: {
    overflow: "hidden",
    position: "relative",
  },
  scrollbar: {
    display: "flex",
    padding: "1px",
    touchAction: "none",
    transition: "opacity 0.15s ease-in-out",
    userSelect: "none",
    width: "0.625rem",
  },
  thumb: {
    backgroundColor: colors.border,
    borderRadius: "9999px",
    flex: 1,
  },
  viewport: {
    height: "100%",
    outline: "none",
    overscrollBehavior: "contain",
    width: "100%",
  },
});

const ScrollArea = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollAreaPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <ScrollAreaPrimitive.Root
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="scroll-area"
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={stylex.props(styles.viewport).className}
      data-slot="scroll-area-viewport"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      className={stylex.props(styles.scrollbar).className}
      data-slot="scroll-area-scrollbar"
      orientation="vertical"
    >
      <ScrollAreaPrimitive.Thumb
        className={stylex.props(styles.thumb).className}
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  </ScrollAreaPrimitive.Root>
);

export { ScrollArea };
