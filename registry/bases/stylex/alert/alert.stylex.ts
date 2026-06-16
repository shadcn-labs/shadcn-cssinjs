import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    position: "relative",
    width: "100%",
    borderRadius: radius.md,
    border: `1px solid ${colors.border}`,
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  default: {
    backgroundColor: colors.card,
    color: colors.cardForeground,
  },
  destructive: {
    backgroundColor: colors.card,
    color: colors.destructive,
  },
  title: {
    lineHeight: 1.2,
    fontWeight: 500,
    letterSpacing: "-0.025em",
    marginBottom: "0.25rem",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
});

