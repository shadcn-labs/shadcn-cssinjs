import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  root: {
    alignItems: "center",
    backgroundColor: colors.input,
    borderRadius: "9999px",
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "inline-flex",
    flexShrink: 0,
    height: "1.15rem",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    padding: 0,
    position: "relative",
    transition: "background-color 0.15s ease-in-out",
    width: "2rem",
  },
  rootChecked: {
    backgroundColor: colors.primary,
  },
  rootSm: {
    height: "1rem",
    width: "1.65rem",
  },
  thumb: {
    backgroundColor: colors.background,
    borderRadius: "9999px",
    display: "block",
    height: "1rem",
    pointerEvents: "none",
    transform: "translateX(0.075rem)",
    transition: "transform 0.15s ease-in-out",
    width: "1rem",
  },
  thumbChecked: {
    transform: "translateX(0.925rem)",
  },
  thumbSm: {
    height: "0.75rem",
    width: "0.75rem",
  },
  thumbSmChecked: {
    transform: "translateX(0.775rem)",
  },
});
