import { Loader2Icon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./spinner.stylex";

const Spinner = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Loader2Icon> & { className?: string }) => {
  const p = x(styles.root);
  return (
    <Loader2Icon
      aria-label="Loading"
      className={cx(p.className, className)}
      data-slot="spinner"
      role="status"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Spinner };
