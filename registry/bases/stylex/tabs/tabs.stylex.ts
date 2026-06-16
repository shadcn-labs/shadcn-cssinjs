import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  list: {
    display: "inline-flex",
    height: "2.25rem",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    padding: "0.25rem",
    backgroundColor: colors.muted,
    color: colors.mutedForeground,
  },
  trigger: {
    display: "inline-flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    whiteSpace: "nowrap",
    borderRadius: radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    paddingInline: "0.75rem",
    paddingBlock: "0.25rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: colors.foreground,
    background: "transparent",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    outline: "none",
    cursor: "pointer",
    boxShadow: {
      default: null,
      ":focus-visible":
        `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
  },
  triggerActive: {
    backgroundColor: colors.background,
    color: colors.foreground,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  panel: {
    flex: 1,
    outline: "none",
  },
});

