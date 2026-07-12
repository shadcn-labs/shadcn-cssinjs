import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  horizontal: {
    height: "1px",
    width: "100%",
  },
  root: {
    backgroundColor: colors.border,
    flexShrink: 0,
  },
  vertical: {
    height: "100%",
    width: "1px",
  },
});
