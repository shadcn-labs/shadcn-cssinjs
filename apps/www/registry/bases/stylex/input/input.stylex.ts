import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    "::file-selector-button": {
      backgroundColor: "transparent",
      border: "none",
      color: colors.foreground,
      fontSize: "0.875rem",
      fontWeight: 500,
      marginInlineEnd: "0.5rem",
    },
    "::placeholder": {
      color: colors.mutedForeground,
    },
    "::selection": {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    },
    backgroundColor: "transparent",
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "auto" },
    display: "flex",
    fontSize: "0.875rem",
    height: "2.25rem",
    lineHeight: "1.25rem",
    minWidth: 0,
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "0.25rem",
    paddingInline: "0.75rem",
    paddingTop: "0.25rem",
    transition:
      "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out",
    width: "100%",
  },
});
