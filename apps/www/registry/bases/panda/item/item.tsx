import { useRender } from "@base-ui/react";
import { css, cva, cx } from "styled-system/css";

import { Separator } from "../separator/separator";

const base = cva({
  base: {
    _focusVisible: {
      borderColor: "ring",
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    alignItems: "center",
    borderColor: "transparent",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    outlineStyle: "none",
    transitionDuration: "100ms",
    transitionProperty: "color, background-color, border-color",
  },
  defaultVariants: { size: "default", variant: "default" },
  variants: {
    size: {
      default: { gap: "4", padding: "4" },
      sm: { gap: "2.5", paddingBlock: "3", paddingInline: "4" },
      xs: { gap: "2", paddingBlock: "2", paddingInline: "3" },
    },
    variant: {
      default: {},
      muted: {
        backgroundColor: "color-mix(in oklab, var(--muted) 50%, transparent)",
      },
      outline: { borderColor: "border" },
    },
  },
});

const group = css({
  display: "flex",
  flexDirection: "column",
});

const itemSeparator = css({
  marginBlock: "0",
});

const mediaBase = cva({
  base: {
    alignItems: "center",
    display: "flex",
    flexShrink: "0",
    gap: "2",
    justifyContent: "center",
  },
  defaultVariants: { variant: "default" },
  variants: {
    variant: {
      default: { backgroundColor: "transparent" },
      icon: {
        backgroundColor: "muted",
        borderColor: "border",
        borderRadius: "sm",
        borderStyle: "solid",
        borderWidth: "1px",
        height: "8",
        width: "8",
      },
      image: {
        borderRadius: "sm",
        height: "10",
        overflow: "hidden",
        width: "10",
      },
    },
  },
});

const content = css({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  gap: "1",
});

const title = css({
  alignItems: "center",
  display: "flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "2",
  lineHeight: "1.375",
  width: "fit-content",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  fontWeight: "normal",
  lineHeight: "1.5",
  textWrap: "balance",
});

const actions = css({
  alignItems: "center",
  display: "flex",
  gap: "2",
});

const headerFooter = css({
  alignItems: "center",
  display: "flex",
  flexBasis: "100%",
  gap: "2",
  justifyContent: "space-between",
});

type ItemVariant = "default" | "outline" | "muted";
type ItemSize = "default" | "sm" | "xs";

const ItemGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(group, className)}
    data-slot="item-group"
    role="list"
    {...props}
  />
);

const ItemSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => (
  <Separator
    className={cx(itemSeparator, className)}
    data-slot="item-separator"
    orientation="horizontal"
    {...props}
  />
);

const Item = ({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ItemVariant;
  size?: ItemSize;
  render?: useRender.RenderProp;
}) =>
  useRender({
    props: {
      className: cx(base({ size, variant }), className),
      "data-size": size,
      "data-slot": "item",
      "data-variant": variant,
      ...props,
    },
    render: render ?? <div />,
  });

const ItemMedia = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "icon" | "image";
}) => (
  <div
    className={cx(mediaBase({ variant }), className)}
    data-slot="item-media"
    data-variant={variant}
    {...props}
  />
);

const ItemContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(content, className)} data-slot="item-content" {...props} />
);

const ItemTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(title, className)} data-slot="item-title" {...props} />
);

const ItemDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    className={cx(description, className)}
    data-slot="item-description"
    {...props}
  />
);

const ItemActions = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(actions, className)} data-slot="item-actions" {...props} />
);

const ItemHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(headerFooter, className)}
    data-slot="item-header"
    {...props}
  />
);

const ItemFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(headerFooter, className)}
    data-slot="item-footer"
    {...props}
  />
);

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
