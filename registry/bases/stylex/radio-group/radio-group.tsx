"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cx, x } from "@/lib/utils";

import { styles } from "./radio-group.stylex";

const RadioGroup = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof RadioGroupPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.group);
  return (
    <RadioGroupPrimitive
      className={cx(p.className, className)}
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
      cx(
        x(styles.item, state.checked && styles.itemChecked).className,
        className
      )
    }
    data-slot="radio-group-item"
    style={style}
    {...props}
  >
    <RadioPrimitive.Indicator
      className={x(styles.indicator).className}
      data-slot="radio-group-indicator"
    />
  </RadioPrimitive.Root>
);

export { RadioGroup, RadioGroupItem };
