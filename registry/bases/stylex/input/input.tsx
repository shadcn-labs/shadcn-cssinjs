import { styles } from "./input.stylex";

import { cx, x } from "@/lib/utils";

const Input = ({
  className,
  style,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  const p = x(styles.root);
  return (
    <input
      type={type}
      data-slot="input"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Input };
