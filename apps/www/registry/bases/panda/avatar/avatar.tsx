"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { Children, cloneElement, isValidElement } from "react";
import { css, cva, cx } from "styled-system/css";

const root = cva({
  base: {
    borderRadius: "full",
    display: "flex",
    flexShrink: "0",
    height: "8",
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    width: "8",
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: {},
      lg: { height: "10", width: "10" },
      sm: { height: "6", width: "6" },
    },
  },
});

const image = css({
  aspectRatio: "1 / 1",
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

const fallback = css({
  alignItems: "center",
  backgroundColor: "muted",
  borderRadius: "full",
  color: "muted.foreground",
  display: "flex",
  fontSize: "0.875rem",
  height: "100%",
  justifyContent: "center",
  width: "100%",
});

const badge = css({
  alignItems: "center",
  backgroundColor: "primary",
  borderRadius: "full",
  bottom: "0",
  boxShadow: "0 0 0 2px var(--background)",
  color: "primary.foreground",
  display: "inline-flex",
  height: "2.5",
  insetInlineEnd: "0",
  justifyContent: "center",
  position: "absolute",
  userSelect: "none",
  width: "2.5",
  zIndex: "10",
});

const group = css({
  display: "flex",
});

const groupCount = css({
  alignItems: "center",
  backgroundColor: "muted",
  borderRadius: "full",
  boxShadow: "0 0 0 2px var(--background)",
  color: "muted.foreground",
  display: "flex",
  flexShrink: "0",
  fontSize: "0.875rem",
  height: "8",
  justifyContent: "center",
  marginInlineStart: "-0.5rem",
  position: "relative",
  width: "8",
});

type AvatarSize = "default" | "sm" | "lg";

const Avatar = ({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "className"> & {
  className?: string;
  size?: AvatarSize;
}) => (
  <AvatarPrimitive.Root
    className={cx(root({ size }), className)}
    data-size={size}
    data-slot="avatar"
    {...props}
  />
);

const AvatarImage = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, "className"> & {
  className?: string;
}) => (
  <AvatarPrimitive.Image
    className={cx(image, className)}
    data-slot="avatar-image"
    {...props}
  />
);

const AvatarFallback = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, "className"> & {
  className?: string;
}) => (
  <AvatarPrimitive.Fallback
    className={cx(fallback, className)}
    data-slot="avatar-fallback"
    {...props}
  />
);

const AvatarBadge = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(badge, className)} data-slot="avatar-badge" {...props} />
);

const AvatarGroup = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cx(group, className)} data-slot="avatar-group" {...props}>
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
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(groupCount, className)}
    data-slot="avatar-group-count"
    {...props}
  />
);

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
