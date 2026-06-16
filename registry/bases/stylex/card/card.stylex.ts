import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    borderRadius: radius.xl,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.card,
    color: colors.cardForeground,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  header: {
    display: "grid",
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "1fr auto",
    alignItems: "start",
    gap: "0.375rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  title: {
    lineHeight: 1,
    fontWeight: 600,
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: colors.mutedForeground,
  },
  action: {
    gridColumnStart: "2",
    gridRowStart: "1",
    gridRowEnd: "3",
    alignSelf: "start",
    justifySelf: "end",
  },
  content: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
});

