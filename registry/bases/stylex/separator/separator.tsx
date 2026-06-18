"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";

import { cx, x } from "@/lib/utils";

import { styles } from "./separator.stylex";

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
