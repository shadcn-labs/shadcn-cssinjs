import { css, cva, cx } from "styled-system/css";

const alert = cva({
  base: {
    borderColor: "border",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    paddingBlock: "3",
    paddingInline: "4",
    position: "relative",
    width: "100%",
  },
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "card",
        color: "card.foreground",
      },
      destructive: {
        backgroundColor: "card",
        color: "destructive",
      },
    },
  },
});

const title = css({
  fontWeight: "medium",
  letterSpacing: "-0.025em",
  lineHeight: "1.2",
  marginBottom: "1",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

const Alert = ({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "destructive";
}) => (
  <div
    className={cx(alert({ variant }), className)}
    data-slot="alert"
    data-variant={variant}
    role="alert"
    {...props}
  />
);

const AlertTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(title, className)} data-slot="alert-title" {...props} />
);

const AlertDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(description, className)}
    data-slot="alert-description"
    {...props}
  />
);

export { Alert, AlertDescription, AlertTitle };
