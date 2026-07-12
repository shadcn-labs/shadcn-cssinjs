import * as stylex from "@stylexjs/stylex";

import { styles } from "./skeleton.stylex";

const Skeleton = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.root);
  return (
    <div
      data-slot="skeleton"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Skeleton };
