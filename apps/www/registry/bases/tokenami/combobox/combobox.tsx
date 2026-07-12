"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import { useRef } from "react";

import { css } from "@/lib/tokenami";

const triggerStyle = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_muted-foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--inset-inline-end": 2,
  "--justify-content": "center",
  "--padding": 0,
  "--position": "absolute",
  "--top": "var(---, 50%)",
  "--transform": "var(---, translateY(-50%))",
});

const inputWrap = css.compose({
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const input = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--color": "var(--color_foreground)",
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--height": 9,
  "--outline-style": "none",
  "--padding-inline-end": 8,
  "--padding-inline-start": 3,
  "--placeholder_color": "var(--color_muted-foreground)",
  "--width": "var(---, 100%)",
});

const chips = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--display": "flex",
  "--flex-wrap": "wrap",
  "--focus-within_border-color": "var(--color_ring)",
  "--gap": 1,
  "--min-height": 9,
  "--padding-block": 1,
  "--padding-inline": 2,
  "--width": "var(---, 100%)",
});

const chip = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_secondary)",
  "--border-radius": "var(--radii_sm)",
  "--color": "var(--color_secondary-foreground)",
  "--display": "inline-flex",
  "--font-size": "0.75rem",
  "--gap": 1,
  "--height": 5.5,
  "--padding-inline-end": 1,
  "--padding-inline-start": 2,
});

const chipRemove = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_muted-foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--height": 4,
  "--hover_background-color": "var(--color_accent)",
  "--justify-content": "center",
  "--padding": 0,
  "--width": 4,
});

const chipsInput = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--flex": "var(---, 1)",
  "--font-size": "0.875rem",
  "--min-width": 16,
  "--outline-style": "none",
});

const content = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_popover-foreground)",
  "--ending_opacity": 0,
  "--max-height": "var(---, min(var(--available-height), 20rem))",
  "--min-width": "var(---, var(--anchor-width))",
  "--opacity": 1,
  "--outline-style": "none",
  "--overflow-y": "auto",
  "--padding": 1,
  "--starting_opacity": 0,
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, var(--anchor-width))",
  "--z-index": "var(---, 50)",
});

const list = css.compose({
  "--overflow-y": "auto",
});

const item = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--color": "var(--color_popover-foreground)",
  "--cursor": "default",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--highlighted_background-color": "var(--color_accent)",
  "--highlighted_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline-end": 8,
  "--padding-inline-start": 2,
  "--position": "relative",
  "--user-select": "none",
});

const itemIndicator = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 3.5,
  "--inset-inline-end": 2,
  "--justify-content": "center",
  "--position": "absolute",
  "--width": 3.5,
});

const groupLabel = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--font-weight": 500,
  "--padding-block": 1.5,
  "--padding-inline": 2,
});

const empty = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--padding-block": 6,
  "--text-align": "center",
});

const useComboboxAnchor = () => useRef<HTMLDivElement | null>(null);

const Combobox = ComboboxPrimitive.Root;

const ComboboxValue = ComboboxPrimitive.Value;

const ComboboxTrigger = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = triggerStyle();
  return (
    <ComboboxPrimitive.Trigger
      className={cn(className)}
      data-slot="combobox-trigger"
      style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Clear>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = triggerStyle();
  return (
    <ComboboxPrimitive.Clear
      className={cn(className)}
      data-slot="combobox-clear"
      style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Input>,
    "className" | "style"
  >
> & { className?: string; showTrigger?: boolean; showClear?: boolean }) => {
  const [wcn, wsx] = inputWrap();
  const [cn, sx] = input();
  return (
    <div className={wcn()} style={wsx()}>
      <ComboboxPrimitive.Input
        className={cn(className)}
        data-slot="combobox-input"
        style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Chips>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = chips();
  return (
    <ComboboxPrimitive.Chips
      className={cn(className)}
      data-slot="combobox-chips"
      style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Chip>,
    "className" | "style"
  >
> & { className?: string; showRemove?: boolean }) => {
  const [cn, sx] = chip();
  const [rcn, rsx] = chipRemove();
  return (
    <ComboboxPrimitive.Chip
      className={cn(className)}
      data-slot="combobox-chip"
      style={sx(style)}
      {...props}
    >
      {children}
      {showRemove ? (
        <ComboboxPrimitive.ChipRemove
          className={rcn()}
          data-slot="combobox-chip-remove"
          style={rsx()}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Input>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = chipsInput();
  return (
    <ComboboxPrimitive.Input
      className={cn(className)}
      data-slot="combobox-chips-input"
      style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Popup>,
    "className" | "style"
  >
> & {
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  anchor?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>["anchor"];
}) => {
  const [cn, sx] = content();
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        align={align}
        anchor={anchor}
        side={side}
        sideOffset={sideOffset}
        style={{ zIndex: 50 }}
      >
        <ComboboxPrimitive.Popup
          className={cn(className)}
          data-slot="combobox-content"
          style={sx(style)}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};

const ComboboxList = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.List>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = list();
  return (
    <ComboboxPrimitive.List
      className={cn(className)}
      data-slot="combobox-list"
      style={sx(style)}
      {...props}
    />
  );
};

const ComboboxItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Item>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item();
  const [icn, isx] = itemIndicator();
  return (
    <ComboboxPrimitive.Item
      className={cn(className)}
      data-slot="combobox-item"
      style={sx(style)}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator className={icn()} style={isx()}>
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = groupLabel();
  return (
    <ComboboxPrimitive.GroupLabel
      className={cn(className)}
      data-slot="combobox-group-label"
      style={sx(style)}
      {...props}
    />
  );
};

const ComboboxEmpty = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ComboboxPrimitive.Empty>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = empty();
  return (
    <ComboboxPrimitive.Empty
      className={cn(className)}
      data-slot="combobox-empty"
      style={sx(style)}
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
