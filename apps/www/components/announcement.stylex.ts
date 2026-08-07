/* oxlint-disable sort-keys */

import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../registry/bases/stylex/tokens.stylex";

export const styles = stylex.create({
  link: {
    alignItems: "center",
    backgroundColor: {
      default: colors.muted,
      ":hover": `color-mix(in oklab, ${colors.muted} 90%, transparent)`,
    },
    borderColor: "transparent",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: {
      default: null,
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
    color: colors.secondaryForeground,
    display: "inline-flex",
    flexShrink: 0,
    fontSize: "0.75rem",
    fontWeight: 500,
    gap: "0.25rem",
    justifyContent: "center",
    lineHeight: "1rem",
    outline: "none",
    overflow: "hidden",
    paddingBlock: "0.125rem",
    paddingInline: "0.5rem",
    textDecorationLine: "none",
    transitionDuration: "150ms",
    transitionProperty: "color, box-shadow, background-color",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
});
