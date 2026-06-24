"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { css, cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

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

const popup = cva({
  base: {
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
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: {},
      sm: { sm: { maxWidth: "96" } },
    },
  },
});

const media = css({
  alignItems: "center",
  backgroundColor: "muted",
  borderRadius: "full",
  display: "flex",
  height: "11",
  justifyContent: "center",
  marginBottom: "1",
  width: "11",
});

const header = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  sm: { textAlign: "start" },
  textAlign: "center",
});

const footer = css({
  display: "flex",
  flexDirection: "column-reverse",
  gap: "2",
  sm: { flexDirection: "row", justifyContent: "flex-end" },
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

type PopupVariants = NonNullable<RecipeVariantProps<typeof popup>>;

const AlertDialog = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Root>
) => <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;

const AlertDialogTrigger = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>
) => (
  <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
);

const AlertDialogContent = ({
  children,
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof AlertDialogPrimitive.Popup>, "className"> &
  PopupVariants & { className?: string }) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogPrimitive.Backdrop
      className={backdrop}
      data-slot="alert-dialog-overlay"
    />
    <AlertDialogPrimitive.Popup
      className={cx(popup({ size }), className)}
      data-size={size}
      data-slot="alert-dialog-content"
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Popup>
  </AlertDialogPrimitive.Portal>
);

const AlertDialogMedia = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(media, className)}
    data-slot="alert-dialog-media"
    {...props}
  />
);

const AlertDialogHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(header, className)}
    data-slot="alert-dialog-header"
    {...props}
  />
);

const AlertDialogFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(footer, className)}
    data-slot="alert-dialog-footer"
    {...props}
  />
);

const AlertDialogTitle = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Title>,
  "className"
> & { className?: string }) => (
  <AlertDialogPrimitive.Title
    className={cx(title, className)}
    data-slot="alert-dialog-title"
    {...props}
  />
);

const AlertDialogDescription = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <AlertDialogPrimitive.Description
    className={cx(description, className)}
    data-slot="alert-dialog-description"
    {...props}
  />
);

const AlertDialogAction = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Close>
) => <AlertDialogPrimitive.Close data-slot="alert-dialog-action" {...props} />;

const AlertDialogCancel = (
  props: React.ComponentProps<typeof AlertDialogPrimitive.Close>
) => <AlertDialogPrimitive.Close data-slot="alert-dialog-cancel" {...props} />;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
};
