import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  backdrop: {
    backgroundColor: "color-mix(in oklab, black 80%, transparent)",
    inset: 0,
    opacity: 1,
    position: "fixed",
    transition: "opacity 0.15s ease-in-out",
    zIndex: 50,
  },
  backdropHidden: { opacity: 0 },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  footer: {
    display: "flex",
    flexDirection: {
      "@media (min-width: 640px)": "row",
      default: "column-reverse",
    },
    gap: "0.5rem",
    justifyContent: { "@media (min-width: 640px)": "flex-end", default: null },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: { "@media (min-width: 640px)": "start", default: "center" },
  },
  popup: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.xl,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.foreground,
    display: "grid",
    gap: "1rem",
    left: "50%",
    maxWidth: {
      "@media (min-width: 640px)": "32rem",
      default: "calc(100% - 2rem)",
    },
    opacity: 1,
    outline: "none",
    padding: "1.5rem",
    position: "fixed",
    top: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
    width: "100%",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  title: {
    color: colors.foreground,
    fontSize: "1.125rem",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1,
  },
});
