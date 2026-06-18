import { cx, x } from "@/lib/utils";

import { styles } from "./aspect-ratio.stylex";

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) => {
  const p = x(styles.root);
  return (
    <div
      data-slot="aspect-ratio"
      className={cx(p.className, className)}
      style={{ ...p.style, aspectRatio: String(ratio), ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export { AspectRatio };
