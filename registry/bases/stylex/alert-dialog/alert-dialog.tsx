"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { cx, x } from "@/lib/utils";

import { styles } from "./alert-dialog.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
  style,
  size = "default",
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Popup>,
  "className"
> & { className?: string; size?: "default" | "sm" }) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogPrimitive.Backdrop
      className={(state) =>
        x(
          styles.backdrop,
          hidden(state.transitionStatus) && styles.backdropHidden
        ).className
      }
      data-slot="alert-dialog-overlay"
    />
    <AlertDialogPrimitive.Popup
      className={(state) =>
        cx(
          x(
            styles.popup,
            size === "sm" && styles.popupSm,
            hidden(state.transitionStatus) && styles.popupHidden
          ).className,
          className
        )
      }
      data-size={size}
      data-slot="alert-dialog-content"
      style={style}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Popup>
  </AlertDialogPrimitive.Portal>
);

const AlertDialogMedia = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.media);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="alert-dialog-media"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertDialogHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.header);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="alert-dialog-header"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertDialogFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.footer);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="alert-dialog-footer"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertDialogTitle = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Title>,
  "className"
> & { className?: string }) => {
  const p = x(styles.title);
  return (
    <AlertDialogPrimitive.Title
      className={cx(p.className, className)}
      data-slot="alert-dialog-title"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AlertDialogDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Description>,
  "className"
> & { className?: string }) => {
  const p = x(styles.description);
  return (
    <AlertDialogPrimitive.Description
      className={cx(p.className, className)}
      data-slot="alert-dialog-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
