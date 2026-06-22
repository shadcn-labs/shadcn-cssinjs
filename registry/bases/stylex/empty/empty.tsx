import { cx, x } from "@/lib/utils";

import { styles } from "./empty.stylex";

const Empty = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  const p = x(styles.empty);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="empty"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const EmptyHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.header);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="empty-header"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const EmptyMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" }) => {
  const p = x(
    styles.mediaBase,
    variant === "icon" ? styles.mediaIcon : styles.mediaDefault
  );
  return (
    <div
      className={cx(p.className, className)}
      data-slot="empty-icon"
      data-variant={variant}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const EmptyTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.title);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="empty-title"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const EmptyDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => {
  const p = x(styles.description);
  return (
    <p
      className={cx(p.className, className)}
      data-slot="empty-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const EmptyContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.content);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="empty-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
