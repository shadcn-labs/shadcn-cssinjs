import { css, cva, cx } from "styled-system/css";

const empty = css({
  alignItems: "center",
  borderColor: "border",
  borderRadius: "lg",
  borderStyle: "dashed",
  borderWidth: "1px",
  display: "flex",
  flex: "1",
  flexDirection: "column",
  gap: "6",
  justifyContent: "center",
  md: { padding: "12" },
  minWidth: "0",
  padding: "6",
  textAlign: "center",
  textWrap: "balance",
});

const header = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2",
  maxWidth: "96",
  textAlign: "center",
});

const mediaBase = cva({
  base: {
    alignItems: "center",
    display: "flex",
    flexShrink: "0",
    justifyContent: "center",
    marginBottom: "2",
  },
  defaultVariants: { variant: "default" },
  variants: {
    variant: {
      default: { backgroundColor: "transparent" },
      icon: {
        backgroundColor: "muted",
        borderRadius: "lg",
        color: "foreground",
        height: "10",
        width: "10",
      },
    },
  },
});

const title = css({
  fontSize: "1.125rem",
  fontWeight: "medium",
  letterSpacing: "-0.025em",
  lineHeight: "1.75rem",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  lineHeight: "1.625",
});

const content = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: "0.875rem",
  gap: "4",
  maxWidth: "96",
  minWidth: "0",
  textWrap: "balance",
  width: "100%",
});

const Empty = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(empty, className)} data-slot="empty" {...props} />
);

const EmptyHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(header, className)} data-slot="empty-header" {...props} />
);

const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" }) => (
  <div
    className={cx(mediaBase({ variant }), className)}
    data-slot="empty-icon"
    data-variant={variant}
    {...props}
  />
);

const EmptyTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(title, className)} data-slot="empty-title" {...props} />
);

const EmptyDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    className={cx(description, className)}
    data-slot="empty-description"
    {...props}
  />
);

const EmptyContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(content, className)}
    data-slot="empty-content"
    {...props}
  />
);

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};
