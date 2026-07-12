"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const value = css.compose({
  "--overflow": "hidden",
  "--text-align": "start",
  "--text-overflow": "ellipsis",
  "--white-space": "nowrap",
});

const trigger = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--display": "flex",
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--height": 9,
  "--justify-content": "space-between",
  "--outline-style": "none",
  "--padding-inline": 3,
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow, border-color)",
  "--width": "var(---, fit-content)",
});

const icon = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--height": 4,
  "--opacity": 0.5,
  "--pointer-events": "none",
  "--width": 4,
});

const popup = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_popover-foreground)",
  "--ending_opacity": 0,
  "--max-height": "var(---, var(--available-height))",
  "--min-width": 32,
  "--opacity": 1,
  "--outline-style": "none",
  "--overflow-y": "auto",
  "--padding": 1,
  "--starting_opacity": 0,
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const groupLabel = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--padding-block": 1.5,
  "--padding-inline": 2,
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
  "--inset-inline-end": 2,
  "--justify-content": "center",
  "--position": "absolute",
});

const separator = css.compose({
  "--background-color": "var(--color_border)",
  "--height": "var(---, 1px)",
  "--margin-block": 1,
  "--margin-inline": -1,
});

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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof SelectPrimitive.Value>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = value();
  return (
    <SelectPrimitive.Value
      className={cn(className)}
      data-slot="select-value"
      style={sx(style)}
      {...props}
    />
  );
};

const SelectTrigger = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof SelectPrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = trigger();
  const [icn, isx] = icon();
  return (
    <SelectPrimitive.Trigger
      className={cn(className)}
      data-slot="select-trigger"
      style={sx(style)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className={icn()} style={isx()}>
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof SelectPrimitive.Popup>,
    "className" | "style"
  >
> & {
  className?: string;
  sideOffset?: number;
  alignItemWithTrigger?: boolean;
}) => {
  const [cn, sx] = popup();
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        alignItemWithTrigger={alignItemWithTrigger}
        side="bottom"
        sideOffset={sideOffset}
      >
        <SelectPrimitive.Popup
          className={cn(className)}
          data-slot="select-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof SelectPrimitive.GroupLabel>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = groupLabel();
  return (
    <SelectPrimitive.GroupLabel
      className={cn(className)}
      data-slot="select-label"
      style={sx(style)}
      {...props}
    />
  );
};

const SelectItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof SelectPrimitive.Item>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = item();
  const [icn, isx] = itemIndicator();
  return (
    <SelectPrimitive.Item
      className={cn(className)}
      data-slot="select-item"
      style={sx(style)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={icn()} style={isx()}>
        <CheckIcon size={16} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof SelectPrimitive.Separator>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = separator();
  return (
    <SelectPrimitive.Separator
      className={cn(className)}
      data-slot="select-separator"
      style={sx(style)}
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
