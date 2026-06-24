"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { css, cva, cx } from "styled-system/css";

const popup = css({
  _ending: { opacity: "0", transform: "scale(0.95)" },
  _starting: { opacity: "0", transform: "scale(0.95)" },
  backgroundColor: "popover",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  color: "popover.foreground",
  minWidth: "32",
  opacity: "1",
  outlineStyle: "none",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "1",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const item = cva({
  base: {
    _disabled: { opacity: "0.5", pointerEvents: "none" },
    _highlighted: {
      backgroundColor: "accent",
      color: "accent.foreground",
    },
    alignItems: "center",
    borderRadius: "0.125rem",
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "2",
    outlineStyle: "none",
    paddingBlock: "1.5",
    paddingInline: "2",
    position: "relative",
    transitionDuration: "100ms",
    transitionProperty: "background-color, color",
    userSelect: "none",
  },
  defaultVariants: { indent: "none", variant: "default" },
  variants: {
    indent: {
      inset: { paddingInlineStart: "8" },
      none: {},
    },
    variant: {
      default: {},
      destructive: {
        _highlighted: {
          backgroundColor:
            "color-mix(in oklab, var(--destructive) 10%, transparent)",
          color: "destructive",
        },
        color: "destructive",
      },
    },
  },
});

const indicatorWrap = css({
  alignItems: "center",
  display: "flex",
  height: "3.5",
  insetInlineStart: "2",
  justifyContent: "center",
  pointerEvents: "none",
  position: "absolute",
  width: "3.5",
});

const icon = css({
  height: "4",
  width: "4",
});

const iconAuto = css({
  height: "4",
  marginInlineStart: "auto",
  width: "4",
});

const label = cva({
  base: {
    color: "foreground",
    fontSize: "0.875rem",
    fontWeight: "semibold",
    paddingBlock: "1.5",
    paddingInline: "2",
  },
  defaultVariants: { indent: "none" },
  variants: {
    indent: {
      inset: { paddingInlineStart: "8" },
      none: {},
    },
  },
});

const separator = css({
  backgroundColor: "border",
  height: "1px",
  marginBlock: "1",
  marginInline: "-1",
});

const shortcut = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  letterSpacing: "0.05em",
  marginInlineStart: "auto",
  opacity: "0.6",
});

const DropdownMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;

const DropdownMenuPortal = (
  props: React.ComponentProps<typeof MenuPrimitive.Portal>
) => <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;

const DropdownMenuTrigger = (
  props: React.ComponentProps<typeof MenuPrimitive.Trigger>
) => <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;

const DropdownMenuGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;

const DropdownMenuRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => (
  <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
);

const DropdownMenuSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  alignOffset,
  collisionPadding,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  alignOffset?: number;
  sideOffset?: number;
  collisionPadding?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      collisionPadding={collisionPadding}
      side={side}
      sideOffset={sideOffset}
    >
      <MenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="dropdown-menu-content"
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => (
  <MenuPrimitive.Item
    className={cx(
      item({ indent: inset ? "inset" : "none", variant }),
      className
    )}
    data-inset={inset ? "" : undefined}
    data-slot="dropdown-menu-item"
    data-variant={variant}
    {...props}
  />
);

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
  "className"
> & { className?: string }) => (
  <MenuPrimitive.CheckboxItem
    className={cx(item({ indent: "inset", variant: "default" }), className)}
    data-slot="dropdown-menu-checkbox-item"
    {...props}
  >
    <span className={indicatorWrap}>
      <MenuPrimitive.CheckboxItemIndicator>
        <CheckIcon className={icon} />
      </MenuPrimitive.CheckboxItemIndicator>
    </span>
    {children}
  </MenuPrimitive.CheckboxItem>
);

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.RadioItem>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.RadioItem
    className={cx(item({ indent: "inset", variant: "default" }), className)}
    data-slot="dropdown-menu-radio-item"
    {...props}
  >
    <span className={indicatorWrap}>
      <MenuPrimitive.RadioItemIndicator>
        <CircleIcon
          style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
        />
      </MenuPrimitive.RadioItemIndicator>
    </span>
    {children}
  </MenuPrimitive.RadioItem>
);

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) => (
  <div
    className={cx(label({ indent: inset ? "inset" : "none" }), className)}
    data-inset={inset ? "" : undefined}
    data-slot="dropdown-menu-label"
    {...props}
  />
);

const DropdownMenuSeparator = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Separator
    className={cx(separator, className)}
    data-slot="dropdown-menu-separator"
    {...props}
  />
);

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    className={cx(shortcut, className)}
    data-slot="dropdown-menu-shortcut"
    {...props}
  />
);

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  "className"
> & { className?: string; inset?: boolean }) => (
  <MenuPrimitive.SubmenuTrigger
    className={cx(
      item({ indent: inset ? "inset" : "none", variant: "default" }),
      className
    )}
    data-inset={inset ? "" : undefined}
    data-slot="dropdown-menu-sub-trigger"
    {...props}
  >
    {children}
    <ChevronRightIcon className={iconAuto} />
  </MenuPrimitive.SubmenuTrigger>
);

const DropdownMenuSubContent = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner>
      <MenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="dropdown-menu-sub-content"
        {...props}
      />
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
