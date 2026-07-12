"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { css, cx } from "styled-system/css";

const root = css({
  overflow: "hidden",
  position: "relative",
});

const viewport = css({
  height: "100%",
  outlineStyle: "none",
  overscrollBehavior: "contain",
  width: "100%",
});

const scrollbar = css({
  display: "flex",
  padding: "1px",
  touchAction: "none",
  transitionDuration: "150ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  userSelect: "none",
  width: "0.625rem",
});

const thumb = css({
  backgroundColor: "border",
  borderRadius: "9999px",
  flex: "1",
});

const ScrollArea = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollAreaPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <ScrollAreaPrimitive.Root
    className={cx(root, className)}
    data-slot="scroll-area"
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={viewport}
      data-slot="scroll-area-viewport"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      className={scrollbar}
      data-slot="scroll-area-scrollbar"
      orientation="vertical"
    >
      <ScrollAreaPrimitive.Thumb
        className={thumb}
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  </ScrollAreaPrimitive.Root>
);

export { ScrollArea };
