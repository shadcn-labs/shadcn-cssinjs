import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  grip: {
    alignItems: "center",
    backgroundColor: colors.border,
    borderRadius: radius.sm,
    display: "flex",
    height: "1rem",
    justifyContent: "center",
    width: "0.75rem",
    zIndex: 10,
  },
  group: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  handle: {
    alignItems: "center",
    backgroundColor: colors.border,
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    position: "relative",
    width: "1px",
  },
});
