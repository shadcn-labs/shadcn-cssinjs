import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const alert = css.compose({
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
  "--padding-block": 3,
  "--padding-inline": 4,
  "--position": "relative",
  "--width": "var(---, 100%)",

  variants: {
    variant: {
      default: {
        "--background-color": "var(--color_card)",
        "--color": "var(--color_card-foreground)",
      },
      destructive: {
        "--background-color": "var(--color_card)",
        "--color": "var(--color_destructive)",
      },
    },
  },
});

const title = css.compose({
  "--font-weight": 500,
  "--letter-spacing": "var(---, -0.025em)",
  "--line-height": "var(---, 1.2)",
  "--margin-bottom": 1,
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
});

const Alert = ({
  variant = "default",
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  variant?: "default" | "destructive";
}) => {
  const [cn, sx] = alert({ variant });
  return (
    <div
      className={cn(className)}
      data-slot="alert"
      data-variant={variant}
      role="alert"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = title();
  return (
    <div
      className={cn(className)}
      data-slot="alert-title"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = description();
  return (
    <div
      className={cn(className)}
      data-slot="alert-description"
      style={sx(style)}
      {...props}
    />
  );
};

export { Alert, AlertDescription, AlertTitle };
