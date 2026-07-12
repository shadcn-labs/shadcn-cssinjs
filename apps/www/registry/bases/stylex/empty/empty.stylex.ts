import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "1rem",
    maxWidth: "24rem",
    minWidth: 0,
    textWrap: "balance",
    width: "100%",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: 1.625,
  },
  empty: {
    alignItems: "center",
    border: `1px dashed ${colors.border}`,
    borderRadius: radius.lg,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center",
    minWidth: 0,
    padding: { "@media (min-width: 768px)": "3rem", default: "1.5rem" },
    textAlign: "center",
    textWrap: "balance",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    maxWidth: "24rem",
    textAlign: "center",
  },
  mediaBase: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {
    backgroundColor: colors.muted,
    borderRadius: radius.lg,
    color: colors.foreground,
    height: "2.5rem",
    width: "2.5rem",
  },
  title: {
    fontSize: "1.125rem",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    lineHeight: "1.75rem",
  },
});
