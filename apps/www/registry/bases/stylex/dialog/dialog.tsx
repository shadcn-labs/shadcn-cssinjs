"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import * as stylex from "@stylexjs/stylex";
import { XIcon } from "lucide-react";

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
      stylex.props(
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
  const close = stylex.props(styles.closeButton);
  const sr = stylex.props(styles.srOnly);
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={(state) =>
          [
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
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
  const p = stylex.props(styles.header);
  return (
    <div
      data-slot="dialog-header"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.footer);
  return (
    <div
      data-slot="dialog-footer"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.title);
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.description);
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
