import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  indicator: {
    backgroundColor: colors.primary,
    height: "100%",
    transition: "all 0.2s ease-in-out",
    width: "100%",
  },
  root: {
    backgroundColor: `color-mix(in oklab, ${colors.primary} 20%, transparent)`,
    borderRadius: "9999px",
    height: "0.5rem",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  track: {
    height: "100%",
    width: "100%",
  },
});
