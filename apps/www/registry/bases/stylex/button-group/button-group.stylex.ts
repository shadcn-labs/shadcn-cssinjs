import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  group: {
    alignItems: "stretch",
    backgroundColor: colors.border,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "1px",
    overflow: "hidden",
    width: "fit-content",
  },
  separator: {
    alignSelf: "stretch",
    backgroundColor: colors.input,
    margin: 0,
  },
  text: {
    alignItems: "center",
    backgroundColor: colors.muted,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.md,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    paddingInline: "1rem",
  },
  vertical: {
    flexDirection: "column",
  },
});
