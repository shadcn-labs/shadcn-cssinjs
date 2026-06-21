import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  content: {
    padding: "1rem",
    width: "100%",
  },
  icon: {
    height: "0.75rem",
    transition: "transform 0.2s ease-in-out",
    width: "0.75rem",
  },
  link: {
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.sm,
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    display: "block",
    fontSize: "0.875rem",
    outline: "none",
    paddingBlock: "0.5rem",
    paddingInline: "0.75rem",
    textDecorationLine: "none",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  list: {
    alignItems: "center",
    display: "flex",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    opacity: 1,
    overflow: "hidden",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: { opacity: 0, transform: "scale(0.95)" },
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "max-content",
    position: "relative",
  },
  trigger: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    cursor: "default",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "2.25rem",
    outline: "none",
    paddingInline: "0.75rem",
  },
  viewport: {
    height: "var(--popup-height)",
    position: "relative",
    transition: "height 0.2s ease-in-out, width 0.2s ease-in-out",
    width: "var(--popup-width)",
  },
});
