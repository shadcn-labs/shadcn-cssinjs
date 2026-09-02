"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
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
      ":disabled": colors.input,
      default: colors.input,
    },
    borderColor: {
      ":focus-visible": colors.ring,
      default: "transparent",
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
    display: "inline-flex",
    flexShrink: 0,
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "all",
  },
  rootChecked: {
    backgroundColor: colors.primary,
  },
  rootDefault: {
    height: "18.4px",
    width: "32px",
  },
  rootInvalid: {
    borderColor: colors.destructive,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      default: null,
    },
  },
  rootSm: {
    height: "14px",
    width: "24px",
  },
  thumb: {
    backgroundColor: colors.background,
    borderRadius: radius.full,
    boxShadow: "0 0 0 0 transparent",
    display: "block",
    pointerEvents: "none",
    transform: "translateX(0px)",
    transitionDuration: "150ms",
    transitionProperty: "transform",
  },
  thumbChecked: {
    transform: "translateX(calc(100% - 2px))",
  },
  thumbDefault: {
    height: "1rem",
    width: "1rem",
  },
  thumbSm: {
    height: "0.75rem",
    width: "0.75rem",
  },
});

export type SwitchProps = Omit<
  SwitchPrimitive.Root.Props,
  "className" | "style"
> & {
  size?: "sm" | "default";
  className?:
    | string
    | ((state: SwitchPrimitive.Root.State) => string | undefined);
  style?: StyleXStyles;
};

const Switch = ({
  className,
  style,
  size = "default",
  ...props
}: SwitchProps) => {
  const isSm = size === "sm";

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={(state) =>
        stylex.props(
          styles.root,
          isSm ? styles.rootSm : styles.rootDefault,
          state.checked && styles.rootChecked,
          state.valid === false && styles.rootInvalid,
          customClassName(
            typeof className === "function" ? className(state) : className
          ),
          style
        ).className
      }
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={(state) =>
          stylex.props(
            styles.thumb,
            isSm ? styles.thumbSm : styles.thumbDefault,
            state.checked && styles.thumbChecked
          ).className
        }
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch, styles as switchStyles };
