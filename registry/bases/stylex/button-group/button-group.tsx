import { cx, x } from "@/lib/utils";

import { styles } from "./button-group.stylex";

const ButtonGroup = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) => {
  const p = x(styles.group, orientation === "vertical" && styles.vertical);
  return (
    <div
      className={cx(p.className, className)}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { ButtonGroup };
