import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const SPACING = "var(---, var(--card-spacing, 1.5rem))";

const card = css.compose({
  "--background-color": "var(--color_card)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_xl)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--color": "var(--color_card-foreground)",
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": SPACING,
  "--padding-block": SPACING,
});

const header = css.compose({
  "--align-items": "start",
  "--display": "grid",
  "--gap": "var(---, 0.375rem)",
  "--grid-template-columns": "var(---, 1fr auto)",
  "--grid-template-rows": "var(---, auto auto)",
  "--padding-inline": SPACING,
});

const title = css.compose({
  "--font-weight": 600,
  "--letter-spacing": "var(---, -0.025em)",
  "--line-height": "var(---, 1)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
});

const action = css.compose({
  "--align-self": "start",
  "--grid-column-start": "var(---, 2)",
  "--grid-row-end": "var(---, 3)",
  "--grid-row-start": "var(---, 1)",
  "--justify-self": "end",
});

const content = css.compose({
  "--padding-inline": SPACING,
});

const footer = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--padding-inline": SPACING,
});

type DivProps = TokenamiStyle<React.ComponentProps<"div">>;

const Card = ({
  className,
  style,
  size = "default",
  ...props
}: DivProps & { size?: "default" | "sm" }) => {
  const [cn, sx] = card();
  const resolved = sx(style);
  const withSpacing =
    size === "sm"
      ? ({ ...resolved, "--card-spacing": "0.75rem" } as React.CSSProperties)
      : (resolved as React.CSSProperties);
  return (
    <div
      className={cn(className)}
      data-size={size}
      data-slot="card"
      style={withSpacing}
      {...props}
    />
  );
};

const CardHeader = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="card-header"
      style={sx(style)}
      {...props}
    />
  );
};

const CardTitle = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = title();
  return (
    <div
      className={cn(className)}
      data-slot="card-title"
      style={sx(style)}
      {...props}
    />
  );
};

const CardDescription = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = description();
  return (
    <div
      className={cn(className)}
      data-slot="card-description"
      style={sx(style)}
      {...props}
    />
  );
};

const CardAction = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = action();
  return (
    <div
      className={cn(className)}
      data-slot="card-action"
      style={sx(style)}
      {...props}
    />
  );
};

const CardContent = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = content();
  return (
    <div
      className={cn(className)}
      data-slot="card-content"
      style={sx(style)}
      {...props}
    />
  );
};

const CardFooter = ({ className, style, ...props }: DivProps) => {
  const [cn, sx] = footer();
  return (
    <div
      className={cn(className)}
      data-slot="card-footer"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
