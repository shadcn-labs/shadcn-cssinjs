import { cx, x } from "@/lib/utils";

import { styles } from "./kbd.stylex";

const Kbd = ({ className, style, ...props }: React.ComponentProps<"kbd">) => {
  const p = x(styles.root);
  return (
    <kbd
      data-slot="kbd"
      className={cx(p.className, className)}
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
  const p = x(styles.group);
  return (
    <div
      data-slot="kbd-group"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Kbd, KbdGroup };
