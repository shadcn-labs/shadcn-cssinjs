import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.375rem",
    lineHeight: 1.375,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  error: {
    color: colors.destructive,
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  fieldBase: {
    display: "flex",
    gap: "0.75rem",
    width: "100%",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
    width: "100%",
  },
  horizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    lineHeight: 1.375,
    width: "fit-content",
  },
  legend: {
    fontWeight: 500,
    marginBottom: "0.75rem",
  },
  legendLabel: {
    fontSize: "0.875rem",
  },
  legendLegend: {
    fontSize: "1rem",
  },
  responsive: {
    alignItems: { "@media (min-width: 768px)": "center", default: null },
    flexDirection: { "@media (min-width: 768px)": "row", default: "column" },
  },
  separator: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    height: "1.25rem",
    justifyContent: "center",
    marginBlock: "-0.5rem",
    position: "relative",
  },
  separatorContent: {
    backgroundColor: colors.background,
    color: colors.mutedForeground,
    display: "block",
    marginInline: "auto",
    paddingInline: "0.5rem",
    position: "relative",
    width: "fit-content",
  },
  separatorLine: {
    insetInline: 0,
    position: "absolute",
    top: "50%",
  },
  set: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  title: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: 1.375,
    width: "fit-content",
  },
  vertical: {
    flexDirection: "column",
  },
});
