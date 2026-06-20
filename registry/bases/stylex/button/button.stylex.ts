import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  base: {
    alignItems: "center",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 0,
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
      "color 0.15s, background-color 0.15s, box-shadow 0.15s, border-color 0.15s",
    whiteSpace: "nowrap",
  },
  default: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.primary} 90%, transparent)`,
      default: colors.primary,
    },
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: colors.primaryForeground,
  },
  destructive: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.destructive} 90%, transparent)`,
      default: colors.destructive,
    },
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: colors.primaryForeground,
  },
  focusable: {
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
  },
  ghost: {
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    color: { ":hover": colors.accentForeground, default: colors.foreground },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.primary,
    textDecorationLine: { ":hover": "underline", default: "none" },
    textUnderlineOffset: "4px",
  },
  outline: {
    backgroundColor: {
      ":hover": colors.accent,
      default: colors.background,
    },
    borderColor: colors.border,
    borderWidth: "1px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: { ":hover": colors.accentForeground, default: colors.foreground },
  },
  secondary: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.secondary} 80%, transparent)`,
      default: colors.secondary,
    },
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: colors.secondaryForeground,
  },
  sizeDefault: { height: "2.25rem", paddingInline: "1rem" },
  sizeIcon: {
    height: "2.25rem",
    paddingInline: 0,
    width: "2.25rem",
  },
  sizeIconLg: {
    height: "2.5rem",
    paddingInline: 0,
    width: "2.5rem",
  },
  sizeIconSm: {
    height: "2rem",
    paddingInline: 0,
    width: "2rem",
  },
  sizeLg: { height: "2.5rem", paddingInline: "2rem" },
  sizeSm: {
    height: "2rem",
    paddingInline: "0.75rem",
  },
});
