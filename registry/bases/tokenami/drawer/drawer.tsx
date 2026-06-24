"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const backdrop = css.compose({
  "--background-color": "var(---, color-mix(in oklab, black 80%, transparent))",
  "--ending_opacity": 0,
  "--inset": 0,
  "--opacity": 1,
  "--position": "fixed",
  "--starting_opacity": 0,
  "--transition-duration": "var(---, 0.3s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const popup = css.compose({
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_border)",
  "--border-start-end-radius": "var(---, 10px)",
  "--border-start-start-radius": "var(---, 10px)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--bottom": 0,
  "--display": "flex",
  "--flex-direction": "column",
  "--inset-inline": 0,
  "--max-height": "var(---, 82vh)",
  "--outline-style": "none",
  "--position": "fixed",
  "--z-index": "var(---, 50)",
});

const handle = css.compose({
  "--background-color": "var(--color_muted)",
  "--border-radius": "var(---, 9999px)",
  "--cursor": "grab",
  "--flex-shrink": "var(---, 0)",
  "--height": 1.5,
  "--margin-bottom": 0,
  "--margin-inline": "var(---, auto)",
  "--margin-top": 4,
  "--width": "var(---, 100px)",
});

const header = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 1.5,
  "--padding": 4,
  "--text-align": "center",
});

const footer = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--margin-top": "var(---, auto)",
  "--padding": 4,
});

const title = css.compose({
  "--color": "var(--color_foreground)",
  "--font-size": "1.125rem",
  "--font-weight": 600,
  "--letter-spacing": "var(---, -0.025em)",
  "--line-height": "var(---, 1)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
});

const Drawer = (props: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root data-slot="drawer" {...props} />
);

const DrawerTrigger = (
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>
) => <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;

const DrawerClose = (
  props: React.ComponentProps<typeof DrawerPrimitive.Close>
) => <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;

const DrawerPortal = (
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>
) => <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;

const DrawerOverlay = (
  props: React.ComponentProps<typeof DrawerPrimitive.Backdrop>
) => {
  const [cn] = backdrop();
  return (
    <DrawerPrimitive.Backdrop
      className={cn()}
      data-slot="drawer-overlay"
      {...props}
    />
  );
};

const DrawerHandle = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = handle();
  return (
    <div
      aria-hidden="true"
      className={cn(className)}
      data-slot="drawer-handle"
      style={sx(style)}
      {...props}
    />
  );
};

const DrawerContent = ({
  className,
  style,
  children,
  showHandle = true,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DrawerPrimitive.Popup>,
    "className" | "style"
  >
> & { className?: string; showHandle?: boolean }) => {
  const [cn, sx] = popup();
  return (
    <DrawerPrimitive.Portal>
      <DrawerOverlay />
      <DrawerPrimitive.Popup
        className={cn(className)}
        data-slot="drawer-content"
        style={sx(style)}
        {...props}
      >
        {showHandle && <DrawerHandle />}
        {children}
      </DrawerPrimitive.Popup>
    </DrawerPrimitive.Portal>
  );
};

const DrawerHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="drawer-header"
      style={sx(style)}
      {...props}
    />
  );
};

const DrawerFooter = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = footer();
  return (
    <div
      className={cn(className)}
      data-slot="drawer-footer"
      style={sx(style)}
      {...props}
    />
  );
};

const DrawerTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DrawerPrimitive.Title>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = title();
  return (
    <DrawerPrimitive.Title
      className={cn(className)}
      data-slot="drawer-title"
      style={sx(style)}
      {...props}
    />
  );
};

const DrawerDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DrawerPrimitive.Description>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = description();
  return (
    <DrawerPrimitive.Description
      className={cn(className)}
      data-slot="drawer-description"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
