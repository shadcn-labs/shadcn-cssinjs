"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { styles } from "./navigation-menu.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const NavigationMenu = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Root>,
  "className"
> & {
  className?: string;
}) => {
  const root = stylex.props(styles.root);
  return (
    <NavigationMenuPrimitive.Root
      className={
        [root.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="navigation-menu"
      style={{ ...root.style, ...style }}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Portal>
        <NavigationMenuPrimitive.Positioner sideOffset={6}>
          <NavigationMenuPrimitive.Popup
            className={(state) =>
              stylex.props(
                styles.popup,
                hidden(state.transitionStatus) && styles.popupHidden
              ).className
            }
            data-slot="navigation-menu-popup"
          >
            <NavigationMenuPrimitive.Viewport
              className={stylex.props(styles.viewport).className}
              data-slot="navigation-menu-viewport"
            />
          </NavigationMenuPrimitive.Popup>
        </NavigationMenuPrimitive.Positioner>
      </NavigationMenuPrimitive.Portal>
    </NavigationMenuPrimitive.Root>
  );
};

const NavigationMenuList = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.List>,
  "className"
> & {
  className?: string;
}) => {
  const p = stylex.props(styles.list);
  return (
    <NavigationMenuPrimitive.List
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="navigation-menu-list"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const NavigationMenuItem = (
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Item>
) => (
  <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />
);

const NavigationMenuTrigger = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>,
  "className"
> & { className?: string }) => {
  const p = stylex.props(styles.trigger);
  return (
    <NavigationMenuPrimitive.Trigger
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="navigation-menu-trigger"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Icon
        className={stylex.props(styles.icon).className}
      >
        <ChevronDownIcon size={12} />
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Content>,
  "className"
> & { className?: string }) => {
  const p = stylex.props(styles.content);
  return (
    <NavigationMenuPrimitive.Content
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="navigation-menu-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const NavigationMenuLink = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Link>,
  "className"
> & {
  className?: string;
}) => {
  const p = stylex.props(styles.link);
  return (
    <NavigationMenuPrimitive.Link
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="navigation-menu-link"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
};
