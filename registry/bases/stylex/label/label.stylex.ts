import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    alignItems: "center",
    color: colors.foreground,
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: 1,
    userSelect: "none",
  },
});
