"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./checkbox.stylex";

const Checkbox = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <CheckboxPrimitive.Root
    className={(state) =>
      cx(
        x(styles.root, state.checked && styles.rootChecked).className,
        className
      )
    }
    data-slot="checkbox"
    style={style}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={x(styles.indicator).className}
      data-slot="checkbox-indicator"
    >
      <CheckIcon size={14} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
