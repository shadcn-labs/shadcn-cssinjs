import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  group: {
    backgroundColor: colors.border,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "1px",
    overflow: "hidden",
  },
  root: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
  },
  separator: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
  },
  slot: {
    backgroundColor: colors.background,
    borderWidth: 0,
    boxShadow: {
      ":focus": `inset 0 0 0 2px ${colors.ring}`,
      default: null,
    },
    color: colors.foreground,
    fontSize: "0.875rem",
    height: "2.25rem",
    outline: "none",
    textAlign: "center",
    transition: "box-shadow 0.15s ease-in-out",
    width: "2.25rem",
  },
});
