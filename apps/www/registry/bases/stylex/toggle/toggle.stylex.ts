import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    alignItems: "center",
    borderRadius: radius.md,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "inline-flex",
    flexShrink: 0,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    justifyContent: "center",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    pointerEvents: { ":disabled": "none", default: null },
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    whiteSpace: "nowrap",
  },
  default: {
    backgroundColor: { ":hover": colors.muted, default: "transparent" },
    borderWidth: 0,
    color: { ":hover": colors.mutedForeground, default: colors.foreground },
  },
  outline: {
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: "1px",
    color: { ":hover": colors.accentForeground, default: colors.foreground },
  },
  pressed: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  sizeDefault: {
    height: "2.25rem",
    minWidth: "2.25rem",
    paddingInline: "0.5rem",
  },
  sizeLg: { height: "2.5rem", minWidth: "2.5rem", paddingInline: "0.625rem" },
  sizeSm: { height: "2rem", minWidth: "2rem", paddingInline: "0.375rem" },
});
