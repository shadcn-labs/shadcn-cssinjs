"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";

import { cx, x } from "@/lib/utils";

import { styles } from "./toggle-group.stylex";

const ToggleGroup = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ToggleGroupPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.group);
  return (
    <ToggleGroupPrimitive
      className={cx(p.className, className)}
      data-slot="toggle-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ToggleGroupItem = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TogglePrimitive>, "className"> & {
  className?: string;
}) => (
  <TogglePrimitive
    className={(state) =>
      cx(
        x(styles.item, state.pressed && styles.itemPressed).className,
        className
      )
    }
    data-slot="toggle-group-item"
    style={style}
    {...props}
  />
);

export { ToggleGroup, ToggleGroupItem };
