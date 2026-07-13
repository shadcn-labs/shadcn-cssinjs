import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const pulse = stylex.keyframes({
  "50%": { opacity: 0.5 },
});

const styles = stylex.create({
  root: {
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationName: pulse,
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderRadius: radius.md,
  },
});

const Skeleton = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="skeleton"
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Skeleton };
