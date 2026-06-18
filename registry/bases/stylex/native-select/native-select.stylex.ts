import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  icon: {
    color: colors.mutedForeground,
    height: "1rem",
    opacity: 0.5,
    pointerEvents: "none",
    position: "absolute",
    right: "0.875rem",
    top: "50%",
    transform: "translateY(-50%)",
    userSelect: "none",
    width: "1rem",
  },
  iconSm: {
    height: "0.875rem",
    right: "0.625rem",
    width: "0.875rem",
  },
  select: {
    appearance: "none",
    backgroundColor: "transparent",
    borderColor: { ":focus-visible": colors.ring, default: colors.input },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    fontSize: "0.875rem",
    height: "2.25rem",
    lineHeight: "1.25rem",
    minWidth: 0,
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "2.25rem",
    paddingTop: "0.5rem",
    transition:
      "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out",
    width: "100%",
  },
  selectSm: {
    borderRadius: radius.sm,
    fontSize: "0.75rem",
    height: "2rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.625rem",
    paddingRight: "1.75rem",
    paddingTop: "0.25rem",
  },
  wrapper: {
    position: "relative",
    width: "fit-content",
  },
});
