import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    border: "1px solid transparent",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.125rem",
    paddingBottom: "0.125rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: "1rem",
    width: "fit-content",
    whiteSpace: "nowrap",
    flexShrink: 0,
    gap: "0.25rem",
    overflow: "hidden",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    outline: "none",
  },
  default: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.secondaryForeground,
  },
  destructive: {
    backgroundColor: colors.destructive,
    color: colors.primaryForeground,
  },
  outline: {
    color: colors.foreground,
    borderColor: colors.border,
  },
});

