import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    overflow: "hidden",
    position: "relative",
  },
  scrollbar: {
    display: "flex",
    padding: "1px",
    touchAction: "none",
    transition: "opacity 0.15s ease-in-out",
    userSelect: "none",
    width: "0.625rem",
  },
  thumb: {
    backgroundColor: colors.border,
    borderRadius: "9999px",
    flex: 1,
  },
  viewport: {
    height: "100%",
    outline: "none",
    overscrollBehavior: "contain",
    width: "100%",
  },
});
