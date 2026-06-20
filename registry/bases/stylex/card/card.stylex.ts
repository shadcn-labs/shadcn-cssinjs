import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  action: {
    alignSelf: "start",
    gridColumnStart: "2",
    gridRowEnd: "3",
    gridRowStart: "1",
    justifySelf: "end",
  },
  card: {
    backgroundColor: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.xl,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: colors.cardForeground,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    paddingBottom: "1.5rem",
    paddingTop: "1.5rem",
  },
  content: {
    paddingInline: "1.5rem",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  footer: {
    alignItems: "center",
    display: "flex",
    paddingInline: "1.5rem",
  },
  header: {
    alignItems: "start",
    display: "grid",
    gap: "0.375rem",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "auto auto",
    paddingInline: "1.5rem",
  },
  title: {
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1,
  },
});
