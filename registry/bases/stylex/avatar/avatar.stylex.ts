import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  fallback: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    aspectRatio: "1 / 1",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  root: {
    borderRadius: "9999px",
    display: "flex",
    flexShrink: 0,
    height: "2.5rem",
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    width: "2.5rem",
  },
});
