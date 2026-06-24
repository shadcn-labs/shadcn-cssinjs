"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const root = css({
  display: "flex",
  justifyContent: "center",
  maxWidth: "max-content",
  position: "relative",
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
  opacity: "1",
  overflow: "hidden",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const viewport = css({
  height: "var(--popup-height)",
  position: "relative",
  transitionDuration: "200ms",
  transitionProperty: "height, width",
  transitionTimingFunction: "ease-in-out",
  width: "var(--popup-width)",
});

const list = css({
  alignItems: "center",
  display: "flex",
  gap: "1",
  listStyle: "none",
  margin: "0",
  padding: "0",
});

const trigger = css({
  _hover: { backgroundColor: "accent", color: "accent.foreground" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "md",
  borderWidth: "0",
  color: "foreground",
  cursor: "default",
  display: "inline-flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "1",
  height: "9",
  outlineStyle: "none",
  paddingInline: "3",
});

const icon = css({
  height: "3",
  transitionDuration: "200ms",
  transitionProperty: "transform",
  transitionTimingFunction: "ease-in-out",
  width: "3",
});

const content = css({
  padding: "4",
  width: "100%",
});

const link = css({
  _hover: { backgroundColor: "accent", color: "accent.foreground" },
  backgroundColor: "transparent",
  borderRadius: "sm",
  color: "foreground",
  display: "block",
  fontSize: "0.875rem",
  outlineStyle: "none",
  paddingBlock: "2",
  paddingInline: "3",
  textDecorationLine: "none",
  transitionDuration: "100ms",
  transitionProperty: "background-color, color",
});

const NavigationMenu = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Root>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Root
    className={cx(root, className)}
    data-slot="navigation-menu"
    {...props}
  >
    {children}
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner sideOffset={6}>
        <NavigationMenuPrimitive.Popup
          className={popup}
          data-slot="navigation-menu-popup"
        >
          <NavigationMenuPrimitive.Viewport
            className={viewport}
            data-slot="navigation-menu-viewport"
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  </NavigationMenuPrimitive.Root>
);

const NavigationMenuList = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.List>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.List
    className={cx(list, className)}
    data-slot="navigation-menu-list"
    {...props}
  />
);

const NavigationMenuItem = (
  props: React.ComponentProps<typeof NavigationMenuPrimitive.Item>
) => (
  <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />
);

const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Trigger
    className={cx(trigger, className)}
    data-slot="navigation-menu-trigger"
    {...props}
  >
    {children}
    <NavigationMenuPrimitive.Icon className={icon}>
      <ChevronDownIcon size={12} />
    </NavigationMenuPrimitive.Icon>
  </NavigationMenuPrimitive.Trigger>
);

const NavigationMenuContent = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Content>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Content
    className={cx(content, className)}
    data-slot="navigation-menu-content"
    {...props}
  />
);

const NavigationMenuLink = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Link>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Link
    className={cx(link, className)}
    data-slot="navigation-menu-link"
    {...props}
  />
);

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
};
