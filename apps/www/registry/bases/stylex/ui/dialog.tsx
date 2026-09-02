"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { XIcon } from "lucide-react";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

const fadeIn = stylex.keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = stylex.keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const zoomIn95 = stylex.keyframes({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

const zoomOut95 = stylex.keyframes({
  "0%": {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
  "100%": {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
});

const styles = stylex.create({
  closeButton: {
    position: "absolute",
    right: "0.5rem",
    top: "0.5rem",
  },
  content: {
    animationDuration: "100ms",
    animationFillMode: "forwards",
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    boxShadow: `0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.popoverForeground,
    display: "grid",
    fontSize: "0.875rem",
    gap: "1rem",
    left: "50%",
    lineHeight: "1.25rem",
    maxWidth: {
      "@media (min-width: 640px)": "24rem",
      default: "calc(100% - 2rem)",
    },
    outline: "none",
    padding: "1rem",
    position: "fixed",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    zIndex: 50,
  },
  contentClosed: {
    animationName: zoomOut95,
  },
  contentOpen: {
    animationName: zoomIn95,
  },
  description: {
    color: colors.mutedForeground,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
  },
  footer: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    display: "flex",
    flexDirection: {
      "@media (min-width: 640px)": "row",
      default: "column-reverse",
    },
    gap: "0.5rem",
    justifyContent: {
      "@media (min-width: 640px)": "flex-end",
      default: "flex-start",
    },
    marginBottom: "-1rem",
    marginInline: "-1rem",
    padding: "1rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  overlay: {
    WebkitBackdropFilter: "blur(4px)",
    animationDuration: "100ms",
    animationFillMode: "forwards",
    backdropFilter: "blur(4px)",
    backgroundColor: "color-mix(in oklab, black 10%, transparent)",
    inset: 0,
    isolation: "isolate",
    position: "fixed",
    zIndex: 50,
  },
  overlayClosed: {
    animationName: fadeOut,
  },
  overlayOpen: {
    animationName: fadeIn,
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
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1,
    margin: 0,
  },
});

export type DialogProps = DialogPrimitive.Root.Props;

const Dialog = ({ ...props }: DialogProps) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

export type DialogTriggerProps = DialogPrimitive.Trigger.Props;

const DialogTrigger = ({ ...props }: DialogTriggerProps) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
);

export type DialogPortalProps = DialogPrimitive.Portal.Props;

const DialogPortal = ({ ...props }: DialogPortalProps) => (
  <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
);

export type DialogCloseProps = DialogPrimitive.Close.Props;

const DialogClose = ({ ...props }: DialogCloseProps) => (
  <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);

export type DialogOverlayProps = Omit<
  DialogPrimitive.Backdrop.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const DialogOverlay = ({ className, style, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Backdrop
    data-slot="dialog-overlay"
    className={(state) =>
      stylex.props(
        styles.overlay,
        state.open ? styles.overlayOpen : styles.overlayClosed,
        customClassName(className),
        style
      ).className
    }
    {...props}
  />
);

export type DialogContentProps = Omit<DialogPrimitive.Popup.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
  showCloseButton?: boolean;
};

const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  style,
  ...props
}: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      data-slot="dialog-content"
      className={(state) =>
        stylex.props(
          styles.content,
          state.open ? styles.contentOpen : styles.contentClosed,
          customClassName(className),
          style
        ).className
      }
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          render={
            <Button variant="ghost" size="icon-sm" style={styles.closeButton}>
              <XIcon size={16} />
              <span {...stylex.props(styles.srOnly)}>Close</span>
            </Button>
          }
        />
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
);

export type DialogHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const DialogHeader = ({ className, style, ...props }: DialogHeaderProps) => (
  <div
    data-slot="dialog-header"
    {...stylex.props(styles.header, customClassName(className), style)}
    {...props}
  />
);

export type DialogFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
  showCloseButton?: boolean;
};

const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  style,
  ...props
}: DialogFooterProps) => (
  <div
    data-slot="dialog-footer"
    {...stylex.props(styles.footer, customClassName(className), style)}
    {...props}
  >
    {children}
    {showCloseButton && (
      <DialogPrimitive.Close
        render={<Button variant="outline">Close</Button>}
      />
    )}
  </div>
);

export type DialogTitleProps = Omit<DialogPrimitive.Title.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const DialogTitle = ({ className, style, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    {...stylex.props(styles.title, customClassName(className), style)}
    {...props}
  />
);

export type DialogDescriptionProps = Omit<
  DialogPrimitive.Description.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const DialogDescription = ({
  className,
  style,
  ...props
}: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    {...stylex.props(styles.description, customClassName(className), style)}
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
