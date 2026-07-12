import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

const shimmer = stylex.keyframes({
  "0%": { backgroundPosition: "200% 0" },
  "100%": { backgroundPosition: "-200% 0" },
});

export const utilityStyles = stylex.create({
  scrollFadeBlock: {
    maskImage:
      "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
  },
  scrollFadeInline: {
    maskImage:
      "linear-gradient(to right, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
  },
  shimmer: {
    WebkitBackgroundClip: "text",
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationName: shimmer,
    animationTimingFunction: "linear",
    backgroundImage: `linear-gradient(90deg, ${colors.mutedForeground} 0%, ${colors.foreground} 50%, ${colors.mutedForeground} 100%)`,
    backgroundSize: "200% 100%",
    color: "transparent",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
});

export { stylex };
