import { cx, x } from "@/lib/utils";

import { styles } from "./label.stylex";

const Label = ({
  className,
  style,
  ...props
}: React.ComponentProps<"label"> & { className?: string }) => {
  const p = x(styles.root);
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor/children supplied by consumer
    <label
      className={cx(p.className, className)}
      data-slot="label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Label };
