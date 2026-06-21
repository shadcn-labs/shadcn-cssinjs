"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cx, x } from "@/lib/utils";

import { styles } from "./scroll-area.stylex";

const ScrollArea = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollAreaPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const root = x(styles.root);
  return (
    <ScrollAreaPrimitive.Root
      className={cx(root.className, className)}
      data-slot="scroll-area"
      style={{ ...root.style, ...style }}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={x(styles.viewport).className}
        data-slot="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={x(styles.scrollbar).className}
        data-slot="scroll-area-scrollbar"
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb
          className={x(styles.thumb).className}
          data-slot="scroll-area-thumb"
        />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
};

export { ScrollArea };
