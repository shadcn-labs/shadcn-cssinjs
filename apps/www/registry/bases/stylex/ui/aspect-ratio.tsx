"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  root: {
    position: "relative",
    width: "100%",
  },
});

export type AspectRatioProps = Omit<React.ComponentProps<"div">, "style"> & {
  ratio?: number;
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: AspectRatioProps) => {
  const isInlineStyle =
    style &&
    typeof style === "object" &&
    !("$$css" in style) &&
    !("__stylex__" in style);

  const inlineStyles: React.CSSProperties = {
    aspectRatio: String(ratio),
    ...(isInlineStyle ? (style as React.CSSProperties) : undefined),
  };

  const stylexStyle = isInlineStyle ? undefined : (style as StyleXStyles);

  return (
    <div
      data-slot="aspect-ratio"
      style={inlineStyles}
      {...stylex.props(styles.root, customClassName(className), stylexStyle)}
      {...props}
    >
      {children}
    </div>
  );
};

export { AspectRatio };
