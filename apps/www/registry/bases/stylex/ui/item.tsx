import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  actions: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
  },
  base: {
    alignItems: "center",
    border: "1px solid transparent",
    borderColor: {
      ":focus-visible": colors.ring,
      default: "transparent",
    },
    borderRadius: radius.md,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    outline: "none",
    transitionDuration: "100ms",
    transitionProperty: "color, background-color, border-color",
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.25rem",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    textWrap: "balance",
  },
  footer: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  group: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  mediaBase: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    gap: "0.5rem",
    justifyContent: "center",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {
    backgroundColor: colors.muted,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.sm,
    height: "2rem",
    width: "2rem",
  },
  mediaImage: {
    borderRadius: radius.sm,
    height: "2.5rem",
    overflow: "hidden",
    width: "2.5rem",
  },
  separator: {
    marginBlock: 0,
  },
  sizeDefault: {
    gap: "1rem",
    padding: "1rem",
  },
  sizeSm: {
    gap: "0.625rem",
    paddingBlock: "0.75rem",
    paddingInline: "1rem",
  },
  sizeXs: {
    gap: "0.5rem",
    paddingBlock: "0.5rem",
    paddingInline: "0.75rem",
  },
  title: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: 1.375,
    width: "fit-content",
  },
  variantMuted: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
  },
  variantOutline: {
    borderColor: colors.border,
  },
});

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
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
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
    {...stylex.props(styles.separator, customClassName(className))}
    data-slot="item-separator"
    orientation="horizontal"
    {...props}
  />
);

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
}) =>
  useRender({
    props: {
      ...stylex.props(
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        customClassName(className),
        style as StyleXStyles
      ),
      "data-size": size,
      "data-slot": "item",
      "data-variant": variant,
      ...props,
    },
    render: render ?? <div />,
  });

const ItemMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "icon" | "image";
}) => (
  <div
    {...stylex.props(
      styles.mediaBase,
      mediaVariantStyles[variant],
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-media"
    data-variant={variant}
    {...props}
  />
);

const ItemContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-content"
    {...props}
  />
);

const ItemTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-title"
    {...props}
  />
);

const ItemDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-description"
    {...props}
  />
);

const ItemActions = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.actions,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-actions"
    {...props}
  />
);

const ItemHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-header"
    {...props}
  />
);

const ItemFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="item-footer"
    {...props}
  />
);

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
