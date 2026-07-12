"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Children, cloneElement, isValidElement } from "react";

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
  const p = stylex.props(styles.root, sizeStyles[size]);
  return (
    <AvatarPrimitive.Root
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.image);
  return (
    <AvatarPrimitive.Image
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.fallback);
  return (
    <AvatarPrimitive.Fallback
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.badge);
  return (
    <span
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.group);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.groupCount);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
