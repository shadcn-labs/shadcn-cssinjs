"use client";

import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/lib/utils";

import { styles } from "./button.stylex";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

const variantStyles: Record<ButtonVariant, StyleXStyles> = {
  default: styles.default,
  destructive: styles.destructive,
  ghost: styles.ghost,
  link: styles.link,
  outline: styles.outline,
  secondary: styles.secondary,
};

const sizeStyles: Record<ButtonSize, StyleXStyles> = {
  default: styles.sizeDefault,
  icon: styles.sizeIcon,
  "icon-lg": styles.sizeIconLg,
  "icon-sm": styles.sizeIconSm,
  lg: styles.sizeLg,
  sm: styles.sizeSm,
};

export interface ButtonProps extends Omit<
  React.ComponentProps<"button">,
  "className"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Render as a different element (Base UI render API). */
  render?: useRender.RenderProp;
}

const Button = ({
  className,
  style,
  variant = "default",
  size = "default",
  render,
  ...props
}: ButtonProps) => {
  const p = x(
    styles.base,
    styles.focusable,
    variantStyles[variant],
    sizeStyles[size]
  );
  return useRender({
    props: {
      className: cx(p.className, className),
      "data-size": size,
      "data-slot": "button",
      "data-variant": variant,
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <button type="button" />,
  });
};

export { Button, styles as buttonStyles };
