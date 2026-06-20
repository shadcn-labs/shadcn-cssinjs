import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  backdrop: {
    backgroundColor: "color-mix(in oklab, black 80%, transparent)",
    inset: 0,
    opacity: 1,
    position: "fixed",
    transition: "opacity 0.3s ease-in-out",
    zIndex: 50,
  },
  backdropHidden: { opacity: 0 },
  description: { color: colors.mutedForeground, fontSize: "0.875rem" },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "auto",
    padding: "1rem",
  },
  handle: {
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    cursor: "grab",
    flexShrink: 0,
    height: "0.375rem",
    margin: "1rem auto 0",
    width: "100px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    padding: "1rem",
    textAlign: "center",
  },
  popup: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderStartEndRadius: "10px",
    borderStartStartRadius: "10px",
    borderStyle: "solid",
    borderWidth: "1px",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    insetInline: 0,
    maxHeight: "82vh",
    outline: "none",
    position: "fixed",
    zIndex: 50,
  },
  title: {
    color: colors.foreground,
    fontSize: "1.125rem",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1,
  },
});
