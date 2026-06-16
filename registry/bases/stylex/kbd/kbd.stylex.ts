import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    display: "inline-flex",
    height: "1.25rem",
    width: "fit-content",
    minWidth: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    borderRadius: radius.sm,
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 400,
    color: colors.mutedForeground,
    backgroundColor: "color-mix(in oklab, currentColor 5%, transparent)",
    boxShadow:
      "inset 0 -1px 2px 0 color-mix(in oklab, currentColor 10%, transparent)",
    userSelect: "none",
    pointerEvents: "none",
  },
  group: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
  },
});

