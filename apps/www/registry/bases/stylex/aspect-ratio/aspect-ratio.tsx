import * as stylex from "@stylexjs/stylex";

import { styles } from "./aspect-ratio.stylex";

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) => {
  const p = stylex.props(styles.root);
  return (
    <div
      data-slot="aspect-ratio"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, aspectRatio: String(ratio), ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export { AspectRatio };
