import { css, cx } from "styled-system/css";

const SPACING = "var(--card-spacing, 1.5rem)";

const card = css({
  backgroundColor: "card",
  borderColor: "border",
  borderRadius: "xl",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  color: "card.foreground",
  display: "flex",
  flexDirection: "column",
  gap: SPACING,
  paddingBlock: SPACING,
});

const header = css({
  "&:has([data-slot=card-action])": {
    gridTemplateColumns: "1fr auto",
  },
  alignItems: "start",
  display: "grid",
  gap: "0.375rem",
  gridAutoRows: "min-content",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  paddingInline: SPACING,
});

const title = css({
  fontWeight: "semibold",
  letterSpacing: "-0.025em",
  lineHeight: "1",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

const action = css({
  alignSelf: "start",
  gridColumnStart: "2",
  gridRowEnd: "3",
  gridRowStart: "1",
  justifySelf: "end",
});

const content = css({
  paddingInline: SPACING,
});

const footer = css({
  alignItems: "center",
  display: "flex",
  paddingInline: SPACING,
});

type DivProps = React.ComponentProps<"div">;

const Card = ({
  className,
  style,
  size = "default",
  ...props
}: DivProps & { size?: "default" | "sm" }) => (
  <div
    className={cx(card, className)}
    data-size={size}
    data-slot="card"
    style={
      size === "sm"
        ? ({ "--card-spacing": "0.75rem", ...style } as React.CSSProperties)
        : style
    }
    {...props}
  />
);

const CardHeader = ({ className, ...props }: DivProps) => (
  <div className={cx(header, className)} data-slot="card-header" {...props} />
);

const CardTitle = ({ className, ...props }: DivProps) => (
  <div className={cx(title, className)} data-slot="card-title" {...props} />
);

const CardDescription = ({ className, ...props }: DivProps) => (
  <div
    className={cx(description, className)}
    data-slot="card-description"
    {...props}
  />
);

const CardAction = ({ className, ...props }: DivProps) => (
  <div className={cx(action, className)} data-slot="card-action" {...props} />
);

const CardContent = ({ className, ...props }: DivProps) => (
  <div className={cx(content, className)} data-slot="card-content" {...props} />
);

const CardFooter = ({ className, ...props }: DivProps) => (
  <div className={cx(footer, className)} data-slot="card-footer" {...props} />
);

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
