"use client";

import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/registry/bases/stylex/lib/utils.stylex";

import { styles } from "./bubble.stylex";

type BubbleVariant =
  | "default"
  | "secondary"
  | "muted"
  | "tinted"
  | "outline"
  | "ghost"
  | "destructive";
const variantStyles: Record<BubbleVariant, StyleXStyles> = {
  default: styles.default,
  destructive: styles.destructive,
  ghost: styles.ghost,
  muted: styles.muted,
  outline: styles.outline,
  secondary: styles.secondary,
  tinted: styles.tinted,
};

const BubbleGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.group);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="bubble-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const Bubble = ({
  variant = "default",
  align = "start",
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: BubbleVariant;
  align?: "start" | "end";
}) => {
  const p = x(
    styles.bubble,
    variant === "ghost" && styles.bubbleGhost,
    align === "end" && styles.alignEnd
  );
  return (
    <div
      className={cx(p.className, className)}
      data-align={align}
      data-slot="bubble"
      data-variant={variant}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BubbleContent = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"div"> & { render?: useRender.RenderProp }) => {
  const p = x(styles.content);
  return useRender({
    props: {
      className: cx(p.className, className),
      "data-slot": "bubble-content",
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <div />,
  });
};

const BubbleReactions = ({
  side = "bottom",
  align = "end",
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end";
  side?: "top" | "bottom";
}) => {
  const p = x(
    styles.reactions,
    side === "top" ? styles.reactionsTop : styles.reactionsBottom,
    align === "start" ? styles.reactionsStart : styles.reactionsEnd
  );
  return (
    <div
      className={cx(p.className, className)}
      data-align={align}
      data-side={side}
      data-slot="bubble-reactions"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  BubbleGroup,
  Bubble,
  BubbleContent,
  BubbleReactions,
  variantStyles as bubbleVariantStyles,
};
