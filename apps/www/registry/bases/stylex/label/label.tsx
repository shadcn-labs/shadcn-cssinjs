import * as stylex from "@stylexjs/stylex";

import { styles } from "./label.stylex";

const Label = ({
  className,
  style,
  ...props
}: React.ComponentProps<"label"> & { className?: string }) => {
  const p = stylex.props(styles.root);
  return (
    // oxlint-disable-next-line label-has-associated-control -- htmlFor/children supplied by consumer
    <label
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Label };
