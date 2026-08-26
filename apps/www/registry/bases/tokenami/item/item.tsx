import { useRender } from "@base-ui/react";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

import { Separator } from "../separator/separator";

const base = css.compose({
  "--align-items": "center",
  "--border-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--display": "flex",
  "--flex-wrap": "wrap",
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--outline-style": "none",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, color, background-color, border-color)",

  variants: {
    size: {
      default: { "--gap": 4, "--padding": 4 },
      sm: { "--gap": 2.5, "--padding-block": 3, "--padding-inline": 4 },
      xs: { "--gap": 2, "--padding-block": 2, "--padding-inline": 3 },
    },
    variant: {
      default: {},
      muted: {
        "--background-color":
          "var(---, color-mix(in oklab, var(--color_muted) 50%, transparent))",
      },
      outline: { "--border-color": "var(--color_border)" },
    },
  },
});

const group = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
});

const itemSeparator = css.compose({
  "--margin-block": 0,
});

const mediaBase = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-shrink": "var(---, 0)",
  "--gap": 2,
  "--justify-content": "center",

  variants: {
    variant: {
      default: { "--background-color": "var(--color_transparent)" },
      icon: {
        "--background-color": "var(--color_muted)",
        "--border-color": "var(--color_border)",
        "--border-radius": "var(--radii_sm)",
        "--border-style": "solid",
        "--border-width": "var(---, 1px)",
        "--height": 8,
        "--width": 8,
      },
      image: {
        "--border-radius": "var(--radii_sm)",
        "--height": 10,
        "--overflow": "hidden",
        "--width": 10,
      },
    },
  },
});

const content = css.compose({
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--flex-direction": "column",
  "--gap": 1,
});

const title = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--line-height": "var(---, 1.375)",
  "--width": "var(---, fit-content)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--font-weight": 400,
  "--line-height": "var(---, 1.5)",
  "--text-wrap": "balance",
});

const actions = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 2,
});

const headerFooter = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-basis": "var(---, 100%)",
  "--gap": 2,
  "--justify-content": "space-between",
});

type ItemVariant = "default" | "outline" | "muted";
type ItemSize = "default" | "sm" | "xs";

const ItemGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = group();
  return (
    <div
      className={cn(className)}
      data-slot="item-group"
      role="list"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  const [cn] = itemSeparator();
  return (
    <Separator
      className={cn(className)}
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
}: TokenamiStyle<React.ComponentProps<"div">> & {
  variant?: ItemVariant;
  size?: ItemSize;
  render?: useRender.RenderProp;
}) => {
  const [cn, sx] = base({ size, variant });
  return useRender({
    props: {
      className: cn(className),
      "data-size": size,
      "data-slot": "item",
      "data-variant": variant,
      style: sx(style),
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
}: TokenamiStyle<React.ComponentProps<"div">> & {
  variant?: "default" | "icon" | "image";
}) => {
  const [cn, sx] = mediaBase({ variant });
  return (
    <div
      className={cn(className)}
      data-slot="item-media"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

const ItemContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = content();
  return (
    <div
      className={cn(className)}
      data-slot="item-content"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = title();
  return (
    <div
      className={cn(className)}
      data-slot="item-title"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"p">>) => {
  const [cn, sx] = description();
  return (
    <p
      className={cn(className)}
      data-slot="item-description"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemActions = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = actions();
  return (
    <div
      className={cn(className)}
      data-slot="item-actions"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = headerFooter();
  return (
    <div
      className={cn(className)}
      data-slot="item-header"
      style={sx(style)}
      {...props}
    />
  );
};

const ItemFooter = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = headerFooter();
  return (
    <div
      className={cn(className)}
      data-slot="item-footer"
      style={sx(style)}
      {...props}
    />
  );
};

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
