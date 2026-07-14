import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

// Move this to a shared module
type StyleXComponentProps<El extends keyof JSX.IntrinsicElements> = React.ComponentProps<El> & {
  /** @deprecated Prefer passing in StyleX styles with the `sx` prop */
  className?: React.ComponentProps<El>["className"],
  /** @deprecated Prefer passing in StyleX styles with the `sx` prop */
  style?: React.ComponentProps<El>["style"],

  sx?: StyleXStyle,
};


const styles = stylex.create({
  root: (aspectRatio: number) => ({
    position: "relative",
    width: "100%",
    aspectRatio
  }),
});

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: StyleXComponentProps<"div"> & { ratio?: number }) => (
  <div
    data-slot="aspect-ratio"
    {...stylex.props(
      styles.root(ratio),
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  >
    {children}
  </div>
);

export { AspectRatio };
