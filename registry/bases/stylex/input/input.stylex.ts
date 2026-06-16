import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    display: "flex",
    height: "2.25rem",
    width: "100%",
    minWidth: 0,
    borderRadius: radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: colors.input,
      ":focus-visible": colors.ring,
    },
    backgroundColor: "transparent",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: colors.foreground,
    boxShadow: {
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      ":focus-visible":
        `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
    outline: "none",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out",
    cursor: { default: "auto", ":disabled": "not-allowed" },
    opacity: { default: 1, ":disabled": 0.5 },
    "::placeholder": {
      color: colors.mutedForeground,
    },
    "::selection": {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    },
    "::file-selector-button": {
      backgroundColor: "transparent",
      border: "none",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: colors.foreground,
      marginRight: "0.5rem",
    },
  },
});

