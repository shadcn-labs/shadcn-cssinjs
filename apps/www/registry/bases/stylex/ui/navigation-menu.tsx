"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  content: {
    padding: "1rem",
    width: "100%",
  },
  icon: {
    height: "0.75rem",
    transition: "transform 0.2s ease-in-out",
    width: "0.75rem",
  },
  link: {
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.sm,
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    display: "block",
    fontSize: "0.875rem",
    outline: "none",
    paddingBlock: "0.5rem",
    paddingInline: "0.75rem",
    textDecorationLine: "none",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  list: {
    alignItems: "center",
    display: "flex",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    opacity: 1,
    overflow: "hidden",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: { opacity: 0, transform: "scale(0.95)" },
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "max-content",
    position: "relative",
  },
  trigger: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    cursor: "default",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "2.25rem",
    outline: "none",
    paddingInline: "0.75rem",
  },
  viewport: {
    height: "var(--popup-height)",
    position: "relative",
    transition: "height 0.2s ease-in-out, width 0.2s ease-in-out",
    width: "var(--popup-width)",
  },
});

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
}) => (
  <NavigationMenuPrimitive.Root
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="navigation-menu"
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

const NavigationMenuList = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.List>,
  "className"
> & {
  className?: string;
}) => (
  <NavigationMenuPrimitive.List
    {...stylex.props(
      styles.list,
      customClassName(className),
      style as StyleXStyles
    )}
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
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Trigger
    {...stylex.props(
      styles.trigger,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="navigation-menu-trigger"
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

const NavigationMenuContent = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Content>,
  "className"
> & { className?: string }) => (
  <NavigationMenuPrimitive.Content
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="navigation-menu-content"
    {...props}
  />
);

const NavigationMenuLink = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Link>,
  "className"
> & {
  className?: string;
}) => (
  <NavigationMenuPrimitive.Link
    {...stylex.props(
      styles.link,
      customClassName(className),
      style as StyleXStyles
    )}
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
