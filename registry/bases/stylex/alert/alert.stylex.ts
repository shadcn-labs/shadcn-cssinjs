import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    border: `1px solid ${colors.border}`,
    borderRadius: radius.md,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    paddingBottom: "0.75rem",
    paddingInline: "1rem",
    paddingTop: "0.75rem",
    position: "relative",
    width: "100%",
  },
  default: {
    backgroundColor: colors.card,
    color: colors.cardForeground,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  destructive: {
    backgroundColor: colors.card,
    color: colors.destructive,
  },
  title: {
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
    marginBottom: "0.25rem",
  },
});
