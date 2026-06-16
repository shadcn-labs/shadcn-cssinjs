import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    whiteSpace: "nowrap",
    borderRadius: radius.md,
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    outline: "none",
    flexShrink: 0,
    cursor: { default: "pointer", ":disabled": "not-allowed" },
    pointerEvents: { default: null, ":disabled": "none" },
    opacity: { default: 1, ":disabled": 0.5 },
    boxShadow: {
      default: null,
      ":focus-visible":
        `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
  },
  default: {
    backgroundColor: { default: "transparent", ":hover": colors.muted },
    color: { default: colors.foreground, ":hover": colors.mutedForeground },
    borderWidth: 0,
  },
  outline: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    backgroundColor: { default: "transparent", ":hover": colors.accent },
    color: { default: colors.foreground, ":hover": colors.accentForeground },
  },
  pressed: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  sizeDefault: { height: "2.25rem", minWidth: "2.25rem", paddingInline: "0.5rem" },
  sizeSm: { height: "2rem", minWidth: "2rem", paddingInline: "0.375rem" },
  sizeLg: { height: "2.5rem", minWidth: "2.5rem", paddingInline: "0.625rem" },
});

