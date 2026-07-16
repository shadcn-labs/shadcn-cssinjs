"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import * as stylex from "@stylexjs/stylex";
import { CheckIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  indicator: {
    alignItems: "center",
    color: colors.primaryForeground,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  root: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderColor: colors.input,
    borderRadius: radius.sm,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "inline-flex",
    flexShrink: 0,
    height: "1rem",
    justifyContent: "center",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    padding: 0,
    transition: "background-color 0.15s, border-color 0.15s, box-shadow 0.15s",
    width: "1rem",
  },
  rootChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});

const Checkbox = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <CheckboxPrimitive.Root
    className={(state) =>
      stylex.props(
        styles.root,
        state.checked && styles.rootChecked,
        customClassName(className)
      ).className
    }
    data-slot="checkbox"
    style={style}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={stylex.props(styles.indicator).className}
      data-slot="checkbox-indicator"
    >
      <CheckIcon size={14} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
