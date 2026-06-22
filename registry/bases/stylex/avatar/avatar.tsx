"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Children, cloneElement, isValidElement } from "react";

import { cx, x } from "@/lib/utils";

import { styles } from "./avatar.stylex";

type AvatarSize = "default" | "sm" | "lg";

const sizeStyles: Record<AvatarSize, StyleXStyles> = {
  default: null,
  lg: styles.rootLg,
  sm: styles.rootSm,
};

const Avatar = ({
  className,
  style,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "className"> & {
  className?: string;
  size?: AvatarSize;
}) => {
  const p = x(styles.root, sizeStyles[size]);
  return (
    <AvatarPrimitive.Root
      className={cx(p.className, className)}
      data-size={size}
      data-slot="avatar"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AvatarImage = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.image);
  return (
    <AvatarPrimitive.Image
      className={cx(p.className, className)}
      data-slot="avatar-image"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.fallback);
  return (
    <AvatarPrimitive.Fallback
      className={cx(p.className, className)}
      data-slot="avatar-fallback"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AvatarBadge = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.badge);
  return (
    <span
      className={cx(p.className, className)}
      data-slot="avatar-badge"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AvatarGroup = ({
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.group);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="avatar-group"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {Children.map(children, (child, index) =>
        isValidElement<{ style?: React.CSSProperties }>(child)
          ? cloneElement(child, {
              style: {
                boxShadow: "0 0 0 2px var(--background)",
                marginInlineStart: index === 0 ? 0 : "-0.5rem",
                ...child.props.style,
              },
            })
          : child
      )}
    </div>
  );
};

const AvatarGroupCount = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.groupCount);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="avatar-group-count"
      style={{ marginInlineStart: "-0.5rem", ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
