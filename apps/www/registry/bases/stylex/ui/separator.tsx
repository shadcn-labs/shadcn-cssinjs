"use client";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

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
    alignSelf: "stretch",
    width: "1px",
  },
});

export type SeparatorProps = Omit<SeparatorPrimitive.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Separator = ({
  className,
  orientation = "horizontal",
  style,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive
    data-slot="separator"
    orientation={orientation}
    {...stylex.props(
      styles.root,
      orientation === "vertical" ? styles.vertical : styles.horizontal,
      customClassName(className),
      style
    )}
    {...props}
  />
);

export { Separator, styles as separatorStyles };
