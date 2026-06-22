"use client";

import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/lib/utils";

import { Button } from "../button/button";
import type { ButtonProps } from "../button/button";
import { styles } from "./input-group.stylex";

type InputGroupAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

const alignStyles: Record<InputGroupAlign, StyleXStyles> = {
  "block-end": styles.addonBlockEnd,
  "block-start": styles.addonBlockStart,
  "inline-end": styles.addonInlineEnd,
  "inline-start": styles.addonInlineStart,
};

const InputGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.root);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="input-group"
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputGroupAddon = ({
  className,
  style,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & { align?: InputGroupAlign }) => {
  const p = x(styles.addonBase, alignStyles[align]);
  return (
    // oxlint-disable-next-line click-events-have-key-events no-static-element-interactions
    <div
      className={cx(p.className, className)}
      data-align={align}
      data-slot="input-group-addon"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm";

const buttonSizeMap: Record<InputGroupButtonSize, ButtonProps["size"]> = {
  "icon-sm": "icon-sm",
  "icon-xs": "icon-sm",
  sm: "sm",
  xs: "sm",
};

const InputGroupButton = ({
  className,
  style,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<ButtonProps, "size"> & { size?: InputGroupButtonSize }) => {
  const p = x(styles.button);
  return (
    <Button
      className={cx(p.className, className)}
      data-size={size}
      size={buttonSizeMap[size]}
      style={{ ...p.style, ...style }}
      type={type}
      variant={variant}
      {...props}
    />
  );
};

const InputGroupText = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.text);
  return (
    <span
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputGroupInput = ({
  className,
  style,
  ...props
}: React.ComponentProps<"input">) => {
  const p = x(styles.control);
  return (
    <input
      className={cx(p.className, className)}
      data-slot="input-group-control"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const InputGroupTextarea = ({
  className,
  style,
  ...props
}: React.ComponentProps<"textarea">) => {
  const p = x(styles.control, styles.textarea);
  return (
    <textarea
      className={cx(p.className, className)}
      data-slot="input-group-control"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
