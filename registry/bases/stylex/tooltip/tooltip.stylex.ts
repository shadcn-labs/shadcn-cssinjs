import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  arrow: {
    backgroundColor: colors.primary,
    borderRadius: "2px",
    height: "0.625rem",
    transform: "rotate(45deg)",
    width: "0.625rem",
    zIndex: 50,
  },
  popup: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: colors.primaryForeground,
    fontSize: "0.75rem",
    lineHeight: "1rem",
    maxWidth: "20rem",
    opacity: 1,
    outline: "none",
    paddingBottom: "0.375rem",
    paddingInline: "0.75rem",
    paddingTop: "0.375rem",
    textAlign: "center",
    textWrap: "balance",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    width: "fit-content",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});
