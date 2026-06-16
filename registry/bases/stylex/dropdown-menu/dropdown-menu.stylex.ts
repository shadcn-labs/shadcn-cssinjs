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
    padding: "0.25rem",
    minWidth: "8rem",
    overflowX: "hidden",
    overflowY: "auto",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    outline: "none",
    zIndex: 50,
    opacity: 1,
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  item: {
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "0.125rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    fontSize: "0.875rem",
    outline: "none",
    userSelect: "none",
    position: "relative",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  itemInset: {
    paddingLeft: "2rem",
  },
  itemDestructive: {
    color: colors.destructive,
  },
  itemHighlighted: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  itemDestructiveHighlighted: {
    backgroundColor: `color-mix(in oklab, ${colors.destructive} 10%, transparent)`,
    color: colors.destructive,
  },
  itemDisabled: {
    pointerEvents: "none",
    opacity: 0.5,
  },
  indicatorWrap: {
    position: "absolute",
    left: "0.5rem",
    display: "flex",
    width: "0.875rem",
    height: "0.875rem",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  itemIndented: {
    paddingLeft: "2rem",
  },
  label: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: colors.foreground,
  },
  labelInset: {
    paddingLeft: "2rem",
  },
  separator: {
    marginLeft: "-0.25rem",
    marginRight: "-0.25rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    height: "1px",
    backgroundColor: colors.border,
  },
  shortcut: {
    marginLeft: "auto",
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    opacity: 0.6,
    color: colors.mutedForeground,
  },
  icon: {
    width: "1rem",
    height: "1rem",
  },
});

