"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cx, x } from "@/lib/utils";

import { styles } from "./switch.stylex";

const Switch = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <SwitchPrimitive.Root
    className={(state) =>
      cx(
        x(styles.root, state.checked && styles.rootChecked).className,
        className
      )
    }
    data-slot="switch"
    style={style}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={(state) =>
        x(styles.thumb, state.checked && styles.thumbChecked).className
      }
      data-slot="switch-thumb"
    />
  </SwitchPrimitive.Root>
);

export { Switch };
