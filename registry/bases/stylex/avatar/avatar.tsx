"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cx, x } from "@/lib/utils";

import { styles } from "./avatar.stylex";

const Avatar = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.root);
  return (
    <AvatarPrimitive.Root
      className={cx(p.className, className)}
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

export { Avatar, AvatarFallback, AvatarImage };
