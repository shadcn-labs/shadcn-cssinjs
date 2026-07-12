"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./radio-group.stylex";

const RadioGroup = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof RadioGroupPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.group);
  return (
    <RadioGroupPrimitive
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="radio-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const RadioGroupItem = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof RadioPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <RadioPrimitive.Root
    className={(state) =>
      [
        stylex.props(styles.item, state.checked && styles.itemChecked)
          .className,
        className,
      ]
        .filter(Boolean)
        .join(" ") || undefined
    }
    data-slot="radio-group-item"
    style={style}
    {...props}
  >
    <RadioPrimitive.Indicator
      className={stylex.props(styles.indicator).className}
      data-slot="radio-group-indicator"
    />
  </RadioPrimitive.Root>
);

export { RadioGroup, RadioGroupItem };
