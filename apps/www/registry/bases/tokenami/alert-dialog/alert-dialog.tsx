"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type { TokenamiStyle, Variants } from "@tokenami/css";

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

  variants: {
    size: {
      default: {},
      sm: { "--sm_max-width": 96 },
    },
  },
});

const media = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_muted)",
  "--border-radius": "var(--radii_full)",
  "--display": "flex",
  "--height": 11,
  "--justify-content": "center",
  "--margin-bottom": 1,
  "--width": 11,
});

const header = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--sm_text-align": "start",
  "--text-align": "center",
});

const footer = css.compose({
  "--display": "flex",
  "--flex-direction": "column-reverse",
  "--gap": 2,
  "--sm_flex-direction": "row",
  "--sm_justify-content": "flex-end",
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

type PopupVariants = Variants<typeof popup>;

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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AlertDialogPrimitive.Popup>,
    "className" | "style"
  >
> &
  PopupVariants & { className?: string }) => {
  const [bcn] = backdrop();
  const [cn, sx] = popup({ size });
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop
        className={bcn()}
        data-slot="alert-dialog-overlay"
      />
      <AlertDialogPrimitive.Popup
        className={cn(className)}
        data-size={size}
        data-slot="alert-dialog-content"
        style={sx(style)}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialogMedia = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = media();
  return (
    <div
      className={cn(className)}
      data-slot="alert-dialog-media"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertDialogHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="alert-dialog-header"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertDialogFooter = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = footer();
  return (
    <div
      className={cn(className)}
      data-slot="alert-dialog-footer"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertDialogTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AlertDialogPrimitive.Title>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = title();
  return (
    <AlertDialogPrimitive.Title
      className={cn(className)}
      data-slot="alert-dialog-title"
      style={sx(style)}
      {...props}
    />
  );
};

const AlertDialogDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AlertDialogPrimitive.Description>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = description();
  return (
    <AlertDialogPrimitive.Description
      className={cn(className)}
      data-slot="alert-dialog-description"
      style={sx(style)}
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
