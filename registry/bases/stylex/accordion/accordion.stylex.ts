import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  chevronDown: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronDownOpen: {
    display: "none",
  },
  chevronUp: {
    color: colors.mutedForeground,
    display: "none",
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronUpOpen: {
    display: "block",
  },
  header: {
    display: "flex",
    margin: 0,
  },
  item: {
    ":last-child": {
      borderBottomColor: "transparent",
    },
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
  },
  panel: {
    fontSize: "0.875rem",
    overflow: "hidden",
    paddingBottom: "0.625rem",
    paddingTop: 0,
  },
  trigger: {
    ":focus-visible": {
      borderColor: colors.ring,
      boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
    alignItems: "flex-start",
    background: "none",
    borderRadius: radius.md,
    borderWidth: "1px",
    color: colors.foreground,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "1rem",
    justifyContent: "space-between",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "0.625rem",
    paddingTop: "0.625rem",
    pointerEvents: { ":disabled": "none", default: null },
    textAlign: "start",
    textDecorationLine: { ":hover": "underline", default: "none" },
    transition: "all 0.15s ease-in-out",
    width: "100%",
  },
});
