import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  group: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "0.25rem",
    padding: "0.25rem",
    width: "fit-content",
  },
  item: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.background, default: "transparent" },
    borderRadius: radius.sm,
    borderWidth: 0,
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.375rem",
    height: "1.75rem",
    justifyContent: "center",
    minWidth: "1.75rem",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingInline: "0.625rem",
  },
  itemPressed: {
    backgroundColor: colors.background,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
});
