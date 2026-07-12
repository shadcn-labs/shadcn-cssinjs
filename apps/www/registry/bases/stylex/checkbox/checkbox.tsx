"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import * as stylex from "@stylexjs/stylex";
import { CheckIcon } from "lucide-react";

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
      [
        stylex.props(styles.root, state.checked && styles.rootChecked)
          .className,
        className,
      ]
        .filter(Boolean)
        .join(" ") || undefined
    }
    data-slot="checkbox"
    style={style}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={stylex.props(styles.indicator).className}
      data-slot="checkbox-indicator"
    >
      <CheckIcon size={14} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
