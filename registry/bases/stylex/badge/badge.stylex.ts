import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
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
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
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
