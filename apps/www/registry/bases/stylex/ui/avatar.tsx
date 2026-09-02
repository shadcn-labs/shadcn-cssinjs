"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  badge: {
    alignItems: "center",
    backgroundBlendMode: "color",
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    bottom: 0,
    boxShadow: `0 0 0 2px ${colors.background}`,
    color: colors.primaryForeground,
    display: "inline-flex",
    height: "0.625rem",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    userSelect: "none",
    width: "0.625rem",
    zIndex: 10,
  },
  badgeLg: {
    height: "0.75rem",
    width: "0.75rem",
  },
  badgeSm: {
    height: "0.5rem",
    width: "0.5rem",
  },
  fallback: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.full,
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
    marginLeft: {
      ":first-child": 0,
      default: "0.5rem",
    },
  },
  groupCount: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.full,
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
  groupCountLg: {
    height: "2.5rem",
    width: "2.5rem",
  },
  groupCountSm: {
    height: "1.5rem",
    width: "1.5rem",
  },
  image: {
    aspectRatio: "1 / 1",
    borderRadius: radius.full,
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  root: {
    "::after": {
      borderColor: colors.border,
      borderRadius: radius.full,
      borderStyle: "solid",
      borderWidth: 1,
      content: '""',
      inset: 0,
      mixBlendMode: {
        "@media (prefers-color-scheme: dark)": "lighten",
        default: "darken",
      },
      position: "absolute",
    },
    borderRadius: radius.full,
    display: "flex",
    flexShrink: 0,
    height: "2rem",
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

export type AvatarSize = "default" | "sm" | "lg";

export type AvatarProps = Omit<AvatarPrimitive.Root.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
  size?: AvatarSize;
};

const Avatar = ({
  className,
  size = "default",
  style,
  ...props
}: AvatarProps) => (
  <AvatarPrimitive.Root
    data-slot="avatar"
    data-size={size}
    {...stylex.props(
      styles.root,
      size === "sm" && styles.rootSm,
      size === "lg" && styles.rootLg,
      customClassName(className),
      style
    )}
    {...props}
  />
);

export type AvatarImageProps = Omit<AvatarPrimitive.Image.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const AvatarImage = ({ className, style, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    {...stylex.props(styles.image, customClassName(className), style)}
    {...props}
  />
);

export type AvatarFallbackProps = Omit<
  AvatarPrimitive.Fallback.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AvatarFallback = ({
  className,
  style,
  ...props
}: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    {...stylex.props(styles.fallback, customClassName(className), style)}
    {...props}
  />
);

export type AvatarBadgeProps = Omit<React.ComponentProps<"span">, "style"> & {
  className?: string;
  style?: StyleXStyles;
  size?: AvatarSize;
};

const AvatarBadge = ({
  className,
  size = "default",
  style,
  ...props
}: AvatarBadgeProps) => (
  <span
    data-slot="avatar-badge"
    {...stylex.props(
      styles.badge,
      size === "sm" && styles.badgeSm,
      size === "lg" && styles.badgeLg,
      customClassName(className),
      style
    )}
    {...props}
  />
);

export type AvatarGroupProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const AvatarGroup = ({
  className,
  style,
  children,
  ...props
}: AvatarGroupProps) => (
  <div
    data-slot="avatar-group"
    {...stylex.props(styles.group, customClassName(className), style)}
    {...props}
  >
    {React.Children.map(children, (child) =>
      React.isValidElement<{ style?: React.CSSProperties }>(child)
        ? React.cloneElement(child, {
            style: {
              boxShadow: "0 0 0 2px var(--background)",
              marginLeft: "-0.5rem",
              ...child.props.style,
            },
          })
        : child
    )}
  </div>
);

export type AvatarGroupCountProps = Omit<
  React.ComponentProps<"div">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
  size?: AvatarSize;
};

const AvatarGroupCount = ({
  className,
  size = "default",
  style,
  ...props
}: AvatarGroupCountProps) => (
  <div
    data-slot="avatar-group-count"
    {...stylex.props(
      styles.groupCount,
      size === "sm" && styles.groupCountSm,
      size === "lg" && styles.groupCountLg,
      customClassName(className),
      style
    )}
    {...props}
  />
);

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
  styles as avatarStyles,
};
