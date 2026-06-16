import { styles } from "./alert.stylex";

import { cx, x } from "@/lib/utils";

type AlertVariant = "default" | "destructive";

const Alert = ({
  variant = "default",
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & { variant?: AlertVariant }) => {
  const p = x(
    styles.base,
    variant === "destructive" ? styles.destructive : styles.default
  );
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertTitle = ({ className, style, ...props }: React.ComponentProps<"div">) => {
  const p = x(styles.title);
  return (
    <div
      data-slot="alert-title"
      className={cx(p.className, className)}
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
  const p = x(styles.description);
  return (
    <div
      data-slot="alert-description"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Alert, AlertDescription, AlertTitle };
