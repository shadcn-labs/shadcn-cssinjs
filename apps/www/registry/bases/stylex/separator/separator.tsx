"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./separator.stylex";

const Separator = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: Omit<React.ComponentProps<typeof SeparatorPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(
    styles.root,
    orientation === "vertical" ? styles.vertical : styles.horizontal
  );
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Separator };
