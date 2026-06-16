import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  popup: {
    backgroundColor: colors.popover,
    color: colors.popoverForeground,
    borderRadius: radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    padding: "1rem",
    width: "18rem",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    outline: "none",
    zIndex: 50,
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    transformOrigin: "var(--transform-origin)",
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

