"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const backdrop = css({
  _ending: { opacity: "0" },
  _starting: { opacity: "0" },
  backgroundColor: "color-mix(in oklab, black 80%, transparent)",
  inset: "0",
  opacity: "1",
  position: "fixed",
  transitionDuration: "150ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const popup = css({
  _ending: { opacity: "0", transform: "translate(-50%, -50%) scale(0.95)" },
  _starting: { opacity: "0", transform: "translate(-50%, -50%) scale(0.95)" },
  backgroundColor: "background",
  borderColor: "border",
  borderRadius: "xl",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  color: "foreground",
  display: "grid",
  gap: "4",
  left: "50%",
  maxWidth: "calc(100% - 2rem)",
  opacity: "1",
  outlineStyle: "none",
  padding: "6",
  position: "fixed",
  sm: { maxWidth: "128" },
  top: "50%",
  transform: "translate(-50%, -50%) scale(1)",
  transitionDuration: "200ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
  zIndex: "50",
});

const closeButton = css({
  _focusVisible: {
    boxShadow: "0 0 0 2px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  _hover: { opacity: "1" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "sm",
  borderWidth: "0",
  color: "foreground",
  cursor: "pointer",
  display: "flex",
  insetInlineEnd: "4",
  justifyContent: "center",
  opacity: "0.7",
  outlineStyle: "none",
  padding: "1",
  position: "absolute",
  top: "4",
  transitionDuration: "150ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-in-out",
});

const srOnly = css({
  borderWidth: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

const header = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  textAlign: "center",
});

const footer = css({
  display: "flex",
  flexDirection: "column-reverse",
  gap: "2",
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
  lineHeight: "1.25rem",
});

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
    className={backdrop}
    data-slot="dialog-overlay"
    {...props}
  />
);

const DialogContent = ({
  children,
  className,
  showCloseButton = true,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Popup>, "className"> & {
  className?: string;
  showCloseButton?: boolean;
}) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      className={cx(popup, className)}
      data-slot="dialog-content"
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close className={closeButton} data-slot="dialog-close">
          <XIcon size={16} />
          <span className={srOnly}>Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Popup>
  </DialogPrimitive.Portal>
);

const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(header, className)} data-slot="dialog-header" {...props} />
);

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(footer, className)} data-slot="dialog-footer" {...props} />
);

const DialogTitle = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DialogPrimitive.Title
    className={cx(title, className)}
    data-slot="dialog-title"
    {...props}
  />
);

const DialogDescription = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof DialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <DialogPrimitive.Description
    className={cx(description, className)}
    data-slot="dialog-description"
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
