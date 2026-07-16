import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  base: {
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: radius.md,
    display: "inline-flex",
    flexShrink: 0,
    fontSize: "0.75rem",
    fontWeight: 600,
    gap: "0.25rem",
    justifyContent: "center",
    lineHeight: "1rem",
    outline: "none",
    overflow: "hidden",
    paddingBottom: "0.125rem",
    paddingInline: "0.5rem",
    paddingTop: "0.125rem",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
  default: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
  },
  destructive: {
    backgroundColor: colors.destructive,
    color: colors.primaryForeground,
  },
  outline: {
    borderColor: colors.border,
    color: colors.foreground,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.secondaryForeground,
  },
});

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
}: React.ComponentProps<"span"> & { variant?: BadgeVariant }) => (
  <span
    data-slot="badge"
    data-variant={variant}
    {...stylex.props(
      styles.base,
      variantMap[variant],
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Badge };
