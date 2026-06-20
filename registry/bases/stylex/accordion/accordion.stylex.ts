import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  chevron: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    marginTop: "0.125rem",
    pointerEvents: "none",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronOpen: {
    transform: "rotate(180deg)",
  },
  header: {
    display: "flex",
    margin: 0,
  },
  item: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
  },
  panel: {
    fontSize: "0.875rem",
    overflow: "hidden",
    transition: "height 0.2s ease-in-out",
  },
  panelInner: {
    paddingBottom: "1rem",
    paddingTop: 0,
  },
  trigger: {
    alignItems: "flex-start",
    background: "none",
    borderRadius: radius.md,
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    cursor: "pointer",
    display: "flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "1rem",
    justifyContent: "space-between",
    outline: "none",
    paddingBottom: "1rem",
    paddingTop: "1rem",
    textAlign: "start",
    textDecorationLine: { ":hover": "underline", default: "none" },
    transition: "all 0.15s ease-in-out",
    width: "100%",
  },
});
