"use client";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  dot: {
    backgroundColor: colors.primaryForeground,
    borderRadius: radius.full,
    height: "0.5rem",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "0.5rem",
  },
  group: {
    display: "grid",
    gap: "0.5rem",
    width: "100%",
  },
  indicator: {
    alignItems: "center",
    display: "flex",
    height: "1rem",
    justifyContent: "center",
    width: "1rem",
  },
  invalid: {
    borderColor: {
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.destructive} 50%, transparent)`,
      default: colors.destructive,
    },
    boxShadow: {
      ":is(.dark, .dark *)": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 40%, transparent)`,
      default: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
    },
  },
  invalidChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  item: {
    "::after": {
      bottom: "-0.5rem",
      content: '""',
      left: "-0.75rem",
      position: "absolute",
      right: "-0.75rem",
      top: "-0.5rem",
    },
    aspectRatio: "1 / 1",
    backgroundColor: {
      ":is(.dark, .dark *)": `color-mix(in oklab, ${colors.input} 30%, transparent)`,
      default: "transparent",
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flexShrink: 0,
    height: "1rem",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    width: "1rem",
  },
  itemChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: colors.primaryForeground,
  },
});

export type RadioGroupProps = Omit<
  RadioGroupPrimitive.Props,
  "className" | "style"
> & {
  className?:
    | string
    | ((state: RadioGroupPrimitive.State) => string | undefined);
  style?: StyleXStyles;
};

const RadioGroup = ({ className, style, ...props }: RadioGroupProps) => (
  <RadioGroupPrimitive
    data-slot="radio-group"
    className={(state) =>
      stylex.props(
        styles.group,
        customClassName(
          typeof className === "function" ? className(state) : className
        ),
        style
      ).className
    }
    {...props}
  />
);

export type RadioGroupItemProps = Omit<
  RadioPrimitive.Root.Props,
  "className" | "style"
> & {
  className?:
    | string
    | ((state: RadioPrimitive.Root.State) => string | undefined);
  style?: StyleXStyles;
  "data-invalid"?: boolean | string;
};

const RadioGroupItem = ({
  className,
  style,
  ...props
}: RadioGroupItemProps) => {
  const isInvalid =
    Boolean(props["aria-invalid"] && props["aria-invalid"] !== "false") ||
    Boolean(props["data-invalid"] && props["data-invalid"] !== "false");

  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={(state) =>
        stylex.props(
          styles.item,
          (state.valid === false || isInvalid) && styles.invalid,
          state.checked && styles.itemChecked,
          (state.valid === false || isInvalid) &&
            state.checked &&
            styles.invalidChecked,
          customClassName(
            typeof className === "function" ? className(state) : className
          ),
          style
        ).className
      }
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        {...stylex.props(styles.indicator)}
      >
        <span {...stylex.props(styles.dot)} />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
};

export { RadioGroup, RadioGroupItem };
