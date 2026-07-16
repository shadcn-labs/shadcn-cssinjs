"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { css, cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

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

const content = cva({
  base: {
    backgroundColor: "background",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    outlineStyle: "none",
    position: "fixed",
    transitionDuration: "300ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    zIndex: "50",
  },
  defaultVariants: { side: "right" },
  variants: {
    side: {
      bottom: {
        _ending: { transform: "translateY(100%)" },
        _starting: { transform: "translateY(100%)" },
        borderTopColor: "border",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        bottom: "0",
        insetInline: "0",
        transform: "translateY(0)",
        width: "100%",
      },
      left: {
        _ending: { transform: "translateX(-100%)" },
        _starting: { transform: "translateX(-100%)" },
        borderInlineEndColor: "border",
        borderInlineEndStyle: "solid",
        borderInlineEndWidth: "1px",
        height: "100%",
        insetBlock: "0",
        left: "0",
        maxWidth: "96",
        transform: "translateX(0)",
        width: "75%",
      },
      right: {
        _ending: { transform: "translateX(100%)" },
        _starting: { transform: "translateX(100%)" },
        borderInlineStartColor: "border",
        borderInlineStartStyle: "solid",
        borderInlineStartWidth: "1px",
        height: "100%",
        insetBlock: "0",
        maxWidth: "96",
        right: "0",
        transform: "translateX(0)",
        width: "75%",
      },
      top: {
        _ending: { transform: "translateY(-100%)" },
        _starting: { transform: "translateY(-100%)" },
        borderBottomColor: "border",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        insetInline: "0",
        top: "0",
        transform: "translateY(0)",
        width: "100%",
      },
    },
  },
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
  gap: "1.5",
  padding: "4",
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
  fontWeight: "semibold",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
});

type Side = "top" | "right" | "bottom" | "left";
type ContentVariants = NonNullable<RecipeVariantProps<typeof content>>;

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
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Popup>, "className"> &
  ContentVariants & {
    className?: string;
    side?: Side;
    showCloseButton?: boolean;
  }) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Backdrop className={backdrop} data-slot="sheet-overlay" />
    <DialogPrimitive.Popup
      className={cx(content({ side }), className)}
      data-slot="sheet-content"
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close className={closeButton} data-slot="sheet-close">
          <XIcon size={16} />
          <span className={srOnly}>Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Popup>
  </DialogPrimitive.Portal>
);

const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(header, className)} data-slot="sheet-header" {...props} />
);

const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(footer, className)} data-slot="sheet-footer" {...props} />
);

const SheetTitle = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <DialogPrimitive.Title
    className={cx(title, className)}
    data-slot="sheet-title"
    {...props}
  />
);

const SheetDescription = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof DialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <DialogPrimitive.Description
    className={cx(description, className)}
    data-slot="sheet-description"
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
