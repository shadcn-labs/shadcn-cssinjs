import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { Loader2Icon } from "lucide-react";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const spin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const styles = stylex.create({
  root: {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationName: spin,
    animationTimingFunction: "linear",
    flexShrink: 0,
    height: "1rem",
    width: "1rem",
  },
});

const Spinner = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Loader2Icon> & { className?: string }) => (
  <Loader2Icon
    aria-label="Loading"
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="spinner"
    role="status"
    {...props}
  />
);

export { Spinner };
