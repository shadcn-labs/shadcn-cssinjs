"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import { useRef } from "react";
import { css, cx } from "styled-system/css";

const triggerStyle = css({
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: "0",
  color: "muted.foreground",
  cursor: "pointer",
  display: "inline-flex",
  insetInlineEnd: "2",
  justifyContent: "center",
  padding: "0",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
});

const inputWrap = css({
  position: "relative",
  width: "100%",
});

const input = css({
  _focusVisible: {
    borderColor: "ring",
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  _placeholder: { color: "muted.foreground" },
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  color: "foreground",
  fontSize: "0.875rem",
  height: "9",
  outlineStyle: "none",
  paddingInlineEnd: "8",
  paddingInlineStart: "3",
  width: "100%",
});

const chips = css({
  _focusWithin: { borderColor: "ring" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  display: "flex",
  flexWrap: "wrap",
  gap: "1",
  minHeight: "9",
  paddingBlock: "1",
  paddingInline: "2",
  width: "100%",
});

const chip = css({
  alignItems: "center",
  backgroundColor: "secondary",
  borderRadius: "sm",
  color: "secondary.foreground",
  display: "inline-flex",
  fontSize: "0.75rem",
  gap: "1",
  height: "5.5",
  paddingInlineEnd: "1",
  paddingInlineStart: "2",
});

const chipRemove = css({
  _hover: { backgroundColor: "accent" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "sm",
  borderWidth: "0",
  color: "muted.foreground",
  cursor: "pointer",
  display: "inline-flex",
  height: "4",
  justifyContent: "center",
  padding: "0",
  width: "4",
});

const chipsInput = css({
  backgroundColor: "transparent",
  borderWidth: "0",
  color: "foreground",
  flex: "1",
  fontSize: "0.875rem",
  minWidth: "16",
  outlineStyle: "none",
});

const content = css({
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
  maxHeight: "min(var(--available-height), 20rem)",
  minWidth: "var(--anchor-width)",
  opacity: "1",
  outlineStyle: "none",
  overflowY: "auto",
  padding: "1",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  width: "var(--anchor-width)",
  zIndex: "50",
});

const list = css({ overflowY: "auto" });

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
  height: "3.5",
  insetInlineEnd: "2",
  justifyContent: "center",
  position: "absolute",
  width: "3.5",
});

const groupLabel = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  fontWeight: "medium",
  paddingBlock: "1.5",
  paddingInline: "2",
});

const empty = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  paddingBlock: "6",
  textAlign: "center",
});

const useComboboxAnchor = () => useRef<HTMLDivElement | null>(null);

const Combobox = ComboboxPrimitive.Root;

const ComboboxValue = ComboboxPrimitive.Value;

const ComboboxTrigger = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Trigger>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Trigger
    className={cx(triggerStyle, className)}
    data-slot="combobox-trigger"
    {...props}
  >
    {children ?? <ChevronsUpDownIcon size={16} />}
  </ComboboxPrimitive.Trigger>
);

const ComboboxClear = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Clear>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Clear
    className={cx(triggerStyle, className)}
    data-slot="combobox-clear"
    {...props}
  >
    {children ?? <XIcon size={16} />}
  </ComboboxPrimitive.Clear>
);

const ComboboxInput = ({
  className,
  showTrigger = true,
  showClear = false,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "className"> & {
  className?: string;
  showTrigger?: boolean;
  showClear?: boolean;
}) => (
  <div className={inputWrap}>
    <ComboboxPrimitive.Input
      className={cx(input, className)}
      data-slot="combobox-input"
      {...props}
    />
    {showClear ? <ComboboxClear /> : null}
    {showTrigger && !showClear ? <ComboboxTrigger /> : null}
  </div>
);

const ComboboxChips = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Chips>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Chips
    className={cx(chips, className)}
    data-slot="combobox-chips"
    {...props}
  />
);

const ComboboxChip = ({
  className,
  children,
  showRemove = true,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Chip>, "className"> & {
  className?: string;
  showRemove?: boolean;
}) => (
  <ComboboxPrimitive.Chip
    className={cx(chip, className)}
    data-slot="combobox-chip"
    {...props}
  >
    {children}
    {showRemove ? (
      <ComboboxPrimitive.ChipRemove
        className={chipRemove}
        data-slot="combobox-chip-remove"
      >
        <XIcon size={12} />
      </ComboboxPrimitive.ChipRemove>
    ) : null}
  </ComboboxPrimitive.Chip>
);

const ComboboxChipsInput = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Input
    className={cx(chipsInput, className)}
    data-slot="combobox-chips-input"
    {...props}
  />
);

const ComboboxContent = ({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  anchor,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Popup>, "className"> & {
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  anchor?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>["anchor"];
}) => (
  <ComboboxPrimitive.Portal>
    <ComboboxPrimitive.Positioner
      align={align}
      anchor={anchor}
      side={side}
      sideOffset={sideOffset}
      style={{ zIndex: 50 }}
    >
      <ComboboxPrimitive.Popup
        className={cx(content, className)}
        data-slot="combobox-content"
        {...props}
      />
    </ComboboxPrimitive.Positioner>
  </ComboboxPrimitive.Portal>
);

const ComboboxList = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.List>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.List
    className={cx(list, className)}
    data-slot="combobox-list"
    {...props}
  />
);

const ComboboxItem = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Item
    className={cx(item, className)}
    data-slot="combobox-item"
    {...props}
  >
    {children}
    <ComboboxPrimitive.ItemIndicator className={itemIndicator}>
      <CheckIcon size={16} />
    </ComboboxPrimitive.ItemIndicator>
  </ComboboxPrimitive.Item>
);

const ComboboxGroup = (
  props: React.ComponentProps<typeof ComboboxPrimitive.Group>
) => <ComboboxPrimitive.Group data-slot="combobox-group" {...props} />;

const ComboboxCollection = (
  props: React.ComponentProps<typeof ComboboxPrimitive.Collection>
) => <ComboboxPrimitive.Collection {...props} />;

const ComboboxSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={className}
    data-slot="combobox-separator"
    style={{
      backgroundColor: "var(--border)",
      height: 1,
      marginBlock: "0.25rem",
      marginInline: "-0.25rem",
      ...style,
    }}
    {...props}
  />
);

const ComboboxGroupLabel = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>,
  "className"
> & { className?: string }) => (
  <ComboboxPrimitive.GroupLabel
    className={cx(groupLabel, className)}
    data-slot="combobox-group-label"
    {...props}
  />
);

const ComboboxEmpty = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Empty>, "className"> & {
  className?: string;
}) => (
  <ComboboxPrimitive.Empty
    className={cx(empty, className)}
    data-slot="combobox-empty"
    {...props}
  />
);

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxGroupLabel as ComboboxLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
