"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import { useRef } from "react";

import { cx, x } from "@/lib/utils";

import { styles } from "./combobox.stylex";

const useComboboxAnchor = () => useRef<HTMLDivElement | null>(null);

const Combobox = ComboboxPrimitive.Root;

const ComboboxValue = ComboboxPrimitive.Value;

const ComboboxTrigger = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Trigger>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.trigger);
  return (
    <ComboboxPrimitive.Trigger
      className={cx(p.className, className)}
      data-slot="combobox-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children ?? <ChevronsUpDownIcon size={16} />}
    </ComboboxPrimitive.Trigger>
  );
};

const ComboboxClear = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Clear>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.clear);
  return (
    <ComboboxPrimitive.Clear
      className={cx(p.className, className)}
      data-slot="combobox-clear"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children ?? <XIcon size={16} />}
    </ComboboxPrimitive.Clear>
  );
};

const ComboboxInput = ({
  className,
  style,
  showTrigger = true,
  showClear = false,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "className"> & {
  className?: string;
  showTrigger?: boolean;
  showClear?: boolean;
}) => {
  const wrap = x(styles.inputWrap);
  const input = x(styles.input);
  return (
    <div className={wrap.className} style={wrap.style}>
      <ComboboxPrimitive.Input
        className={cx(input.className, className)}
        data-slot="combobox-input"
        style={{ ...input.style, ...style }}
        {...props}
      />
      {showClear ? <ComboboxClear /> : null}
      {showTrigger && !showClear ? <ComboboxTrigger /> : null}
    </div>
  );
};

const ComboboxChips = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Chips>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.chips);
  return (
    <ComboboxPrimitive.Chips
      className={cx(p.className, className)}
      data-slot="combobox-chips"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ComboboxChip = ({
  className,
  style,
  children,
  showRemove = true,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Chip>, "className"> & {
  className?: string;
  showRemove?: boolean;
}) => {
  const p = x(styles.chip);
  const remove = x(styles.chipRemove);
  return (
    <ComboboxPrimitive.Chip
      className={cx(p.className, className)}
      data-slot="combobox-chip"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
      {showRemove ? (
        <ComboboxPrimitive.ChipRemove
          className={remove.className}
          data-slot="combobox-chip-remove"
          style={remove.style}
        >
          <XIcon size={12} />
        </ComboboxPrimitive.ChipRemove>
      ) : null}
    </ComboboxPrimitive.Chip>
  );
};

const ComboboxChipsInput = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.chipsInput);
  return (
    <ComboboxPrimitive.Input
      className={cx(p.className, className)}
      data-slot="combobox-chips-input"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ComboboxContent = ({
  className,
  style,
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
        className={(state) =>
          cx(
            x(
              styles.content,
              (state.transitionStatus === "starting" ||
                state.transitionStatus === "ending") &&
                styles.contentHidden
            ).className,
            className
          )
        }
        data-slot="combobox-content"
        style={style}
        {...props}
      />
    </ComboboxPrimitive.Positioner>
  </ComboboxPrimitive.Portal>
);

const ComboboxList = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.List>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.list);
  return (
    <ComboboxPrimitive.List
      className={cx(p.className, className)}
      data-slot="combobox-list"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ComboboxItem = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Item>, "className"> & {
  className?: string;
}) => {
  const indicator = x(styles.itemIndicator);
  return (
    <ComboboxPrimitive.Item
      className={(state) =>
        cx(
          x(styles.item, state.highlighted && styles.itemHighlighted).className,
          className
        )
      }
      data-slot="combobox-item"
      style={style}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        className={indicator.className}
        style={indicator.style}
      >
        <CheckIcon size={16} />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
};

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
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>,
  "className"
> & {
  className?: string;
}) => {
  const p = x(styles.groupLabel);
  return (
    <ComboboxPrimitive.GroupLabel
      className={cx(p.className, className)}
      data-slot="combobox-group-label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ComboboxEmpty = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxPrimitive.Empty>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.empty);
  return (
    <ComboboxPrimitive.Empty
      className={cx(p.className, className)}
      data-slot="combobox-empty"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
