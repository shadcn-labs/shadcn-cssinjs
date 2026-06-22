"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./menubar.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const Menubar = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenubarPrimitive>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.bar);
  return (
    <MenubarPrimitive
      className={cx(p.className, className)}
      data-slot="menubar"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MenubarMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;

const MenubarTrigger = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Trigger>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.trigger);
  return (
    <MenuPrimitive.Trigger
      className={cx(p.className, className)}
      data-slot="menubar-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MenubarContent = ({
  className,
  style,
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
        className={(state) =>
          cx(
            x(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className
          )
        }
        data-slot="menubar-content"
        style={style}
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarItem = ({
  className,
  style,
  inset,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
}) => {
  const p = x(styles.item, inset && styles.itemInset);
  return (
    <MenuPrimitive.Item
      className={cx(p.className, className)}
      data-inset={inset ? "" : undefined}
      data-slot="menubar-item"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MenubarCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
  "className"
> & {
  className?: string;
}) => {
  const p = x(styles.item, styles.itemInset);
  const indicator = x(styles.indicatorWrap);
  const icon = x(styles.icon);
  return (
    <MenuPrimitive.CheckboxItem
      className={cx(p.className, className)}
      data-slot="menubar-checkbox-item"
      style={{ position: "relative", ...p.style, ...style }}
      {...props}
    >
      <span className={indicator.className} style={indicator.style}>
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icon.className} style={icon.style} />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

const MenubarRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;

const MenubarRadioItem = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.RadioItem>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.item, styles.itemInset);
  const indicator = x(styles.indicatorWrap);
  return (
    <MenuPrimitive.RadioItem
      className={cx(p.className, className)}
      data-slot="menubar-radio-item"
      style={{ position: "relative", ...p.style, ...style }}
      {...props}
    >
      <span className={indicator.className} style={indicator.style}>
        <MenuPrimitive.RadioItemIndicator>
          <CircleIcon
            style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

const MenubarSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="menubar-sub" {...props} />;

const MenubarSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  "className"
> & {
  className?: string;
  inset?: boolean;
}) => {
  const p = x(styles.item, inset && styles.itemInset);
  const icon = x(styles.icon);
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cx(p.className, className)}
      data-slot="menubar-sub-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icon.className}
        style={{ ...icon.style, marginInlineStart: "auto" }}
      />
    </MenuPrimitive.SubmenuTrigger>
  );
};

const MenubarSubContent = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner align="start" side="right" sideOffset={2}>
      <MenuPrimitive.Popup
        className={(state) =>
          cx(
            x(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className
          )
        }
        data-slot="menubar-sub-content"
        style={style}
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarSeparator = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.separator);
  return (
    <MenuPrimitive.Separator
      className={cx(p.className, className)}
      data-slot="menubar-separator"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MenubarShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.shortcut);
  return (
    <span
      className={cx(p.className, className)}
      data-slot="menubar-shortcut"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const MenubarGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="menubar-group" {...props} />;

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
