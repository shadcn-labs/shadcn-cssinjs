import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  addonBase: {
    alignItems: "center",
    color: colors.mutedForeground,
    cursor: "text",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    justifyContent: "center",
    paddingBlock: "0.375rem",
    userSelect: "none",
  },
  addonBlockEnd: {
    justifyContent: "flex-start",
    order: 1,
    paddingBottom: "0.75rem",
    paddingInline: "0.75rem",
    width: "100%",
  },
  addonBlockStart: {
    justifyContent: "flex-start",
    order: -1,
    paddingInline: "0.75rem",
    paddingTop: "0.75rem",
    width: "100%",
  },
  addonInlineEnd: {
    order: 1,
    paddingInlineEnd: "0.75rem",
  },
  addonInlineStart: {
    order: -1,
    paddingInlineStart: "0.75rem",
  },
  button: {
    boxShadow: "none",
    gap: "0.375rem",
  },
  control: {
    "::placeholder": {
      color: colors.mutedForeground,
    },
    "::selection": {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    },
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "auto" },
    flex: 1,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    minWidth: 0,
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBlock: "0.5rem",
    paddingInline: "0.5rem",
  },
  root: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: {
      ":focus-within": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-within": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    display: "flex",
    flexWrap: "wrap",
    minWidth: 0,
    outline: "none",
    position: "relative",
    transition: "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    width: "100%",
  },
  text: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
  },
  textarea: {
    paddingBlock: "0.75rem",
    resize: "none",
    width: "100%",
  },
});
