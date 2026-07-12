import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.25rem",
  },
  root: {
    alignItems: "center",
    backgroundColor: "color-mix(in oklab, currentColor 5%, transparent)",
    borderRadius: radius.sm,
    boxShadow:
      "inset 0 -1px 2px 0 color-mix(in oklab, currentColor 10%, transparent)",
    color: colors.mutedForeground,
    display: "inline-flex",
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    fontWeight: 400,
    gap: "0.25rem",
    height: "1.25rem",
    justifyContent: "center",
    lineHeight: "1rem",
    minWidth: "1.25rem",
    paddingInline: "0.25rem",
    pointerEvents: "none",
    userSelect: "none",
    width: "fit-content",
  },
});
