"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";

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
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Item
    className={cx(x(styles.item).className, className)}
    data-slot="menubar-item"
    style={style}
    {...props}
  />
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
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
};
