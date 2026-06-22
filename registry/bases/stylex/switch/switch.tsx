"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cx, x } from "@/lib/utils";

import { styles } from "./switch.stylex";

const Switch = ({
  className,
  style,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "className"> & {
  className?: string;
  size?: "default" | "sm";
}) => {
  const sm = size === "sm";
  return (
    <SwitchPrimitive.Root
      className={(state) =>
        cx(
          x(
            styles.root,
            sm && styles.rootSm,
            state.checked && styles.rootChecked
          ).className,
          className
        )
      }
      data-size={size}
      data-slot="switch"
      style={style}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={(state) => {
          const checkedThumb = sm ? styles.thumbSmChecked : styles.thumbChecked;
          return x(
            styles.thumb,
            sm && styles.thumbSm,
            state.checked && checkedThumb
          ).className;
        }}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
