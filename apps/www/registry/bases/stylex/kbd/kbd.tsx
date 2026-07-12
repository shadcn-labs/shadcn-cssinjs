import * as stylex from "@stylexjs/stylex";

import { styles } from "./kbd.stylex";

const Kbd = ({ className, style, ...props }: React.ComponentProps<"kbd">) => {
  const p = stylex.props(styles.root);
  return (
    <kbd
      data-slot="kbd"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const KbdGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.group);
  return (
    <div
      data-slot="kbd-group"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Kbd, KbdGroup };
