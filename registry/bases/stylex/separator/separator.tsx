"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";
import { styles } from "./separator.stylex";

import { cx, x } from "@/lib/utils";

const Separator = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: Omit<React.ComponentProps<typeof SeparatorPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = x(
    styles.root,
    orientation === "vertical" ? styles.vertical : styles.horizontal
  );
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Separator };
