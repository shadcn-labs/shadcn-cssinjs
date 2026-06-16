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
    transition:
      "color 0.15s, background-color 0.15s, box-shadow 0.15s, border-color 0.15s",
    cursor: { default: "pointer", ":disabled": "not-allowed" },
    outline: "none",
    borderWidth: 0,
    borderStyle: "solid",
    flexShrink: 0,
    pointerEvents: { default: null, ":disabled": "none" },
    opacity: { default: 1, ":disabled": 0.5 },
  },
  default: {
    backgroundColor: {
      default: colors.primary,
      ":hover": `color-mix(in oklab, ${colors.primary} 90%, transparent)`,
    },
    color: colors.primaryForeground,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  destructive: {
    backgroundColor: {
      default: colors.destructive,
      ":hover": `color-mix(in oklab, ${colors.destructive} 90%, transparent)`,
    },
    color: colors.primaryForeground,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  outline: {
    borderWidth: "1px",
    borderColor: colors.border,
    backgroundColor: {
      default: colors.background,
      ":hover": colors.accent,
    },
    color: { default: colors.foreground, ":hover": colors.accentForeground },
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  secondary: {
    backgroundColor: {
      default: colors.secondary,
      ":hover": `color-mix(in oklab, ${colors.secondary} 80%, transparent)`,
    },
    color: colors.secondaryForeground,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  ghost: {
    backgroundColor: { default: "transparent", ":hover": colors.accent },
    color: { default: colors.foreground, ":hover": colors.accentForeground },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.primary,
    textUnderlineOffset: "4px",
    textDecorationLine: { default: "none", ":hover": "underline" },
  },
  focusable: {
    boxShadow: {
      default: null,
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
  },
  sizeDefault: { height: "2.25rem", paddingLeft: "1rem", paddingRight: "1rem" },
  sizeSm: {
    height: "2rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
  },
  sizeLg: { height: "2.5rem", paddingLeft: "2rem", paddingRight: "2rem" },
  sizeIcon: { height: "2.25rem", width: "2.25rem", paddingLeft: 0, paddingRight: 0 },
  sizeIconSm: { height: "2rem", width: "2rem", paddingLeft: 0, paddingRight: 0 },
  sizeIconLg: { height: "2.5rem", width: "2.5rem", paddingLeft: 0, paddingRight: 0 },
});

