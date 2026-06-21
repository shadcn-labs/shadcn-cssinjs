import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  control: {
    alignItems: "center",
    display: "flex",
    height: "1rem",
    width: "100%",
  },
  indicator: {
    backgroundColor: colors.primary,
    borderRadius: "9999px",
    height: "100%",
  },
  root: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    touchAction: "none",
    userSelect: "none",
    width: "100%",
  },
  thumb: {
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderRadius: "9999px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    height: "1rem",
    outline: "none",
    width: "1rem",
  },
  track: {
    backgroundColor: `color-mix(in oklab, ${colors.primary} 20%, transparent)`,
    borderRadius: "9999px",
    height: "0.375rem",
    overflow: "hidden",
    width: "100%",
  },
});
