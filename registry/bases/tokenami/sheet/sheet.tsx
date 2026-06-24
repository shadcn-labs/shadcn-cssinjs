"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type { TokenamiStyle, Variants } from "@tokenami/css";
import { XIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const backdrop = css.compose({
  "--background-color": "var(---, color-mix(in oklab, black 80%, transparent))",
  "--ending_opacity": 0,
  "--inset": 0,
  "--opacity": 1,
  "--position": "fixed",
  "--starting_opacity": 0,
  "--transition-duration": "var(---, 0.3s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const content = css.compose({
  "--background-color": "var(--color_background)",
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 4,
  "--outline-style": "none",
  "--position": "fixed",
  "--transition-duration": "var(---, 0.3s)",
  "--transition-property": "var(---, transform)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",

  variants: {
    side: {
      bottom: {
        "--border-top-color": "var(--color_border)",
        "--border-top-style": "solid",
        "--border-top-width": "var(---, 1px)",
        "--bottom": 0,
        "--ending_transform": "var(---, translateY(100%))",
        "--inset-inline": 0,
        "--starting_transform": "var(---, translateY(100%))",
        "--transform": "var(---, translateY(0))",
        "--width": "var(---, 100%)",
      },
      left: {
        "--border-inline-end-color": "var(--color_border)",
        "--border-inline-end-style": "solid",
        "--border-inline-end-width": "var(---, 1px)",
        "--ending_transform": "var(---, translateX(-100%))",
        "--height": "var(---, 100%)",
        "--inset-block": 0,
        "--left": 0,
        "--max-width": 96,
        "--starting_transform": "var(---, translateX(-100%))",
        "--transform": "var(---, translateX(0))",
        "--width": "var(---, 75%)",
      },
      right: {
        "--border-inline-start-color": "var(--color_border)",
        "--border-inline-start-style": "solid",
        "--border-inline-start-width": "var(---, 1px)",
        "--ending_transform": "var(---, translateX(100%))",
        "--height": "var(---, 100%)",
        "--inset-block": 0,
        "--max-width": 96,
        "--right": 0,
        "--starting_transform": "var(---, translateX(100%))",
        "--transform": "var(---, translateX(0))",
        "--width": "var(---, 75%)",
      },
      top: {
        "--border-bottom-color": "var(--color_border)",
        "--border-bottom-style": "solid",
        "--border-bottom-width": "var(---, 1px)",
        "--ending_transform": "var(---, translateY(-100%))",
        "--inset-inline": 0,
        "--starting_transform": "var(---, translateY(-100%))",
        "--top": 0,
        "--transform": "var(---, translateY(0))",
        "--width": "var(---, 100%)",
      },
    },
  },
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
  "--gap": 1.5,
  "--padding": 4,
});

const footer = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--margin-top": "var(---, auto)",
  "--padding": 4,
});

const title = css.compose({
  "--color": "var(--color_foreground)",
  "--font-weight": 600,
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
});

type Side = "top" | "right" | "bottom" | "left";
type ContentVariants = Variants<typeof content>;

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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof DialogPrimitive.Popup>,
    "className" | "style"
  >
> &
  ContentVariants & {
    className?: string;
    side?: Side;
    showCloseButton?: boolean;
  }) => {
  const [bcn] = backdrop();
  const [cn, sx] = content({ side });
  const [ccn, csx] = closeButton();
  const [scn, ssx] = srOnly();
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className={bcn()} data-slot="sheet-overlay" />
      <DialogPrimitive.Popup
        className={cn(className)}
        data-slot="sheet-content"
        style={sx(style)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className={ccn()}
            data-slot="sheet-close"
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

const SheetHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="sheet-header"
      style={sx(style)}
      {...props}
    />
  );
};

const SheetFooter = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = footer();
  return (
    <div
      className={cn(className)}
      data-slot="sheet-footer"
      style={sx(style)}
      {...props}
    />
  );
};

const SheetTitle = ({
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
      data-slot="sheet-title"
      style={sx(style)}
      {...props}
    />
  );
};

const SheetDescription = ({
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
      data-slot="sheet-description"
      style={sx(style)}
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
