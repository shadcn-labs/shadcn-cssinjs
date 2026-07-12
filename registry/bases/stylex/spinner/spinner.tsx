import * as stylex from "@stylexjs/stylex";
import { Loader2Icon } from "lucide-react";

import { styles } from "./spinner.stylex";

const Spinner = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Loader2Icon> & { className?: string }) => {
  const p = stylex.props(styles.root);
  return (
    <Loader2Icon
      aria-label="Loading"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="spinner"
      role="status"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Spinner };
