import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const empty = css.compose({
  "--align-items": "center",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_lg)",
  "--border-style": "dashed",
  "--border-width": "var(---, 1px)",
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--flex-direction": "column",
  "--gap": 6,
  "--justify-content": "center",
  "--md_padding": 12,
  "--min-width": "var(---, 0)",
  "--padding": 6,
  "--text-align": "center",
  "--text-wrap": "balance",
});

const header = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--max-width": 96,
  "--text-align": "center",
});

const mediaBase = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-shrink": "var(---, 0)",
  "--justify-content": "center",
  "--margin-bottom": 2,

  variants: {
    variant: {
      default: { "--background-color": "var(--color_transparent)" },
      icon: {
        "--background-color": "var(--color_muted)",
        "--border-radius": "var(--radii_lg)",
        "--color": "var(--color_foreground)",
        "--height": 10,
        "--width": 10,
      },
    },
  },
});

const title = css.compose({
  "--font-size": "1.125rem",
  "--font-weight": 500,
  "--letter-spacing": "var(---, -0.025em)",
  "--line-height": "var(---, 1.75rem)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.625)",
});

const content = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-direction": "column",
  "--font-size": "0.875rem",
  "--gap": 4,
  "--max-width": 96,
  "--min-width": "var(---, 0)",
  "--text-wrap": "balance",
  "--width": "var(---, 100%)",
});

const Empty = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = empty();
  return (
    <div
      className={cn(className)}
      data-slot="empty"
      style={sx(style)}
      {...props}
    />
  );
};

const EmptyHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="empty-header"
      style={sx(style)}
      {...props}
    />
  );
};

const EmptyMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  variant?: "default" | "icon";
}) => {
  const [cn, sx] = mediaBase({ variant });
  return (
    <div
      className={cn(className)}
      data-slot="empty-icon"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

const EmptyTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = title();
  return (
    <div
      className={cn(className)}
      data-slot="empty-title"
      style={sx(style)}
      {...props}
    />
  );
};

const EmptyDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"p">>) => {
  const [cn, sx] = description();
  return (
    <p
      className={cn(className)}
      data-slot="empty-description"
      style={sx(style)}
      {...props}
    />
  );
};

const EmptyContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = content();
  return (
    <div
      className={cn(className)}
      data-slot="empty-content"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};
