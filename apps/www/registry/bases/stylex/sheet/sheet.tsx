"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { XIcon } from "lucide-react";

import { styles } from "./sheet.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

type Side = "top" | "right" | "bottom" | "left";

const sideStyle: Record<Side, [StyleXStyles, StyleXStyles]> = {
  bottom: [styles.bottom, styles.bottomHidden],
  left: [styles.left, styles.leftHidden],
  right: [styles.right, styles.rightHidden],
  top: [styles.top, styles.topHidden],
};

const Sheet = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root data-slot="sheet" {...props} />
);

const SheetTrigger = (
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) => <DialogPrimitive.Trigger data-slot="sheet-trigger" {...props} />;

const SheetClose = (
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) => <DialogPrimitive.Close data-slot="sheet-close" {...props} />;

const SheetContent = ({
  className,
  style,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Popup>, "className"> & {
  className?: string;
  side?: Side;
  showCloseButton?: boolean;
}) => {
  const close = stylex.props(styles.closeButton);
  const sr = stylex.props(styles.srOnly);
  const [base, off] = sideStyle[side];
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        data-slot="sheet-overlay"
        className={(state) =>
          stylex.props(
            styles.backdrop,
            hidden(state.transitionStatus) && styles.backdropHidden
          ).className
        }
      />
      <DialogPrimitive.Popup
        data-slot="sheet-content"
        className={(state) =>
          [
            stylex.props(
              styles.content,
              base,
              hidden(state.transitionStatus) && off
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
            className={close.className}
            data-slot="sheet-close"
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

const SheetHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.header);
  return (
    <div
      data-slot="sheet-header"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SheetFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.footer);
  return (
    <div
      data-slot="sheet-footer"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SheetTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.title);
  return (
    <DialogPrimitive.Title
      data-slot="sheet-title"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SheetDescription = ({
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
      data-slot="sheet-description"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
