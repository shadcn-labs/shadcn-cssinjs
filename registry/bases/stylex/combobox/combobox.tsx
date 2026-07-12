"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import { useRef } from "react";

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
  const p = stylex.props(styles.trigger);
  return (
    <ComboboxPrimitive.Trigger
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.clear);
  return (
    <ComboboxPrimitive.Clear
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const wrap = stylex.props(styles.inputWrap);
  const input = stylex.props(styles.input);
  return (
    <div className={wrap.className} style={wrap.style}>
      <ComboboxPrimitive.Input
        className={
          [input.className, className].filter(Boolean).join(" ") || undefined
        }
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
  const p = stylex.props(styles.chips);
  return (
    <ComboboxPrimitive.Chips
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.chip);
  const remove = stylex.props(styles.chipRemove);
  return (
    <ComboboxPrimitive.Chip
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.chipsInput);
  return (
    <ComboboxPrimitive.Input
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
          [
            stylex.props(
              styles.content,
              (state.transitionStatus === "starting" ||
                state.transitionStatus === "ending") &&
                styles.contentHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
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
  const p = stylex.props(styles.list);
  return (
    <ComboboxPrimitive.List
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const indicator = stylex.props(styles.itemIndicator);
  return (
    <ComboboxPrimitive.Item
      className={(state) =>
        [
          stylex.props(styles.item, state.highlighted && styles.itemHighlighted)
            .className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
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
  const p = stylex.props(styles.groupLabel);
  return (
    <ComboboxPrimitive.GroupLabel
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.empty);
  return (
    <ComboboxPrimitive.Empty
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
