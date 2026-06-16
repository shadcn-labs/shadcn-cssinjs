import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  popup: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
    borderRadius: radius.md,
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    textAlign: "center",
    textWrap: "balance",
    width: "fit-content",
    maxWidth: "20rem",
    zIndex: 50,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    outline: "none",
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    transformOrigin: "var(--transform-origin)",
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  arrow: {
    backgroundColor: colors.primary,
    width: "0.625rem",
    height: "0.625rem",
    transform: "rotate(45deg)",
    borderRadius: "2px",
    zIndex: 50,
  },
});

