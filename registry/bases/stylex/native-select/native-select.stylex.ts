import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  wrapper: {
    position: "relative",
    width: "fit-content",
  },
  select: {
    height: "2.25rem",
    width: "100%",
    minWidth: 0,
    appearance: "none",
    borderRadius: radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: { default: colors.input, ":focus-visible": colors.ring },
    backgroundColor: "transparent",
    paddingLeft: "0.75rem",
    paddingRight: "2.25rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
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
    cursor: { default: "pointer", ":disabled": "not-allowed" },
    opacity: { default: 1, ":disabled": 0.5 },
  },
  selectSm: {
    height: "2rem",
    borderRadius: radius.sm,
    paddingLeft: "0.625rem",
    paddingRight: "1.75rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    fontSize: "0.75rem",
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: "0.875rem",
    transform: "translateY(-50%)",
    width: "1rem",
    height: "1rem",
    color: colors.mutedForeground,
    opacity: 0.5,
    pointerEvents: "none",
    userSelect: "none",
  },
  iconSm: {
    right: "0.625rem",
    width: "0.875rem",
    height: "0.875rem",
  },
});

