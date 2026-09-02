"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  actions: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
  },
  content: {
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    gap: "0.25rem",
  },
  contentXs: {
    gap: 0,
  },
  description: {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    color: colors.mutedForeground,
    display: "-webkit-box",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.3125rem",
    margin: 0,
    overflow: "hidden",
    textAlign: "left",
  },
  descriptionXs: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  footer: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  itemBase: {
    alignItems: "center",
    borderColor: {
      ":focus-visible": colors.ring,
      default: "transparent",
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    transitionDuration: "100ms",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    width: "100%",
  },
  itemGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  itemSeparator: {
    marginBlock: "0.5rem",
  },
  mediaBase: {
    alignItems: "center",
    alignSelf: "start",
    display: "flex",
    flexShrink: 0,
    gap: "0.5rem",
    justifyContent: "center",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {},
  mediaImage: {
    borderRadius: radius.md,
    height: "2.5rem",
    overflow: "hidden",
    width: "2.5rem",
  },
  mediaImageSm: {
    height: "2rem",
    width: "2rem",
  },
  mediaImageXs: {
    height: "1.5rem",
    width: "1.5rem",
  },
  sizeDefault: {
    gap: "0.625rem",
    paddingBlock: "0.625rem",
    paddingInline: "0.75rem",
  },
  sizeSm: {
    gap: "0.625rem",
    paddingBlock: "0.625rem",
    paddingInline: "0.75rem",
  },
  sizeXs: {
    gap: "0.5rem",
    paddingBlock: "0.5rem",
    paddingInline: "0.625rem",
  },
  title: {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    alignItems: "center",
    display: "-webkit-box",
    displayFlex: "flex",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: "1.375",
    margin: 0,
    overflow: "hidden",
    textUnderlineOffset: "4px",
    width: "fit-content",
  },
  variantDefault: {
    borderColor: "transparent",
  },
  variantMuted: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderColor: "transparent",
  },
  variantOutline: {
    borderColor: colors.border,
  },
});

type ItemVariant = "default" | "outline" | "muted";
type ItemSize = "default" | "sm" | "xs";
type ItemMediaVariant = "default" | "icon" | "image";

interface ItemContextValue {
  size?: ItemSize;
}

const ItemContext = React.createContext<ItemContextValue>({
  size: "default",
});

const variantStyles: Record<ItemVariant, StyleXStyles> = {
  default: styles.variantDefault,
  muted: styles.variantMuted,
  outline: styles.variantOutline,
};

const sizeStyles: Record<ItemSize, StyleXStyles> = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  xs: styles.sizeXs,
};

const mediaVariantStyles: Record<ItemMediaVariant, StyleXStyles> = {
  default: styles.mediaDefault,
  icon: styles.mediaIcon,
  image: styles.mediaImage,
};

type ItemGroupProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemGroup = ({ className, style, ...props }: ItemGroupProps) => (
  <div
    role="list"
    data-slot="item-group"
    {...stylex.props(
      styles.itemGroup,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

type ItemSeparatorProps = Omit<
  React.ComponentProps<typeof Separator>,
  "style"
> & {
  style?: StyleXStyles;
};

const ItemSeparator = ({ className, style, ...props }: ItemSeparatorProps) => (
  <Separator
    data-slot="item-separator"
    orientation="horizontal"
    {...stylex.props(
      styles.itemSeparator,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

type ItemProps = Omit<useRender.ComponentProps<"div">, "style"> & {
  variant?: ItemVariant;
  size?: ItemSize;
  style?: StyleXStyles;
};

const Item = ({
  className,
  style,
  variant = "default",
  size = "default",
  render,
  ...props
}: ItemProps) => (
  <ItemContext.Provider value={{ size }}>
    {useRender({
      defaultTagName: "div",
      props: mergeProps(
        {
          "data-size": size,
          "data-slot": "item",
          "data-variant": variant,
          ...stylex.props(
            styles.itemBase,
            variantStyles[variant],
            sizeStyles[size],
            customClassName(className),
            style as StyleXStyles
          ),
        },
        props
      ),
      render,
      state: {
        size,
        slot: "item",
        variant,
      },
    })}
  </ItemContext.Provider>
);

type ItemMediaProps = Omit<React.ComponentProps<"div">, "style"> & {
  variant?: ItemMediaVariant;
  style?: StyleXStyles;
};

const ItemMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: ItemMediaProps) => {
  const { size } = React.useContext(ItemContext);

  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      {...stylex.props(
        styles.mediaBase,
        mediaVariantStyles[variant],
        variant === "image" && size === "sm" && styles.mediaImageSm,
        variant === "image" && size === "xs" && styles.mediaImageXs,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

type ItemContentProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemContent = ({ className, style, ...props }: ItemContentProps) => {
  const { size } = React.useContext(ItemContext);

  return (
    <div
      data-slot="item-content"
      {...stylex.props(
        styles.content,
        size === "xs" && styles.contentXs,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

type ItemTitleProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemTitle = ({ className, style, ...props }: ItemTitleProps) => (
  <div
    data-slot="item-title"
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

type ItemDescriptionProps = Omit<React.ComponentProps<"p">, "style"> & {
  style?: StyleXStyles;
};

const ItemDescription = ({
  className,
  style,
  ...props
}: ItemDescriptionProps) => {
  const { size } = React.useContext(ItemContext);

  return (
    <p
      data-slot="item-description"
      {...stylex.props(
        styles.description,
        size === "xs" && styles.descriptionXs,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  );
};

type ItemActionsProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemActions = ({ className, style, ...props }: ItemActionsProps) => (
  <div
    data-slot="item-actions"
    {...stylex.props(
      styles.actions,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

type ItemHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemHeader = ({ className, style, ...props }: ItemHeaderProps) => (
  <div
    data-slot="item-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

type ItemFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const ItemFooter = ({ className, style, ...props }: ItemFooterProps) => (
  <div
    data-slot="item-footer"
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
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
