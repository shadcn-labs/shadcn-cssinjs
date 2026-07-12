"use client";

import { css, cva, cx } from "styled-system/css";

import { Button } from "../button/button";
import type { ButtonProps } from "../button/button";

const root = css({
  _focusWithin: {
    borderColor: "ring",
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  alignItems: "center",
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  display: "flex",
  flexWrap: "wrap",
  minWidth: "0",
  outlineStyle: "none",
  position: "relative",
  transitionDuration: "150ms",
  transitionProperty: "color, box-shadow",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
});

const addonBase = cva({
  base: {
    alignItems: "center",
    color: "muted.foreground",
    cursor: "text",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: "medium",
    gap: "2",
    justifyContent: "center",
    paddingBlock: "1.5",
    userSelect: "none",
  },
  defaultVariants: { align: "inline-start" },
  variants: {
    align: {
      "block-end": {
        justifyContent: "flex-start",
        order: "1",
        paddingBottom: "3",
        paddingInline: "3",
        width: "100%",
      },
      "block-start": {
        justifyContent: "flex-start",
        order: "-1",
        paddingInline: "3",
        paddingTop: "3",
        width: "100%",
      },
      "inline-end": { order: "1", paddingInlineEnd: "3" },
      "inline-start": { order: "-1", paddingInlineStart: "3" },
    },
  },
});

const button = css({
  boxShadow: "none",
  gap: "1.5",
});

const text = css({
  alignItems: "center",
  color: "muted.foreground",
  display: "flex",
  fontSize: "0.875rem",
  gap: "2",
});

const control = css({
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _placeholder: { color: "muted.foreground" },
  _selection: { backgroundColor: "primary", color: "primary.foreground" },
  backgroundColor: "transparent",
  borderRadius: "0",
  borderWidth: "0",
  color: "foreground",
  cursor: "auto",
  flex: "1",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  minWidth: "0",
  outlineStyle: "none",
  paddingBlock: "2",
  paddingInline: "2",
});

const textareaStyle = css({
  paddingBlock: "3",
  resize: "none",
  width: "100%",
});

type InputGroupAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

const InputGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(root, className)}
    data-slot="input-group"
    role="group"
    {...props}
  />
);

const InputGroupAddon = ({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & { align?: InputGroupAlign }) => (
  // oxlint-disable-next-line click-events-have-key-events no-static-element-interactions
  <div
    className={cx(addonBase({ align }), className)}
    data-align={align}
    data-slot="input-group-addon"
    onClick={(e) => {
      if ((e.target as HTMLElement).closest("button")) {
        return;
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus();
    }}
    role="group"
    {...props}
  />
);

type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm";

const buttonSizeMap: Record<InputGroupButtonSize, ButtonProps["size"]> = {
  "icon-sm": "icon-sm",
  "icon-xs": "icon-sm",
  sm: "sm",
  xs: "sm",
};

const InputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<ButtonProps, "size"> & { size?: InputGroupButtonSize }) => (
  <Button
    className={cx(button, className)}
    data-size={size}
    size={buttonSizeMap[size]}
    type={type}
    variant={variant}
    {...props}
  />
);

const InputGroupText = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span className={cx(text, className)} {...props} />
);

const InputGroupInput = ({
  className,
  ...props
}: React.ComponentProps<"input">) => (
  <input
    className={cx(control, className)}
    data-slot="input-group-control"
    {...props}
  />
);

const InputGroupTextarea = ({
  className,
  ...props
}: React.ComponentProps<"textarea">) => (
  <textarea
    className={cx(control, textareaStyle, className)}
    data-slot="input-group-control"
    {...props}
  />
);

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
