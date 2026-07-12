import * as stylex from "@stylexjs/stylex";

import { styles } from "./empty.stylex";

const Empty = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.empty);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.header);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(
    styles.mediaBase,
    variant === "icon" ? styles.mediaIcon : styles.mediaDefault
  );
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.title);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.description);
  return (
    <p
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.content);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
