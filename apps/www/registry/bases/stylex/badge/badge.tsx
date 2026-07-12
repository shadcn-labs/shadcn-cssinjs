import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { styles } from "./badge.stylex";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const variantMap: Record<BadgeVariant, StyleXStyles> = {
  default: styles.default,
  destructive: styles.destructive,
  outline: styles.outline,
  secondary: styles.secondary,
};

const Badge = ({
  variant = "default",
  className,
  style,
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant }) => {
  const p = stylex.props(styles.base, variantMap[variant]);
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Badge };
