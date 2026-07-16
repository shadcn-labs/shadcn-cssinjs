"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { XIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
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
  bottom: {
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    bottom: 0,
    insetInline: 0,
    transform: "translateY(0)",
    width: "100%",
  },
  bottomHidden: { transform: "translateY(100%)" },
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
  content: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    outline: "none",
    position: "fixed",
    transition: "transform 0.3s ease-in-out",
    zIndex: 50,
  },
  description: { color: colors.mutedForeground, fontSize: "0.875rem" },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "auto",
    padding: "1rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.375rem",
    padding: "1rem",
  },
  left: {
    borderRightColor: colors.border,
    borderRightStyle: "solid",
    borderRightWidth: "1px",
    height: "100%",
    insetBlock: 0,
    left: 0,
    maxWidth: "24rem",
    transform: "translateX(0)",
    width: "75%",
  },
  leftHidden: { transform: "translateX(-100%)" },
  right: {
    borderLeftColor: colors.border,
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    height: "100%",
    insetBlock: 0,
    maxWidth: "24rem",
    right: 0,
    transform: "translateX(0)",
    width: "75%",
  },
  rightHidden: { transform: "translateX(100%)" },
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
  title: { color: colors.foreground, fontWeight: 600 },
  top: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    insetInline: 0,
    top: 0,
    transform: "translateY(0)",
    width: "100%",
  },
  topHidden: { transform: "translateY(-100%)" },
});

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
          stylex.props(
            styles.content,
            base,
            hidden(state.transitionStatus) && off,
            customClassName(className)
          ).className
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
}: React.ComponentProps<"div">) => (
  <div
    data-slot="sheet-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SheetFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="sheet-footer"
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SheetTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DialogPrimitive.Title
    data-slot="sheet-title"
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SheetDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof DialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <DialogPrimitive.Description
    data-slot="sheet-description"
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
