"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

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
  const p = stylex.props(styles.value);
  return (
    <SelectPrimitive.Value
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.trigger);
  return (
    <SelectPrimitive.Trigger
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="select-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className={stylex.props(styles.icon).className}>
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
  alignItemWithTrigger = false,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Popup>, "className"> & {
  className?: string;
  sideOffset?: number;
  alignItemWithTrigger?: boolean;
}) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      alignItemWithTrigger={alignItemWithTrigger}
      side="bottom"
      sideOffset={sideOffset}
    >
      <SelectPrimitive.Popup
        className={(state) =>
          [
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
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
  const p = stylex.props(styles.groupLabel);
  return (
    <SelectPrimitive.GroupLabel
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
    className={
      [stylex.props(styles.item).className, className]
        .filter(Boolean)
        .join(" ") || undefined
    }
    data-slot="select-item"
    style={style}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator
      className={stylex.props(styles.itemIndicator).className}
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
  const p = stylex.props(styles.separator);
  return (
    <SelectPrimitive.Separator
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
