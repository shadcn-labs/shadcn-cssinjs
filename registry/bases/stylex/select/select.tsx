"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./select.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const Select = (props: React.ComponentProps<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root data-slot="select" {...props} />
);

const SelectGroup = (
  props: React.ComponentProps<typeof SelectPrimitive.Group>
) => <SelectPrimitive.Group data-slot="select-group" {...props} />;

const SelectValue = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Value>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.value);
  return (
    <SelectPrimitive.Value
      className={cx(p.className, className)}
      data-slot="select-value"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SelectTrigger = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.trigger);
  return (
    <SelectPrimitive.Trigger
      className={cx(p.className, className)}
      data-slot="select-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className={x(styles.icon).className}>
        <ChevronDownIcon size={16} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectContent = ({
  className,
  style,
  children,
  sideOffset = 4,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Popup>, "className"> & {
  className?: string;
  sideOffset?: number;
}) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      alignItemWithTrigger={false}
      side="bottom"
      sideOffset={sideOffset}
    >
      <SelectPrimitive.Popup
        className={(state) =>
          cx(
            x(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className
          )
        }
        data-slot="select-content"
        style={style}
        {...props}
      >
        {children}
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
);

const SelectLabel = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof SelectPrimitive.GroupLabel>,
  "className"
> & {
  className?: string;
}) => {
  const p = x(styles.groupLabel);
  return (
    <SelectPrimitive.GroupLabel
      className={cx(p.className, className)}
      data-slot="select-label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SelectItem = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Item
    className={cx(x(styles.item).className, className)}
    data-slot="select-item"
    style={style}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator
      className={x(styles.itemIndicator).className}
    >
      <CheckIcon size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);

const SelectSeparator = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Separator>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.separator);
  return (
    <SelectPrimitive.Separator
      className={cx(p.className, className)}
      data-slot="select-separator"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
