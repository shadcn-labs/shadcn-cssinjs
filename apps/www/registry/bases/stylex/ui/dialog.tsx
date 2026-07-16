"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { XIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  backdrop: {
    backgroundColor: "color-mix(in oklab, black 80%, transparent)",
    inset: 0,
    opacity: 1,
    position: "fixed",
    transition: "opacity 0.15s ease-in-out",
    zIndex: 50,
  },
  backdropHidden: {
    opacity: 0,
  },
  closeButton: {
    alignItems: "center",
    background: "none",
    borderRadius: radius.sm,
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 2px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    cursor: "pointer",
    display: "flex",
    insetInlineEnd: "1rem",
    justifyContent: "center",
    opacity: { ":hover": 1, default: 0.7 },
    outline: "none",
    padding: "0.25rem",
    position: "absolute",
    top: "1rem",
    transition: "opacity 0.15s ease-in-out",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  footer: {
    display: "flex",
    flexDirection: "column-reverse",
    gap: "0.5rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: "center",
  },
  popup: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.xl,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.foreground,
    display: "grid",
    gap: "1rem",
    left: "50%",
    maxWidth: {
      "@media (min-width: 640px)": "32rem",
      default: "calc(100% - 2rem)",
    },
    opacity: 1,
    outline: "none",
    padding: "1.5rem",
    position: "fixed",
    top: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
    width: "100%",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  srOnly: {
    borderWidth: 0,
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
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
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
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
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DialogFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-footer"
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DialogTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DialogDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof DialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
