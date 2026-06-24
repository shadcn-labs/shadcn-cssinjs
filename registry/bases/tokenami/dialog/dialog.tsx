"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { TokenamiStyle } from "@tokenami/css";
import { XIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const backdrop = css.compose({
  "--background-color": "var(---, color-mix(in oklab, black 80%, transparent))",
  "--ending_opacity": 0,
  "--inset": 0,
  "--opacity": 1,
  "--position": "fixed",
  "--starting_opacity": 0,
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const popup = css.compose({
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_xl)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_foreground)",
  "--display": "grid",
  "--ending_opacity": 0,
  "--ending_transform": "var(---, translate(-50%, -50%) scale(0.95))",
  "--gap": 4,
  "--left": "var(---, 50%)",
  "--max-width": "var(---, calc(100% - 2rem))",
  "--opacity": 1,
  "--outline-style": "none",
  "--padding": 6,
  "--position": "fixed",
  "--sm_max-width": 128,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, translate(-50%, -50%) scale(0.95))",
  "--top": "var(---, 50%)",
  "--transform": "var(---, translate(-50%, -50%) scale(1))",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
  "--z-index": "var(---, 50)",
});

const closeButton = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "flex",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 2px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--hover_opacity": 1,
  "--inset-inline-end": 4,
  "--justify-content": "center",
  "--opacity": 0.7,
  "--outline-style": "none",
  "--padding": 1,
  "--position": "absolute",
  "--top": 4,
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
});

const srOnly = css.compose({
  "--border-width": "var(---, 0)",
  "--clip": "var(---, rect(0, 0, 0, 0))",
  "--height": "var(---, 1px)",
  "--margin": "var(---, -1px)",
  "--overflow": "hidden",
  "--padding": 0,
  "--position": "absolute",
  "--white-space": "nowrap",
  "--width": "var(---, 1px)",
});

const header = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--text-align": "center",
});

const footer = css.compose({
  "--display": "flex",
  "--flex-direction": "column-reverse",
  "--gap": 2,
});

const title = css.compose({
  "--color": "var(--color_foreground)",
  "--font-size": "1.125rem",
  "--font-weight": 600,
  "--letter-spacing": "var(---, -0.025em)",
  "--line-height": "var(---, 1)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
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
) => {
  const [cn] = backdrop();
  return (
    <DialogPrimitive.Backdrop
      className={cn()}
      data-slot="dialog-overlay"
      {...props}
    />
  );
};

const DialogContent = ({
  children,
  className,
  style,
  showCloseButton = true,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DialogPrimitive.Popup>,
    "className" | "style"
  >
> & { className?: string; showCloseButton?: boolean }) => {
  const [cn, sx] = popup();
  const [ccn, csx] = closeButton();
  const [scn, ssx] = srOnly();
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        className={cn(className)}
        data-slot="dialog-content"
        style={sx(style)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className={ccn()}
            data-slot="dialog-close"
            style={csx()}
          >
            <XIcon size={16} />
            <span className={scn()} style={ssx()}>
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
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="dialog-header"
      style={sx(style)}
      {...props}
    />
  );
};

const DialogFooter = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = footer();
  return (
    <div
      className={cn(className)}
      data-slot="dialog-footer"
      style={sx(style)}
      {...props}
    />
  );
};

const DialogTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DialogPrimitive.Title>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = title();
  return (
    <DialogPrimitive.Title
      className={cn(className)}
      data-slot="dialog-title"
      style={sx(style)}
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DialogPrimitive.Description>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = description();
  return (
    <DialogPrimitive.Description
      className={cn(className)}
      data-slot="dialog-description"
      style={sx(style)}
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
