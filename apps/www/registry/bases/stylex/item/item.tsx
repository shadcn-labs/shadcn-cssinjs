import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

import { Separator } from "../separator/separator";
import { styles } from "./item.stylex";

type ItemVariant = "default" | "outline" | "muted";
type ItemSize = "default" | "sm" | "xs";

const variantStyles: Record<ItemVariant, StyleXStyles> = {
  default: null,
  muted: styles.variantMuted,
  outline: styles.variantOutline,
};

const sizeStyles: Record<ItemSize, StyleXStyles> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  xs: styles.sizeXs,
};

const mediaVariantStyles: Record<"default" | "icon" | "image", StyleXStyles> = {
  default: styles.mediaDefault,
  icon: styles.mediaIcon,
  image: styles.mediaImage,
};

const ItemGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.group);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-group"
      role="list"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  const p = stylex.props(styles.separator);
  return (
    <Separator
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-separator"
      orientation="horizontal"
      {...props}
    />
  );
};

const Item = ({
  className,
  style,
  variant = "default",
  size = "default",
  render,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ItemVariant;
  size?: ItemSize;
  render?: useRender.RenderProp;
}) => {
  const p = stylex.props(styles.base, variantStyles[variant], sizeStyles[size]);
  return useRender({
    props: {
      className:
        [p.className, className].filter(Boolean).join(" ") || undefined,
      "data-size": size,
      "data-slot": "item",
      "data-variant": variant,
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <div />,
  });
};

const ItemMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "icon" | "image";
}) => {
  const p = stylex.props(styles.mediaBase, mediaVariantStyles[variant]);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-media"
      data-variant={variant}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.content);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.title);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-title"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => {
  const p = stylex.props(styles.description);
  return (
    <p
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemActions = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.actions);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-actions"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.header);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-header"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ItemFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.footer);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="item-footer"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
