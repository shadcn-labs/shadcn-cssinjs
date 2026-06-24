"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const value = css({
  overflow: "hidden",
  textAlign: "start",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const trigger = css({
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _focusVisible: {
    borderColor: "ring",
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  alignItems: "center",
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  color: "foreground",
  cursor: "pointer",
  display: "flex",
  fontSize: "0.875rem",
  gap: "2",
  height: "9",
  justifyContent: "space-between",
  outlineStyle: "none",
  paddingInline: "3",
  transitionDuration: "150ms",
  transitionProperty: "color, box-shadow, border-color",
  width: "fit-content",
});

const icon = css({
  color: "muted.foreground",
  height: "4",
  opacity: "0.5",
  pointerEvents: "none",
  width: "4",
});

const popup = css({
  _ending: { opacity: "0" },
  _starting: { opacity: "0" },
  backgroundColor: "popover",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  color: "popover.foreground",
  maxHeight: "var(--available-height)",
  minWidth: "32",
  opacity: "1",
  outlineStyle: "none",
  overflowY: "auto",
  padding: "1",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const groupLabel = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  paddingBlock: "1.5",
  paddingInline: "2",
});

const item = css({
  _highlighted: { backgroundColor: "accent", color: "accent.foreground" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "sm",
  color: "popover.foreground",
  cursor: "default",
  display: "flex",
  fontSize: "0.875rem",
  gap: "2",
  outlineStyle: "none",
  paddingBlock: "1.5",
  paddingInlineEnd: "8",
  paddingInlineStart: "2",
  position: "relative",
  userSelect: "none",
});

const itemIndicator = css({
  alignItems: "center",
  display: "flex",
  insetInlineEnd: "2",
  justifyContent: "center",
  position: "absolute",
});

const separator = css({
  backgroundColor: "border",
  height: "1px",
  marginBlock: "1",
  marginInline: "-1",
});

const Select = (props: React.ComponentProps<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root data-slot="select" {...props} />
);

const SelectGroup = (
  props: React.ComponentProps<typeof SelectPrimitive.Group>
) => <SelectPrimitive.Group data-slot="select-group" {...props} />;

const SelectValue = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Value>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Value
    className={cx(value, className)}
    data-slot="select-value"
    {...props}
  />
);

const SelectTrigger = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Trigger
    className={cx(trigger, className)}
    data-slot="select-trigger"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className={icon}>
      <ChevronDownIcon size={16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectContent = ({
  className,
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
        className={cx(popup, className)}
        data-slot="select-content"
        {...props}
      >
        {children}
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
);

const SelectLabel = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof SelectPrimitive.GroupLabel>,
  "className"
> & { className?: string }) => (
  <SelectPrimitive.GroupLabel
    className={cx(groupLabel, className)}
    data-slot="select-label"
    {...props}
  />
);

const SelectItem = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Item
    className={cx(item, className)}
    data-slot="select-item"
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className={itemIndicator}>
      <CheckIcon size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);

const SelectSeparator = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Separator>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Separator
    className={cx(separator, className)}
    data-slot="select-separator"
    {...props}
  />
);

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
