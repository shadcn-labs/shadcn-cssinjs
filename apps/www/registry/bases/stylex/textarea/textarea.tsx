import * as stylex from "@stylexjs/stylex";

import { styles } from "./textarea.stylex";

const Textarea = ({
  className,
  style,
  ...props
}: React.ComponentProps<"textarea"> & { className?: string }) => {
  const p = stylex.props(styles.root);
  return (
    <textarea
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="textarea"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Textarea };
