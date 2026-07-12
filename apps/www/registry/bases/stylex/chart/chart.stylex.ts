import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  container: {
    aspectRatio: "16 / 9",
    display: "flex",
    fontSize: "0.75rem",
    justifyContent: "center",
    width: "100%",
  },
  indicator: {
    borderRadius: "2px",
    flexShrink: 0,
    height: "0.625rem",
    width: "0.625rem",
  },
  item: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "space-between",
    width: "100%",
  },
  itemLabel: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    gap: "0.5rem",
  },
  itemValue: {
    color: colors.foreground,
    fontVariantNumeric: "tabular-nums",
    fontWeight: 500,
  },
  legend: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    paddingTop: "0.75rem",
  },
  legendItem: {
    alignItems: "center",
    display: "flex",
    gap: "0.375rem",
  },
  tooltip: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    minWidth: "8rem",
    padding: "0.5rem 0.625rem",
  },
  tooltipLabel: {
    color: colors.foreground,
    fontWeight: 500,
  },
});
