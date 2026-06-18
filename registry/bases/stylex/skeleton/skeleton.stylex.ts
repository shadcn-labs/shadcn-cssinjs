import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

const pulse = stylex.keyframes({
  "50%": { opacity: 0.5 },
});

export const styles = stylex.create({
  root: {
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationName: pulse,
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderRadius: radius.md,
  },
});
