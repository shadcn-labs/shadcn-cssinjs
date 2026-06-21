import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  caption: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    marginTop: "1rem",
  },
  cell: {
    padding: "0.5rem",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  footer: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    fontWeight: 500,
  },
  head: {
    color: colors.mutedForeground,
    fontWeight: 500,
    height: "2.5rem",
    padding: "0.5rem",
    textAlign: "start",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  root: {
    borderCollapse: "collapse",
    captionSide: "bottom",
    fontSize: "0.875rem",
    width: "100%",
  },
  row: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
      default: "transparent",
    },
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    transition: "background-color 0.1s ease",
  },
  wrapper: {
    overflowX: "auto",
    position: "relative",
    width: "100%",
  },
});
