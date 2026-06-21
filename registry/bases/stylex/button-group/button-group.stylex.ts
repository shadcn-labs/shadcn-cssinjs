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
  vertical: {
    flexDirection: "column",
  },
});
