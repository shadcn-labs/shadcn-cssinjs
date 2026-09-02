"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Loader2Icon } from "lucide-react";
import * as React from "react";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const spin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const styles = stylex.create({
  root: {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationName: spin,
    animationTimingFunction: "linear",
    height: "1rem",
    width: "1rem",
  },
});

export type SpinnerProps = Omit<React.ComponentProps<"svg">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Spinner = ({ className, style, ...props }: SpinnerProps) => (
  <Loader2Icon
    data-slot="spinner"
    role="status"
    aria-label="Loading"
    {...stylex.props(styles.root, customClassName(className), style)}
    {...props}
  />
);

export { Spinner };
