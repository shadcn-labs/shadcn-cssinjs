"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import type * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";
import type { ButtonProps } from "@/registry/bases/stylex/ui/button";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Textarea } from "@/registry/bases/stylex/ui/textarea";

const styles = stylex.create({
  addonBase: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    color: colors.mutedForeground,
    cursor: "text",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    height: "auto",
    justifyContent: "center",
    paddingBlock: "0.375rem",
    userSelect: "none",
  },
  alignBlockEnd: {
    justifyContent: "flex-start",
    order: 1,
    paddingBottom: "0.5rem",
    paddingInline: "0.625rem",
    width: "100%",
  },
  alignBlockStart: {
    justifyContent: "flex-start",
    order: -1,
    paddingInline: "0.625rem",
    paddingTop: "0.5rem",
    width: "100%",
  },
  alignInlineEnd: {
    order: 1,
    paddingRight: "0.5rem",
  },
  alignInlineStart: {
    order: -1,
    paddingLeft: "0.5rem",
  },
  buttonBase: {
    alignItems: "center",
    boxShadow: "none",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
  },
  buttonIconSm: {
    height: "2rem",
    padding: 0,
    width: "2rem",
  },
  buttonIconXs: {
    borderRadius: `calc(${radius.md} - 3px)`,
    height: "1.5rem",
    padding: 0,
    width: "1.5rem",
  },
  buttonXs: {
    borderRadius: `calc(${radius.md} - 3px)`,
    gap: "0.25rem",
    height: "1.5rem",
    paddingInline: "0.375rem",
  },
  group: {
    alignItems: {
      ":has([data-align=block-end])": "stretch",
      ":has([data-align=block-start])": "stretch",
      default: "center",
    },
    backgroundColor: "transparent",
    borderColor: {
      ":focus-within": colors.ring,
      ":has([aria-invalid=true])": colors.destructive,
      ":has([data-invalid=true])": colors.destructive,
      ":has([data-invalid])": colors.destructive,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-within": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      ":has([aria-invalid=true])": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":has([data-invalid=true])": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      ":has([data-invalid])": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
      default: null,
    },
    display: "flex",
    flexDirection: {
      ":has([data-align=block-end])": "column",
      ":has([data-align=block-start])": "column",
      default: "row",
    },
    height: {
      ":has([data-align=block-end])": "auto",
      ":has([data-align=block-start])": "auto",
      ":has([data-slot=textarea])": "auto",
      default: "2rem",
    },
    minWidth: 0,
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    width: "100%",
  },
  groupInvalid: {
    borderColor: colors.destructive,
    boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
  },
  input: {
    backgroundColor: "transparent",
    borderRadius: 0,
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": "none",
      default: "none",
    },
    flex: 1,
    paddingBlock: "0.25rem",
    paddingInline: "0.375rem",
  },
  text: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
  },
  textarea: {
    backgroundColor: "transparent",
    borderRadius: 0,
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": "none",
      default: "none",
    },
    flex: 1,
    paddingBlock: "0.5rem",
    paddingInline: "0.375rem",
    resize: "none",
  },
});

export type InputGroupProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles | React.CSSProperties;
};

const InputGroup = ({
  className,
  style,
  "aria-invalid": ariaInvalid,
  ...props
}: InputGroupProps) => {
  const isInvalid = ariaInvalid === true || ariaInvalid === "true";

  return (
    <div
      data-slot="input-group"
      role="group"
      aria-invalid={ariaInvalid}
      {...stylex.props(
        styles.group,
        isInvalid && styles.groupInvalid,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

export type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

const alignStyles: Record<InputGroupAddonAlign, StyleXStyles> = {
  "block-end": styles.alignBlockEnd,
  "block-start": styles.alignBlockStart,
  "inline-end": styles.alignInlineEnd,
  "inline-start": styles.alignInlineStart,
};

export type InputGroupAddonProps = Omit<
  React.ComponentProps<"div">,
  "style"
> & {
  align?: InputGroupAddonAlign;
  style?: StyleXStyles;
};

const InputGroupAddon = ({
  className,
  style,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) => (
  <div
    role="group"
    data-slot="input-group-addon"
    data-align={align}
    onClick={(e) => {
      if ((e.target as HTMLElement).closest("button")) {
        return;
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus();
    }}
    {...stylex.props(
      styles.addonBase,
      alignStyles[align],
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm";

const buttonSizeStyles: Partial<Record<InputGroupButtonSize, StyleXStyles>> = {
  "icon-sm": styles.buttonIconSm,
  "icon-xs": styles.buttonIconXs,
  xs: styles.buttonXs,
};

export type InputGroupButtonProps = Omit<ButtonProps, "size" | "type"> & {
  size?: InputGroupButtonSize;
  type?: "button" | "submit" | "reset";
  style?: StyleXStyles;
};

const InputGroupButton = ({
  className,
  style,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) => (
  <Button
    type={type}
    data-size={size}
    variant={variant}
    size={size as ButtonProps["size"]}
    style={[styles.buttonBase, buttonSizeStyles[size], style] as StyleXStyles}
    className={className}
    {...props}
  />
);

export type InputGroupTextProps = Omit<
  React.ComponentProps<"span">,
  "style"
> & {
  style?: StyleXStyles;
};

const InputGroupText = ({
  className,
  style,
  ...props
}: InputGroupTextProps) => (
  <span
    {...stylex.props(
      styles.text,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type InputGroupInputProps = React.ComponentProps<typeof Input> & {
  style?: StyleXStyles;
};

const InputGroupInput = ({
  className,
  style,
  ...props
}: InputGroupInputProps) => (
  <Input
    data-slot="input-group-control"
    style={[styles.input, style] as StyleXStyles}
    className={className}
    {...props}
  />
);

export type InputGroupTextareaProps = React.ComponentProps<typeof Textarea> & {
  style?: StyleXStyles;
};

const InputGroupTextarea = ({
  className,
  style,
  ...props
}: InputGroupTextareaProps) => (
  <Textarea
    data-slot="input-group-control"
    style={[styles.textarea, style] as StyleXStyles}
    className={className}
    {...props}
  />
);

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
  styles as inputGroupStyles,
};
