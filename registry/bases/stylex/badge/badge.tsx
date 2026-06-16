import type { StyleXStyles } from "@stylexjs/stylex";
import { styles } from "./badge.stylex";

import { cx, x } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const variantMap: Record<BadgeVariant, StyleXStyles> = {
  default: styles.default,
  secondary: styles.secondary,
  destructive: styles.destructive,
  outline: styles.outline,
};

const Badge = ({
  variant = "default",
  className,
  style,
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant }) => {
  const p = x(styles.base, variantMap[variant]);
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Badge };
