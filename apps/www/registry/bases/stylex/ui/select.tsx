"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  groupLabel: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    paddingBottom: "0.375rem",
    paddingInline: "0.5rem",
    paddingTop: "0.375rem",
  },
  icon: {
    color: colors.mutedForeground,
    height: "1rem",
    opacity: 0.5,
    pointerEvents: "none",
    width: "1rem",
  },
  item: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.sm,
    color: {
      ":hover": colors.accentForeground,
      default: colors.popoverForeground,
    },
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    outline: "none",
    paddingBlock: "0.375rem",
    paddingInlineEnd: "2rem",
    paddingInlineStart: "0.5rem",
    position: "relative",
    userSelect: "none",
  },
  itemIndicator: {
    alignItems: "center",
    display: "flex",
    insetInlineEnd: "0.5rem",
    justifyContent: "center",
    position: "absolute",
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    maxHeight: "var(--available-height)",
    minWidth: "8rem",
    opacity: 1,
    outline: "none",
    overflowY: "auto",
    padding: "0.25rem",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: { opacity: 0 },
  separator: {
    backgroundColor: colors.border,
    height: "1px",
    marginBlock: "0.25rem",
    marginInline: "-0.25rem",
  },
  trigger: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: { ":focus-visible": colors.ring, default: colors.input },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    height: "2.25rem",
    justifyContent: "space-between",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingInline: "0.75rem",
    transition: "color 0.15s, box-shadow 0.15s, border-color 0.15s",
    width: "fit-content",
  },
  value: {
    overflow: "hidden",
    textAlign: "start",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

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
}) => (
  <SelectPrimitive.Value
    {...stylex.props(
      styles.value,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="select-value"
    {...props}
  />
);

const SelectTrigger = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Trigger
    {...stylex.props(
      styles.trigger,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="select-trigger"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className={stylex.props(styles.icon).className}>
      <ChevronDownIcon size={16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

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
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
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
}) => (
  <SelectPrimitive.GroupLabel
    {...stylex.props(
      styles.groupLabel,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="select-label"
    {...props}
  />
);

const SelectItem = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <SelectPrimitive.Item
    {...stylex.props(
      styles.item,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="select-item"
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
}) => (
  <SelectPrimitive.Separator
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
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
