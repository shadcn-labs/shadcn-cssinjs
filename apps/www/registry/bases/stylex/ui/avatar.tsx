"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Children, cloneElement, isValidElement } from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  badge: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: "9999px",
    bottom: 0,
    boxShadow: `0 0 0 2px ${colors.background}`,
    color: colors.primaryForeground,
    display: "inline-flex",
    height: "0.625rem",
    insetInlineEnd: 0,
    justifyContent: "center",
    position: "absolute",
    userSelect: "none",
    width: "0.625rem",
    zIndex: 10,
  },
  fallback: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  fallbackSm: {
    fontSize: "0.75rem",
  },
  group: {
    display: "flex",
  },
  groupCount: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    boxShadow: `0 0 0 2px ${colors.background}`,
    color: colors.mutedForeground,
    display: "flex",
    flexShrink: 0,
    fontSize: "0.875rem",
    height: "2rem",
    justifyContent: "center",
    position: "relative",
    width: "2rem",
  },
  image: {
    aspectRatio: "1 / 1",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  root: {
    borderRadius: "9999px",
    display: "flex",
    flexShrink: 0,
    height: "2rem",
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    width: "2rem",
  },
  rootLg: {
    height: "2.5rem",
    width: "2.5rem",
  },
  rootSm: {
    height: "1.5rem",
    width: "1.5rem",
  },
});

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
}) => (
  <AvatarPrimitive.Root
    {...stylex.props(
      styles.root,
      sizeStyles[size],
      customClassName(className),
      style as StyleXStyles
    )}
    data-size={size}
    data-slot="avatar"
    {...props}
  />
);

const AvatarImage = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, "className"> & {
  className?: string;
}) => (
  <AvatarPrimitive.Image
    {...stylex.props(
      styles.image,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="avatar-image"
    {...props}
  />
);

const AvatarFallback = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, "className"> & {
  className?: string;
}) => (
  <AvatarPrimitive.Fallback
    {...stylex.props(
      styles.fallback,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="avatar-fallback"
    {...props}
  />
);

const AvatarBadge = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    {...stylex.props(
      styles.badge,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="avatar-badge"
    {...props}
  />
);

const AvatarGroup = ({
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="avatar-group"
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

const AvatarGroupCount = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.groupCount,
      customClassName(className),
      { marginInlineStart: "-0.5rem" } as StyleXStyles,
      style as StyleXStyles
    )}
    data-slot="avatar-group-count"
    {...props}
  />
);

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
