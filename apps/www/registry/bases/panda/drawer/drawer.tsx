"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { css, cx } from "styled-system/css";

const backdrop = css({
  _ending: { opacity: "0" },
  _starting: { opacity: "0" },
  backgroundColor: "color-mix(in oklab, black 80%, transparent)",
  inset: "0",
  opacity: "1",
  position: "fixed",
  transitionDuration: "300ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const popup = css({
  backgroundColor: "background",
  borderColor: "border",
  borderStartEndRadius: "10px",
  borderStartStartRadius: "10px",
  borderStyle: "solid",
  borderWidth: "1px",
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  insetInline: "0",
  maxHeight: "82vh",
  outlineStyle: "none",
  position: "fixed",
  zIndex: "50",
});

const handle = css({
  backgroundColor: "muted",
  borderRadius: "9999px",
  cursor: "grab",
  flexShrink: "0",
  height: "1.5",
  marginBottom: "0",
  marginInline: "auto",
  marginTop: "4",
  width: "100px",
});

const header = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.5",
  padding: "4",
  textAlign: "center",
});

const footer = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  marginTop: "auto",
  padding: "4",
});

const title = css({
  color: "foreground",
  fontSize: "1.125rem",
  fontWeight: "semibold",
  letterSpacing: "-0.025em",
  lineHeight: "1",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
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
) => (
  <DrawerPrimitive.Backdrop
    className={backdrop}
    data-slot="drawer-overlay"
    {...props}
  />
);

const DrawerHandle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    aria-hidden="true"
    className={cx(handle, className)}
    data-slot="drawer-handle"
    {...props}
  />
);

const DrawerContent = ({
  className,
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
      className={cx(popup, className)}
      data-slot="drawer-content"
      {...props}
    >
      {showHandle && <DrawerHandle />}
      {children}
    </DrawerPrimitive.Popup>
  </DrawerPrimitive.Portal>
);

const DrawerHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(header, className)} data-slot="drawer-header" {...props} />
);

const DrawerFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(footer, className)} data-slot="drawer-footer" {...props} />
);

const DrawerTitle = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DrawerPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DrawerPrimitive.Title
    className={cx(title, className)}
    data-slot="drawer-title"
    {...props}
  />
);

const DrawerDescription = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof DrawerPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <DrawerPrimitive.Description
    className={cx(description, className)}
    data-slot="drawer-description"
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
