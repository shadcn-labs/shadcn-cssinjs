"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  backdrop: {
    backgroundColor: "color-mix(in oklab, black 80%, transparent)",
    inset: 0,
    opacity: 1,
    position: "fixed",
    transition: "opacity 0.3s ease-in-out",
    zIndex: 50,
  },
  backdropHidden: { opacity: 0 },
  description: { color: colors.mutedForeground, fontSize: "0.875rem" },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "auto",
    padding: "1rem",
  },
  handle: {
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    cursor: "grab",
    flexShrink: 0,
    height: "0.375rem",
    margin: "1rem auto 0",
    width: "100px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    padding: "1rem",
    textAlign: "center",
  },
  popup: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderStartEndRadius: "10px",
    borderStartStartRadius: "10px",
    borderStyle: "solid",
    borderWidth: "1px",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    insetInline: 0,
    maxHeight: "82vh",
    outline: "none",
    position: "fixed",
    zIndex: 50,
  },
  title: {
    color: colors.foreground,
    fontSize: "1.125rem",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1,
  },
});

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
) => (
  <DrawerPrimitive.Backdrop
    data-slot="drawer-overlay"
    className={(state) =>
      stylex.props(
        styles.backdrop,
        hidden(state.transitionStatus) && styles.backdropHidden
      ).className
    }
    {...props}
  />
);

const DrawerHandle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    aria-hidden="true"
    data-slot="drawer-handle"
    {...stylex.props(
      styles.handle,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DrawerContent = ({
  className,
  style,
  children,
  showHandle = true,
  ...props
}: Omit<React.ComponentProps<typeof DrawerPrimitive.Popup>, "className"> & {
  className?: string;
  showHandle?: boolean;
}) => (
  <DrawerPrimitive.Portal>
    <DrawerOverlay />
    <DrawerPrimitive.Popup
      data-slot="drawer-content"
      {...stylex.props(
        styles.popup,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    >
      {showHandle && <DrawerHandle />}
      {children}
    </DrawerPrimitive.Popup>
  </DrawerPrimitive.Portal>
);

const DrawerHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="drawer-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DrawerFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="drawer-footer"
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DrawerTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DrawerPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DrawerPrimitive.Title
    data-slot="drawer-title"
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DrawerDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof DrawerPrimitive.Description>,
  "className"
> & {
  className?: string;
}) => (
  <DrawerPrimitive.Description
    data-slot="drawer-description"
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
