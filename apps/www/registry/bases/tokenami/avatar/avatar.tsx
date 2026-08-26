"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import type { TokenamiStyle } from "@tokenami/css";
import { Children, cloneElement, isValidElement } from "react";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--border-radius": "var(--radii_full)",
  "--display": "flex",
  "--flex-shrink": 0,
  "--height": 8,
  "--overflow": "hidden",
  "--position": "relative",
  "--user-select": "none",
  "--width": 8,

  variants: {
    size: {
      default: {},
      lg: { "--height": 10, "--width": 10 },
      sm: { "--height": 6, "--width": 6 },
    },
  },
});

const image = css.compose({
  "--aspect-ratio": "var(---, 1 / 1)",
  "--height": "var(---, 100%)",
  "--object-fit": "cover",
  "--width": "var(---, 100%)",
});

const fallback = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_muted)",
  "--border-radius": "var(--radii_full)",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--height": "var(---, 100%)",
  "--justify-content": "center",
  "--width": "var(---, 100%)",
});

const badge = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_primary)",
  "--border-radius": "var(--radii_full)",
  "--bottom": 0,
  "--box-shadow": "var(---, 0 0 0 2px var(--color_background))",
  "--color": "var(--color_primary-foreground)",
  "--display": "inline-flex",
  "--height": 2.5,
  "--inset-inline-end": 0,
  "--justify-content": "center",
  "--position": "absolute",
  "--user-select": "none",
  "--width": 2.5,
  "--z-index": "var(---, 10)",
});

const group = css.compose({
  "--display": "flex",
});

const groupCount = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_muted)",
  "--border-radius": "var(--radii_full)",
  "--box-shadow": "var(---, 0 0 0 2px var(--color_background))",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
  "--flex-shrink": 0,
  "--font-size": "0.875rem",
  "--height": 8,
  "--justify-content": "center",
  "--margin-inline-start": -2,
  "--position": "relative",
  "--width": 8,
});

type AvatarSize = "default" | "sm" | "lg";

const Avatar = ({
  className,
  style,
  size = "default",
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "className" | "style">
> & { className?: string; size?: AvatarSize }) => {
  const [cn, sx] = root({ size });
  return (
    <AvatarPrimitive.Root
      className={cn(className)}
      data-size={size}
      data-slot="avatar"
      style={sx(style)}
      {...props}
    />
  );
};

const AvatarImage = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AvatarPrimitive.Image>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = image();
  return (
    <AvatarPrimitive.Image
      className={cn(className)}
      data-slot="avatar-image"
      style={sx(style)}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AvatarPrimitive.Fallback>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = fallback();
  return (
    <AvatarPrimitive.Fallback
      className={cn(className)}
      data-slot="avatar-fallback"
      style={sx(style)}
      {...props}
    />
  );
};

const AvatarBadge = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = badge();
  return (
    <span
      className={cn(className)}
      data-slot="avatar-badge"
      style={sx(style)}
      {...props}
    />
  );
};

const AvatarGroup = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = group();
  return (
    <div
      className={cn(className)}
      data-slot="avatar-group"
      style={sx(style)}
      {...props}
    >
      {Children.map(children, (child, index) =>
        isValidElement<{ style?: Record<string, unknown> }>(child)
          ? cloneElement(child, {
              style: {
                "--box-shadow": "var(---, 0 0 0 2px var(--color_background))",
                "--margin-inline-start": index === 0 ? 0 : -2,
                ...(child.props.style as Record<string, unknown>),
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
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = groupCount();
  return (
    <div
      className={cn(className)}
      data-slot="avatar-group-count"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
