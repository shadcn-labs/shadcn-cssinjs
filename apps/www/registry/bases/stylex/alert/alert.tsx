import * as stylex from "@stylexjs/stylex";
import { Children, isValidElement } from "react";

import { styles } from "./alert.stylex";

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
  const p = stylex.props(
    styles.base,
    stylex.defaultMarker(),
    variant === "destructive" ? styles.destructive : styles.default,
    icon && styles.withIcon
  );
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
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
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.title, styles.titleWithIcon);
  return (
    <div
      data-slot="alert-title"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.description, styles.descriptionWithIcon);
  return (
    <div
      data-slot="alert-description"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertAction = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.action);
  return (
    <div
      data-slot="alert-action"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Alert, AlertAction, AlertDescription, AlertTitle };
