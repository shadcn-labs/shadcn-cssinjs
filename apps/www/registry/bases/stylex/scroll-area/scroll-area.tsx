"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./scroll-area.stylex";

const ScrollArea = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollAreaPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const root = stylex.props(styles.root);
  return (
    <ScrollAreaPrimitive.Root
      className={
        [root.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="scroll-area"
      style={{ ...root.style, ...style }}
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
};

export { ScrollArea };
