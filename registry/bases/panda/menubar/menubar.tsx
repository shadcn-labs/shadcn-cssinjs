"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { css, cva, cx } from "styled-system/css";

const bar = css({
  alignItems: "center",
  backgroundColor: "background",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  display: "flex",
  gap: "1",
  height: "9",
  padding: "1",
});

const trigger = css({
  _hover: { backgroundColor: "accent" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "sm",
  borderWidth: "0",
  color: "foreground",
  cursor: "default",
  display: "flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  outlineStyle: "none",
  paddingBlock: "1",
  paddingInline: "3",
  userSelect: "none",
});

const item = cva({
  base: {
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
    paddingInline: "2",
    position: "relative",
    userSelect: "none",
  },
  defaultVariants: { indent: "none" },
  variants: {
    indent: { inset: { paddingInlineStart: "8" }, none: {} },
  },
});

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
  minWidth: "48",
  opacity: "1",
  outlineStyle: "none",
  padding: "1",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const icon = css({ height: "4", width: "4" });
const iconAuto = css({ height: "4", marginInlineStart: "auto", width: "4" });

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
});

const Menubar = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof MenubarPrimitive>, "className"> & {
  className?: string;
}) => (
  <MenubarPrimitive
    className={cx(bar, className)}
    data-slot="menubar"
    {...props}
  />
);

const MenubarMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;

const MenubarGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="menubar-group" {...props} />;

const MenubarRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;

const MenubarSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="menubar-sub" {...props} />;

const MenubarTrigger = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Trigger>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Trigger
    className={cx(trigger, className)}
    data-slot="menubar-trigger"
    {...props}
  />
);

const MenubarContent = ({
  className,
  sideOffset = 6,
  align = "start",
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      align={align}
      side="bottom"
      sideOffset={sideOffset}
    >
      <MenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="menubar-content"
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarItem = ({
  className,
  inset,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
}) => (
  <MenuPrimitive.Item
    className={cx(item({ indent: inset ? "inset" : "none" }), className)}
    data-inset={inset ? "" : undefined}
    data-slot="menubar-item"
    {...props}
  />
);

const MenubarCheckboxItem = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
  "className"
> & {
  className?: string;
}) => (
  <MenuPrimitive.CheckboxItem
    className={cx(item({ indent: "inset" }), className)}
    data-slot="menubar-checkbox-item"
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

const MenubarRadioItem = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.RadioItem>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.RadioItem
    className={cx(item({ indent: "inset" }), className)}
    data-slot="menubar-radio-item"
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

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  "className"
> & { className?: string; inset?: boolean }) => (
  <MenuPrimitive.SubmenuTrigger
    className={cx(item({ indent: inset ? "inset" : "none" }), className)}
    data-inset={inset ? "" : undefined}
    data-slot="menubar-sub-trigger"
    {...props}
  >
    {children}
    <ChevronRightIcon className={iconAuto} />
  </MenuPrimitive.SubmenuTrigger>
);

const MenubarSubContent = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner align="start" side="right" sideOffset={2}>
      <MenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="menubar-sub-content"
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarSeparator = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Separator
    className={cx(separator, className)}
    data-slot="menubar-separator"
    {...props}
  />
);

const MenubarShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    className={cx(shortcut, className)}
    data-slot="menubar-shortcut"
    {...props}
  />
);

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
