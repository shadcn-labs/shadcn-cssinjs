"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon } from "lucide-react";
import * as React from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: colors.primaryForeground,
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  icon: {
    height: "0.875rem",
    pointerEvents: "none",
    width: "0.875rem",
  },
  indicator: {
    color: "currentColor",
    display: "grid",
    placeContent: "center",
    transitionProperty: "none",
  },
  invalid: {
    borderColor: {
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.destructive} 50%, transparent)`,
      default: colors.destructive,
    },
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":is(.dark, .dark *):focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 40%, transparent)`,
      default: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
    },
  },
  invalidChecked: {
    backgroundColor: colors.destructive,
    borderColor: colors.destructive,
    color: colors.primaryForeground,
  },
  root: {
    "::after": {
      bottom: "-0.5rem",
      content: '""',
      left: "-0.75rem",
      position: "absolute",
      right: "-0.75rem",
      top: "-0.5rem",
    },
    alignItems: "center",
    backgroundColor: {
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.input} 30%, transparent)`,
      default: colors.background,
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: {
      ":disabled": "not-allowed",
      ":is([data-disabled])": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flexShrink: 0,
    height: "1rem",
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
      ":is([data-disabled])": 0.5,
      default: 1,
    },
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    width: "1rem",
  },
});

export type CheckboxProps = Omit<
  CheckboxPrimitive.Root.Props,
  "className" | "style"
> & {
  className?:
    | string
    | ((state: CheckboxPrimitive.Root.State) => string | undefined);
  style?: StyleXStyles;
  "data-invalid"?: boolean | string;
  "data-disabled"?: boolean | string;
};

const Checkbox = ({ className, style, ...props }: CheckboxProps) => {
  const isAriaInvalid =
    props["aria-invalid"] === true ||
    props["aria-invalid"] === "true" ||
    props["data-invalid"] === true ||
    props["data-invalid"] === "" ||
    props["data-invalid"] === "true";

  const isDisabled =
    props.disabled === true ||
    props["data-disabled"] === true ||
    props["data-disabled"] === "" ||
    props["data-disabled"] === "true" ||
    props["aria-disabled"] === true ||
    props["aria-disabled"] === "true";

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={(state) =>
        stylex.props(
          styles.root,
          (state.disabled || isDisabled) && styles.disabled,
          (state.valid === false || isAriaInvalid) && styles.invalid,
          (state.checked || state.indeterminate) && styles.checked,
          (state.valid === false || isAriaInvalid) &&
            (state.checked || state.indeterminate) &&
            styles.invalidChecked,
          customClassName(
            typeof className === "function" ? className(state) : className
          ),
          style
        ).className
      }
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        {...stylex.props(styles.indicator)}
      >
        <CheckIcon {...stylex.props(styles.icon)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
