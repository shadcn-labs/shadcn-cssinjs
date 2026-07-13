import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Children, isValidElement } from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  action: {
    alignSelf: "center",
    gridColumnStart: "3",
    gridRowEnd: "3",
    gridRowStart: "1",
    justifySelf: "end",
    marginInlineStart: "1rem",
  },
  base: {
    alignItems: "start",
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: "1px",
    columnGap: 0,
    display: "grid",
    fontSize: "0.875rem",
    gridTemplateColumns: "0 1fr",
    lineHeight: "1.25rem",
    paddingBottom: "0.75rem",
    paddingInline: "1rem",
    paddingTop: "0.75rem",
    position: "relative",
    rowGap: "0.125rem",
    width: "100%",
  },
  default: {
    backgroundColor: colors.card,
    color: colors.cardForeground,
  },
  description: {
    color: colors.mutedForeground,
    display: "grid",
    fontSize: "0.875rem",
    justifyItems: "start",
    lineHeight: "1.25rem",
    rowGap: "0.25rem",
  },
  descriptionWithIcon: {
    gridColumnStart: "2",
  },
  destructive: {
    backgroundColor: colors.card,
    color: colors.destructive,
  },
  title: {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    minHeight: "1rem",
    overflow: "hidden",
  },
  titleWithIcon: {
    gridColumnStart: "2",
  },
  withIcon: {
    columnGap: "0.75rem",
    gridTemplateColumns: "1rem 1fr",
  },
});

type AlertVariant = "default" | "destructive";

const CONTENT_SLOTS = new Set([
  "alert-title",
  "alert-description",
  "alert-action",
]);

const getSlot = (child: React.ReactNode) =>
  isValidElement(child)
    ? (child.props as { "data-slot"?: string })["data-slot"]
    : undefined;

const hasIcon = (children: React.ReactNode) =>
  Children.toArray(children).some((child) => {
    if (!isValidElement(child)) {
      return false;
    }
    const slot = getSlot(child);
    return !slot || !CONTENT_SLOTS.has(slot);
  });

const Alert = ({
  variant = "default",
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & { variant?: AlertVariant }) => {
  const icon = hasIcon(children);
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      {...stylex.props(
        styles.base,
        stylex.defaultMarker(),
        variant === "destructive" ? styles.destructive : styles.default,
        icon && styles.withIcon,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="alert-title"
    {...stylex.props(
      styles.title,
      styles.titleWithIcon,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const AlertDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="alert-description"
    {...stylex.props(
      styles.description,
      styles.descriptionWithIcon,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const AlertAction = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="alert-action"
    {...stylex.props(
      styles.action,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Alert, AlertAction, AlertDescription, AlertTitle };
