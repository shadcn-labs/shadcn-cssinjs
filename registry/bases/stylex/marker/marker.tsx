"use client";

import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/lib/utils";

import { styles } from "./marker.stylex";

type MarkerVariant = "default" | "separator" | "border";
const markerVariants: Record<MarkerVariant, StyleXStyles> = {
  border: styles.border,
  default: null,
  separator: styles.separator,
};

const Marker = ({
  className,
  style,
  variant = "default",
  render,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: MarkerVariant;
  render?: useRender.RenderProp;
}) => {
  const p = x(styles.root, markerVariants[variant]);
  return useRender({
    props: {
      className: cx(p.className, className),
      "data-slot": "marker",
      "data-variant": variant,
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <div />,
  });
};

const MarkerIcon = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.icon);
  return (
    <span
      aria-hidden="true"
      className={cx(p.className, className)}
      data-slot="marker-icon"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MarkerContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.content);
  return (
    <span
      className={cx(p.className, className)}
      data-slot="marker-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Marker, MarkerIcon, MarkerContent, markerVariants };
