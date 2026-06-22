import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  list: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "0.5rem",
    color: colors.mutedForeground,
    display: "inline-flex",
    height: "2.25rem",
    justifyContent: "center",
    padding: "0.25rem",
    width: "fit-content",
  },
  listLine: {
    alignItems: "center",
    borderBottom: `1px solid ${colors.border}`,
    color: colors.mutedForeground,
    display: "inline-flex",
    gap: "0.25rem",
    justifyContent: "center",
    padding: 0,
    width: "fit-content",
  },
  panel: {
    flex: 1,
    outline: "none",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  trigger: {
    alignItems: "center",
    background: "transparent",
    borderColor: "transparent",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    cursor: "pointer",
    display: "inline-flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.375rem",
    justifyContent: "center",
    outline: "none",
    paddingBlock: "0.25rem",
    paddingInline: "0.75rem",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    whiteSpace: "nowrap",
  },
  triggerActive: {
    backgroundColor: colors.background,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: colors.foreground,
  },
  triggerLine: {
    borderBottom: "2px solid transparent",
    borderRadius: 0,
    borderWidth: 0,
    flex: "0 0 auto",
    marginBottom: "-1px",
  },
  triggerLineActive: {
    borderBottomColor: colors.foreground,
    color: colors.foreground,
  },
});
