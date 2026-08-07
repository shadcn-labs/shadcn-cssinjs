/* oxlint-disable sort-keys */

import * as stylex from "@stylexjs/stylex";

import { colors } from "../registry/bases/stylex/tokens.stylex";

export const styles = stylex.create({
  link: {
    alignItems: "center",
    color: {
      default: colors.mutedForeground,
      ":hover": colors.primary,
      "[data-active='true']": colors.primary,
    },
    display: "flex",
    flexShrink: 0,
    fontSize: "1rem",
    fontWeight: 500,
    height: "1.75rem",
    justifyContent: "center",
    paddingInline: "1rem",
    textAlign: "center",
    textDecorationLine: "none",
    transitionDuration: "150ms",
    transitionProperty: "color",
  },
  list: {
    alignItems: "center",
    display: "flex",
  },
  root: {
    overflow: "hidden",
    position: "relative",
  },
  scrollArea: {
    maxWidth: {
      default: "600px",
      "@media (min-width: 1024px)": "none",
    },
  },
});
