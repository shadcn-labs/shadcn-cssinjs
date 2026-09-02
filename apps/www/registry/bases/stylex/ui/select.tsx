"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const isHidden = (status: string | undefined) =>
  status === "starting" || status === "ending";

const styles = stylex.create({
  content: {
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.popoverForeground,
    isolation: "isolate",
    maxHeight: "var(--available-height)",
    minWidth: "9rem",
    opacity: 1,
    outline: "none",
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "100ms",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    width: "var(--anchor-width)",
    zIndex: 50,
  },
  contentHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  group: {
    scrollMarginBlock: "0.25rem",
  },
  icon: {
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    width: "1rem",
  },
  item: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: {
      ":focus": colors.accent,
      ":hover": colors.accent,
      default: "transparent",
    },
    borderRadius: radius.md,
    boxSizing: "border-box",
    color: {
      ":focus": colors.accentForeground,
      ":hover": colors.accentForeground,
      default: colors.foreground,
    },
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.375rem",
    lineHeight: "1.25rem",
    outline: "none",
    paddingBottom: "0.25rem",
    paddingLeft: "0.375rem",
    paddingRight: "2rem",
    paddingTop: "0.25rem",
    position: "relative",
    userSelect: "none",
    width: "100%",
  },
  itemDisabled: {
    cursor: "not-allowed",
    opacity: 0.5,
    pointerEvents: "none",
  },
  itemHighlighted: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  itemIndicator: {
    alignItems: "center",
    display: "flex",
    height: "1rem",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    right: "0.5rem",
    width: "1rem",
  },
  itemText: {
    display: "flex",
    flex: 1,
    flexShrink: 0,
    gap: "0.5rem",
    whiteSpace: "nowrap",
  },
  label: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: "1rem",
    paddingBottom: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.375rem",
  },
  list: {
    boxSizing: "border-box",
    padding: "0.25rem",
  },
  positioner: {
    isolation: "isolate",
    outline: "none",
    zIndex: 50,
  },
  scrollButton: {
    alignItems: "center",
    backgroundColor: colors.popover,
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    paddingBlock: "0.25rem",
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  scrollButtonDown: {
    bottom: 0,
  },
  scrollButtonUp: {
    top: 0,
  },
  separator: {
    backgroundColor: colors.border,
    height: "1px",
    marginBlock: "0.25rem",
    marginInline: "-0.25rem",
    pointerEvents: "none",
  },
  trigger: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: {
      ":focus-visible": colors.ring,
      default: colors.input,
    },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.375rem",
    justifyContent: "space-between",
    lineHeight: "1.25rem",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    paddingBottom: "0.5rem",
    paddingLeft: "0.625rem",
    paddingRight: "0.5rem",
    paddingTop: "0.5rem",
    pointerEvents: {
      ":disabled": "none",
      default: null,
    },
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color, box-shadow",
    userSelect: "none",
    whiteSpace: "nowrap",
    width: "100%",
  },
  triggerAriaInvalid: {
    borderColor: colors.destructive,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.destructive} 40%, transparent)`,
      default: `0 0 0 3px color-mix(in oklab, ${colors.destructive} 20%, transparent)`,
    },
  },
  triggerDefault: {
    height: "2rem",
  },
  triggerIcon: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    width: "1rem",
  },
  triggerSm: {
    borderRadius: `min(${radius.md}, 10px)`,
    height: "1.75rem",
  },
  value: {
    display: "flex",
    flex: 1,
    textAlign: "left",
  },
});

const Select = SelectPrimitive.Root;

type SelectProps<
  Value = unknown,
  Multiple extends boolean | undefined = boolean | undefined,
> = SelectPrimitive.Root.Props<Value, Multiple>;

type SelectGroupProps = Omit<SelectPrimitive.Group.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectGroup = ({ className, style, ...props }: SelectGroupProps) => (
  <SelectPrimitive.Group
    data-slot="select-group"
    {...stylex.props(styles.group, customClassName(className), style)}
    {...props}
  />
);

type SelectValueProps = Omit<SelectPrimitive.Value.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectValue = ({ className, style, ...props }: SelectValueProps) => (
  <SelectPrimitive.Value
    data-slot="select-value"
    {...stylex.props(styles.value, customClassName(className), style)}
    {...props}
  />
);

type SelectTriggerProps = Omit<SelectPrimitive.Trigger.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
  size?: "sm" | "default";
};

const SelectTrigger = ({
  className,
  size = "default",
  children,
  style,
  ...props
}: SelectTriggerProps) => {
  const isInvalid =
    props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      {...stylex.props(
        styles.trigger,
        size === "sm" ? styles.triggerSm : styles.triggerDefault,
        isInvalid && styles.triggerAriaInvalid,
        customClassName(className),
        style
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={<ChevronDownIcon {...stylex.props(styles.triggerIcon)} />}
      />
    </SelectPrimitive.Trigger>
  );
};

type SelectScrollUpButtonProps = Omit<
  React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectScrollUpButton = ({
  className,
  style,
  ...props
}: SelectScrollUpButtonProps) => (
  <SelectPrimitive.ScrollUpArrow
    data-slot="select-scroll-up-button"
    {...stylex.props(
      styles.scrollButton,
      styles.scrollButtonUp,
      customClassName(className),
      style
    )}
    {...props}
  >
    <ChevronUpIcon {...stylex.props(styles.icon)} />
  </SelectPrimitive.ScrollUpArrow>
);

type SelectScrollDownButtonProps = Omit<
  React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectScrollDownButton = ({
  className,
  style,
  ...props
}: SelectScrollDownButtonProps) => (
  <SelectPrimitive.ScrollDownArrow
    data-slot="select-scroll-down-button"
    {...stylex.props(
      styles.scrollButton,
      styles.scrollButtonDown,
      customClassName(className),
      style
    )}
    {...props}
  >
    <ChevronDownIcon {...stylex.props(styles.icon)} />
  </SelectPrimitive.ScrollDownArrow>
);

type SelectContentProps = Omit<SelectPrimitive.Popup.Props, "style"> &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  > & {
    className?: string;
    style?: StyleXStyles;
  };

const SelectContent = ({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  style,
  ...props
}: SelectContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      {...stylex.props(styles.positioner)}
    >
      <SelectPrimitive.Popup
        data-slot="select-content"
        data-align-trigger={alignItemWithTrigger}
        className={(state) =>
          stylex.props(
            styles.content,
            !alignItemWithTrigger &&
              isHidden(state.transitionStatus) &&
              styles.contentHidden,
            customClassName(className),
            style
          ).className
        }
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.List {...stylex.props(styles.list)}>
          {children}
        </SelectPrimitive.List>
        <SelectScrollDownButton />
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
);

type SelectLabelProps = Omit<SelectPrimitive.GroupLabel.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectLabel = ({ className, style, ...props }: SelectLabelProps) => (
  <SelectPrimitive.GroupLabel
    data-slot="select-label"
    {...stylex.props(styles.label, customClassName(className), style)}
    {...props}
  />
);

type SelectItemProps = Omit<SelectPrimitive.Item.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectItem = ({
  className,
  children,
  style,
  ...props
}: SelectItemProps) => (
  <SelectPrimitive.Item
    data-slot="select-item"
    className={(state) =>
      stylex.props(
        styles.item,
        state.highlighted && styles.itemHighlighted,
        state.disabled && styles.itemDisabled,
        customClassName(className),
        style
      ).className
    }
    {...props}
  >
    <SelectPrimitive.ItemText {...stylex.props(styles.itemText)}>
      {children}
    </SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator
      render={
        <span {...stylex.props(styles.itemIndicator)}>
          <CheckIcon {...stylex.props(styles.icon)} />
        </span>
      }
    />
  </SelectPrimitive.Item>
);

type SelectSeparatorProps = Omit<SelectPrimitive.Separator.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SelectSeparator = ({
  className,
  style,
  ...props
}: SelectSeparatorProps) => (
  <SelectPrimitive.Separator
    data-slot="select-separator"
    {...stylex.props(styles.separator, customClassName(className), style)}
    {...props}
  />
);

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  styles as selectStyles,
};

export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
};
