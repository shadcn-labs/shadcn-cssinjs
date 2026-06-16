"use client";

import type { StyleXStyles } from "@stylexjs/stylex";
import { styles } from "./button.stylex";
import { useRender } from "@base-ui/react";

import { cx, x } from "@/lib/utils";

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
  outline: styles.outline,
  secondary: styles.secondary,
  ghost: styles.ghost,
  link: styles.link,
};

const sizeStyles: Record<ButtonSize, StyleXStyles> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  lg: styles.sizeLg,
  icon: styles.sizeIcon,
  "icon-sm": styles.sizeIconSm,
  "icon-lg": styles.sizeIconLg,
};

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "className"> {
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
  const p = x(styles.base, styles.focusable, variantStyles[variant], sizeStyles[size]);
  return useRender({
    render: render ?? <button type="button" />,
    props: {
      "data-slot": "button",
      "data-size": size,
      "data-variant": variant,
      className: cx(p.className, className),
      style: { ...p.style, ...style },
      ...props,
    },
  });
};

export { Button, styles as buttonStyles };
