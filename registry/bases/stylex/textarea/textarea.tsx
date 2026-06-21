import { cx, x } from "@/lib/utils";

import { styles } from "./textarea.stylex";

const Textarea = ({
  className,
  style,
  ...props
}: React.ComponentProps<"textarea"> & { className?: string }) => {
  const p = x(styles.root);
  return (
    <textarea
      className={cx(p.className, className)}
      data-slot="textarea"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Textarea };
