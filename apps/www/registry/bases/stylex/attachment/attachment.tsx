"use client";

import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

import { styles } from "./attachment.stylex";

type AttachmentSize = "default" | "sm" | "xs";
type AttachmentOrientation = "horizontal" | "vertical";
const sizeStyles: Record<AttachmentSize, StyleXStyles> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  xs: styles.sizeXs,
};
const orientationStyles: Record<AttachmentOrientation, StyleXStyles> = {
  horizontal: styles.horizontal,
  vertical: styles.vertical,
};

const Attachment = ({
  className,
  style,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  state?: "idle" | "uploading" | "processing" | "error" | "done";
  size?: AttachmentSize;
  orientation?: AttachmentOrientation;
}) => {
  const p = x(
    styles.root,
    sizeStyles[size],
    orientationStyles[orientation],
    state === "idle" && styles.idle,
    state === "error" && styles.error
  );
  return (
    <div
      className={cx(p.className, className)}
      data-orientation={orientation}
      data-size={size}
      data-slot="attachment"
      data-state={state}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentMedia = ({
  className,
  style,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & { variant?: "icon" | "image" }) => {
  const p = x(styles.media, variant === "image" && styles.mediaImage);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="attachment-media"
      data-variant={variant}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.content);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="attachment-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.title);
  return (
    <span
      className={cx(p.className, className)}
      data-slot="attachment-title"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.description);
  return (
    <span
      className={cx(p.className, className)}
      data-slot="attachment-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentActions = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.actions);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="attachment-actions"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AttachmentAction = ({
  variant,
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    data-slot="attachment-action"
    size={size}
    variant={variant ?? "ghost"}
    {...props}
  />
);

const AttachmentTrigger = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"button"> & { render?: useRender.RenderProp }) => {
  const p = x(styles.trigger);
  return useRender({
    props: {
      className: cx(p.className, className),
      "data-slot": "attachment-trigger",
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <button type="button" />,
  });
};

const AttachmentGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.group);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="attachment-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
};
