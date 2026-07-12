"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./drawer.stylex";

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
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.handle);
  return (
    <div
      aria-hidden="true"
      data-slot="drawer-handle"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
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
}: Omit<React.ComponentProps<typeof DrawerPrimitive.Popup>, "className"> & {
  className?: string;
  showHandle?: boolean;
}) => {
  const p = stylex.props(styles.popup);
  return (
    <DrawerPrimitive.Portal>
      <DrawerOverlay />
      <DrawerPrimitive.Popup
        data-slot="drawer-content"
        className={
          [p.className, className].filter(Boolean).join(" ") || undefined
        }
        style={{ ...p.style, ...style }}
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
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.header);
  return (
    <div
      data-slot="drawer-header"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DrawerFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.footer);
  return (
    <div
      data-slot="drawer-footer"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DrawerTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DrawerPrimitive.Title>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.title);
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DrawerDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof DrawerPrimitive.Description>,
  "className"
> & {
  className?: string;
}) => {
  const p = stylex.props(styles.description);
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
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
