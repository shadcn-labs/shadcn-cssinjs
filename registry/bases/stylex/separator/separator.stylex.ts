import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    backgroundColor: colors.border,
    flexShrink: 0,
  },
  horizontal: {
    height: "1px",
    width: "100%",
  },
  vertical: {
    height: "100%",
    width: "1px",
  },
});

