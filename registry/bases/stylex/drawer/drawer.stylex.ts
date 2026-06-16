import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    backgroundColor: "color-mix(in oklab, black 80%, transparent)",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  },
  backdropHidden: { opacity: 0 },
  popup: {
    position: "fixed",
    insetInline: 0,
    bottom: 0,
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    maxHeight: "82vh",
    backgroundColor: colors.background,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    outline: "none",
  },
  handle: {
    margin: "1rem auto 0",
    height: "0.375rem",
    width: "100px",
    flexShrink: 0,
    borderRadius: "9999px",
    backgroundColor: colors.muted,
    cursor: "grab",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    padding: "1rem",
    textAlign: "center",
  },
  footer: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem",
  },
  title: {
    fontSize: "1.125rem",
    lineHeight: 1,
    letterSpacing: "-0.025em",
    fontWeight: 600,
    color: colors.foreground,
  },
  description: { fontSize: "0.875rem", color: colors.mutedForeground },
});

