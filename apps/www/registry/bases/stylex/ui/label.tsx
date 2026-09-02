"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  root: {
    alignItems: "center",
    color: "inherit",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: 1,
    userSelect: "none",
  },
});

export type LabelProps = Omit<React.ComponentProps<"label">, "style"> & {
  style?: StyleXStyles;
  "data-disabled"?: boolean | string;
};

const Label = ({ className, style, ...props }: LabelProps) => {
  const isDisabled =
    props["data-disabled"] === true ||
    props["data-disabled"] === "" ||
    props["data-disabled"] === "true" ||
    props["aria-disabled"] === true ||
    props["aria-disabled"] === "true";

  return (
    // oxlint-disable-next-line eslint-plugin-jsx-a11y/label-has-associated-control
    <label
      data-slot="label"
      {...stylex.props(
        styles.root,
        isDisabled && styles.disabled,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

export { Label };
