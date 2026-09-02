"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const pulseKeyframes = stylex.keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

const styles = stylex.create({
  skeleton: {
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationName: pulseKeyframes,
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
  },
});

export type SkeletonProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Skeleton = ({ className, style, ...props }: SkeletonProps) => (
  <div
    data-slot="skeleton"
    {...stylex.props(
      styles.skeleton,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Skeleton };
