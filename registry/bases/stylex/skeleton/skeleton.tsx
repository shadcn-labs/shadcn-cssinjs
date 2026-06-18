import { cx, x } from "@/lib/utils";

import { styles } from "./skeleton.stylex";

const Skeleton = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.root);
  return (
    <div
      data-slot="skeleton"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Skeleton };
