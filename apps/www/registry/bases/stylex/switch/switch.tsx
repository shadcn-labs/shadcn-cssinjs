"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import * as stylex from "@stylexjs/stylex";

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
        [
          stylex.props(
            styles.root,
            sm && styles.rootSm,
            state.checked && styles.rootChecked
          ).className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
      }
      data-size={size}
      data-slot="switch"
      style={style}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={(state) => {
          const checkedThumb = sm ? styles.thumbSmChecked : styles.thumbChecked;
          return stylex.props(
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
