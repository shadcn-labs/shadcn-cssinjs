"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

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
  backdropHidden: { opacity: 0 },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  footer: {
    display: "flex",
    flexDirection: {
      "@media (min-width: 640px)": "row",
      default: "column-reverse",
    },
    gap: "0.5rem",
    justifyContent: { "@media (min-width: 640px)": "flex-end", default: null },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: { "@media (min-width: 640px)": "start", default: "center" },
  },
  media: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    display: "flex",
    height: "2.75rem",
    justifyContent: "center",
    marginBottom: "0.25rem",
    width: "2.75rem",
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
  popupSm: {
    maxWidth: {
      "@media (min-width: 640px)": "24rem",
      default: "calc(100% - 2rem)",
    },
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
        stylex.props(
          styles.backdrop,
          hidden(state.transitionStatus) && styles.backdropHidden
        ).className
      }
      data-slot="alert-dialog-overlay"
    />
    <AlertDialogPrimitive.Popup
      className={(state) =>
        stylex.props(
          styles.popup,
          size === "sm" && styles.popupSm,
          hidden(state.transitionStatus) && styles.popupHidden,
          customClassName(className)
        ).className
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
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.media,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="alert-dialog-media"
    {...props}
  />
);

const AlertDialogHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="alert-dialog-header"
    {...props}
  />
);

const AlertDialogFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="alert-dialog-footer"
    {...props}
  />
);

const AlertDialogTitle = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Title>,
  "className"
> & { className?: string }) => (
  <AlertDialogPrimitive.Title
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="alert-dialog-title"
    {...props}
  />
);

const AlertDialogDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <AlertDialogPrimitive.Description
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
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
