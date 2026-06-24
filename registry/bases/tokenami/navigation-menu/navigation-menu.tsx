"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import type { TokenamiStyle } from "@tokenami/css";
import { ChevronDownIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--display": "flex",
  "--justify-content": "center",
  "--max-width": "var(---, max-content)",
  "--position": "relative",
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
  "--ending_transform": "var(---, scale(0.95))",
  "--opacity": 1,
  "--overflow": "hidden",
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const viewport = css.compose({
  "--height": "var(---, var(--popup-height))",
  "--position": "relative",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, height, width)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, var(--popup-width))",
});

const list = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 1,
  "--list-style": "none",
  "--margin": 0,
  "--padding": 0,
});

const trigger = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "default",
  "--display": "inline-flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 1,
  "--height": 9,
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-inline": 3,
});

const icon = css.compose({
  "--height": 3,
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": 3,
});

const content = css.compose({
  "--padding": 4,
  "--width": "var(---, 100%)",
});

const link = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--color": "var(--color_foreground)",
  "--display": "block",
  "--font-size": "0.875rem",
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 2,
  "--padding-inline": 3,
  "--text-decoration-line": "none",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",
});

const NavigationMenu = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof NavigationMenuPrimitive.Root>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = root();
  const [pcn] = popup();
  const [vcn, vsx] = viewport();
  return (
    <NavigationMenuPrimitive.Root
      className={cn(className)}
      data-slot="navigation-menu"
      style={sx(style)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Portal>
        <NavigationMenuPrimitive.Positioner sideOffset={6}>
          <NavigationMenuPrimitive.Popup
            className={pcn()}
            data-slot="navigation-menu-popup"
          >
            <NavigationMenuPrimitive.Viewport
              className={vcn()}
              data-slot="navigation-menu-viewport"
              style={vsx()}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof NavigationMenuPrimitive.List>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = list();
  return (
    <NavigationMenuPrimitive.List
      className={cn(className)}
      data-slot="navigation-menu-list"
      style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = trigger();
  const [icn, isx] = icon();
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(className)}
      data-slot="navigation-menu-trigger"
      style={sx(style)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Icon className={icn()} style={isx()}>
        <ChevronDownIcon size={12} />
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof NavigationMenuPrimitive.Content>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = content();
  return (
    <NavigationMenuPrimitive.Content
      className={cn(className)}
      data-slot="navigation-menu-content"
      style={sx(style)}
      {...props}
    />
  );
};

const NavigationMenuLink = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof NavigationMenuPrimitive.Link>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = link();
  return (
    <NavigationMenuPrimitive.Link
      className={cn(className)}
      data-slot="navigation-menu-link"
      style={sx(style)}
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
