import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "1rem",
    maxWidth: "24rem",
    minWidth: 0,
    textWrap: "balance",
    width: "100%",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: 1.625,
  },
  empty: {
    alignItems: "center",
    border: `1px dashed ${colors.border}`,
    borderRadius: radius.lg,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center",
    minWidth: 0,
    padding: { "@media (min-width: 768px)": "3rem", default: "1.5rem" },
    textAlign: "center",
    textWrap: "balance",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    maxWidth: "24rem",
    textAlign: "center",
  },
  mediaBase: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {
    backgroundColor: colors.muted,
    borderRadius: radius.lg,
    color: colors.foreground,
    height: "2.5rem",
    width: "2.5rem",
  },
  title: {
    fontSize: "1.125rem",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: "1.75rem",
  },
});

const Empty = ({ className, style, ...props }: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.empty,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty"
    {...props}
  />
);

const EmptyHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty-header"
    {...props}
  />
);

const EmptyMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" }) => (
  <div
    {...stylex.props(
      styles.mediaBase,
      variant === "icon" ? styles.mediaIcon : styles.mediaDefault,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty-icon"
    data-variant={variant}
    {...props}
  />
);

const EmptyTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty-title"
    {...props}
  />
);

const EmptyDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty-description"
    {...props}
  />
);

const EmptyContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="empty-content"
    {...props}
  />
);

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
