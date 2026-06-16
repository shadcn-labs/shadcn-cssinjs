import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  item: {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.border,
  },
  header: {
    display: "flex",
    margin: 0,
  },
  trigger: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    borderRadius: radius.md,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    textAlign: "left",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.15s ease-in-out",
    outline: "none",
    borderWidth: 0,
    background: "none",
    width: "100%",
    cursor: "pointer",
    color: colors.foreground,
    textDecorationLine: { default: "none", ":hover": "underline" },
    boxShadow: {
      default: null,
      ":focus-visible":
        `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
  },
  chevron: {
    pointerEvents: "none",
    color: colors.mutedForeground,
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    marginTop: "0.125rem",
    transition: "transform 0.2s ease-in-out",
  },
  chevronOpen: {
    transform: "rotate(180deg)",
  },
  panel: {
    overflow: "hidden",
    fontSize: "0.875rem",
    transition: "height 0.2s ease-in-out",
  },
  panelInner: {
    paddingTop: 0,
    paddingBottom: "1rem",
  },
});

