"use client";

import { useRender } from "@base-ui/react";
import { cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

const button = cva({
  base: {
    _disabled: {
      cursor: "not-allowed",
      opacity: "0.5",
      pointerEvents: "none",
    },
    _focusVisible: {
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    alignItems: "center",
    borderRadius: "md",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: "0",
    fontSize: "sm",
    fontWeight: "medium",
    gap: "2",
    justifyContent: "center",
    outlineStyle: "none",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, box-shadow, border-color",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default: { height: "9", paddingInline: "4" },
      icon: { height: "9", paddingInline: "0", width: "9" },
      "icon-lg": { height: "10", paddingInline: "0", width: "10" },
      "icon-sm": { height: "8", paddingInline: "0", width: "8" },
      lg: { height: "10", paddingInline: "8" },
      sm: { height: "8", paddingInline: "3" },
    },
    variant: {
      default: {
        _hover: {
          backgroundColor:
            "color-mix(in oklab, var(--primary) 90%, transparent)",
        },
        backgroundColor: "primary",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        color: "primary.foreground",
      },
      destructive: {
        _hover: {
          backgroundColor:
            "color-mix(in oklab, var(--destructive) 90%, transparent)",
        },
        backgroundColor: "destructive",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        color: "primary.foreground",
      },
      ghost: {
        _hover: {
          backgroundColor: "accent",
          color: "accent.foreground",
        },
        backgroundColor: "transparent",
        color: "foreground",
      },
      link: {
        _hover: { textDecorationLine: "underline" },
        backgroundColor: "transparent",
        color: "primary",
        textUnderlineOffset: "4px",
      },
      outline: {
        _hover: {
          backgroundColor: "accent",
          color: "accent.foreground",
        },
        backgroundColor: "background",
        borderColor: "border",
        borderStyle: "solid",
        borderWidth: "1px",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        color: "foreground",
      },
      secondary: {
        _hover: {
          backgroundColor:
            "color-mix(in oklab, var(--secondary) 80%, transparent)",
        },
        backgroundColor: "secondary",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        color: "secondary.foreground",
      },
    },
  },
});

type ButtonVariants = NonNullable<RecipeVariantProps<typeof button>>;

export type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants & {
    /** Render as a different element (Base UI render API). */
    render?: useRender.RenderProp;
  };

const Button = ({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: ButtonProps) =>
  useRender({
    props: {
      className: cx(button({ size, variant }), className),
      "data-size": size,
      "data-slot": "button",
      "data-variant": variant,
      ...props,
    },
    render: render ?? <button type="button" />,
  });

export { Button };
