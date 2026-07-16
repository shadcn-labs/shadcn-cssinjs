"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  horizontal: {
    height: "1px",
    width: "100%",
  },
  root: {
    backgroundColor: colors.border,
    flexShrink: 0,
  },
  vertical: {
    height: "100%",
    width: "1px",
  },
});

const Separator = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: Omit<React.ComponentProps<typeof SeparatorPrimitive>, "className"> & {
  className?: string;
}) => (
  <SeparatorPrimitive
    data-slot="separator"
    orientation={orientation}
    {...stylex.props(
      styles.root,
      orientation === "vertical" ? styles.vertical : styles.horizontal,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Separator };
