"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./dialog.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const Dialog = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

const DialogTrigger = (
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) => <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;

const DialogClose = (
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) => <DialogPrimitive.Close data-slot="dialog-close" {...props} />;

const DialogPortal = (
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) => <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;

const DialogOverlay = (
  props: React.ComponentProps<typeof DialogPrimitive.Backdrop>
) => (
  <DialogPrimitive.Backdrop
    data-slot="dialog-overlay"
    className={(state) =>
      x(
        styles.backdrop,
        hidden(state.transitionStatus) && styles.backdropHidden
      ).className
    }
    {...props}
  />
);

const DialogContent = ({
  children,
  className,
  style,
  showCloseButton = true,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Popup>, "className"> & {
  className?: string;
  showCloseButton?: boolean;
}) => {
  const close = x(styles.closeButton);
  const sr = x(styles.srOnly);
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={(state) =>
          cx(
            x(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className
          )
        }
        style={style}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={close.className}
            style={close.style}
          >
            <XIcon size={16} />
            <span className={sr.className} style={sr.style}>
              Close
            </span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
};

const DialogHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.header);
  return (
    <div
      data-slot="dialog-header"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DialogFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.footer);
  return (
    <div
      data-slot="dialog-footer"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DialogTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.title);
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof DialogPrimitive.Description>,
  "className"
> & { className?: string }) => {
  const p = x(styles.description);
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
