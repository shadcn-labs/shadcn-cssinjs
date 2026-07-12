import * as stylex from "@stylexjs/stylex";

import { styles } from "./input.stylex";

const Input = ({
  className,
  style,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  const p = stylex.props(styles.root);
  return (
    <input
      type={type}
      data-slot="input"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Input };
