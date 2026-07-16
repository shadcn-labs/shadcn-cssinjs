import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  root: {
    position: "relative",
    width: "100%",
  },
});

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) => (
  <div
    data-slot="aspect-ratio"
    {...stylex.props(
      styles.root,
      customClassName(className),
      { aspectRatio: String(ratio) } as StyleXStyles,
      style as StyleXStyles
    )}
    {...props}
  >
    {children}
  </div>
);

export { AspectRatio };
