"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
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
  "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const zoomOut95 = stylex.keyframes({
  "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  "100%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
});

const styles = stylex.create({
  content: {
    animationDuration: "100ms",
    animationFillMode: "forwards",
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    boxShadow: `0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.popoverForeground,
    display: "grid",
    gap: "1rem",
    left: "50%",
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
  contentSizeDefault: {
    maxWidth: {
      "@media (min-width: 640px)": "24rem",
      default: "20rem",
    },
  },
  contentSizeSm: {
    maxWidth: "20rem",
  },
  description: {
    ":is(a)": {
      color: {
        ":hover": colors.foreground,
        default: "inherit",
      },
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
    color: colors.mutedForeground,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
    textWrap: {
      "@media (min-width: 768px)": "pretty",
      default: "balance",
    },
  },
  descriptionWithMediaDefault: {
    gridColumn: {
      "@media (min-width: 640px)": "2",
      default: "auto",
    },
    gridRow: {
      "@media (min-width: 640px)": "2",
      default: "auto",
    },
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
    },
    marginBottom: "-1rem",
    marginLeft: "-1rem",
    marginRight: "-1rem",
    padding: "1rem",
  },
  footerSizeSm: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  header: {
    display: "grid",
    gap: "0.375rem",
    gridTemplateRows: "auto 1fr",
    placeItems: "center",
    textAlign: "center",
  },
  headerSmDefault: {
    placeItems: {
      "@media (min-width: 640px)": "start",
    },
    textAlign: {
      "@media (min-width: 640px)": "left",
    },
  },
  headerWithMediaDefault: {
    gap: {
      "@media (min-width: 640px)": "0.375rem 1rem",
      default: "0.375rem 0",
    },
    gridTemplateColumns: {
      "@media (min-width: 640px)": "auto 1fr",
      default: "1fr",
    },
    gridTemplateRows: {
      "@media (min-width: 640px)": "auto 1fr",
      default: "auto auto 1fr",
    },
    placeItems: {
      "@media (min-width: 640px)": "start",
      default: "center",
    },
    textAlign: {
      "@media (min-width: 640px)": "left",
      default: "center",
    },
  },
  media: {
    ":is(svg)": {
      height: "1.5rem",
      width: "1.5rem",
    },
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    display: "inline-flex",
    height: "2.5rem",
    justifyContent: "center",
    marginBottom: "0.5rem",
    width: "2.5rem",
  },
  mediaDefault: {
    alignSelf: {
      "@media (min-width: 640px)": "start",
      default: "center",
    },
    gridColumn: {
      "@media (min-width: 640px)": "1",
      default: "auto",
    },
    gridRow: {
      "@media (min-width: 640px)": "1 / span 2",
      default: "auto",
    },
    marginBottom: {
      "@media (min-width: 640px)": "0",
      default: "0.5rem",
    },
  },
  overlay: {
    WebkitBackdropFilter: "blur(4px)",
    animationDuration: "100ms",
    animationFillMode: "forwards",
    backdropFilter: "blur(4px)",
    backgroundColor: "color-mix(in oklab, black 10%, transparent)",
    inset: 0,
    isolate: "isolate",
    position: "fixed",
    zIndex: 50,
  },
  overlayClosed: {
    animationName: fadeOut,
  },
  overlayOpen: {
    animationName: fadeIn,
  },
  title: {
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    margin: 0,
  },
  titleWithMediaDefault: {
    gridColumn: {
      "@media (min-width: 640px)": "2",
      default: "auto",
    },
    gridRow: {
      "@media (min-width: 640px)": "1",
      default: "auto",
    },
  },
});

type AlertDialogProps = AlertDialogPrimitive.Root.Props;

const AlertDialog = ({ ...props }: AlertDialogProps) => (
  <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
);

type AlertDialogTriggerProps = AlertDialogPrimitive.Trigger.Props;

const AlertDialogTrigger = ({ ...props }: AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
);

type AlertDialogPortalProps = AlertDialogPrimitive.Portal.Props;

const AlertDialogPortal = ({ ...props }: AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
);

type AlertDialogOverlayProps = Omit<
  AlertDialogPrimitive.Backdrop.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AlertDialogOverlay = ({
  className,
  style,
  ...props
}: AlertDialogOverlayProps) => (
  <AlertDialogPrimitive.Backdrop
    data-slot="alert-dialog-overlay"
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

interface AlertDialogContentContextValue {
  size: "default" | "sm";
}

const AlertDialogContentContext =
  React.createContext<AlertDialogContentContextValue>({
    size: "default",
  });

type AlertDialogContentProps = Omit<
  AlertDialogPrimitive.Popup.Props,
  "style"
> & {
  className?: string;
  size?: "default" | "sm";
  style?: StyleXStyles;
};

const AlertDialogContent = ({
  className,
  size = "default",
  style,
  children,
  ...props
}: AlertDialogContentProps) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Popup
      data-slot="alert-dialog-content"
      data-size={size}
      className={(state) =>
        stylex.props(
          styles.content,
          size === "sm" ? styles.contentSizeSm : styles.contentSizeDefault,
          state.open ? styles.contentOpen : styles.contentClosed,
          customClassName(className),
          style
        ).className
      }
      {...props}
    >
      <AlertDialogContentContext.Provider value={{ size }}>
        {children}
      </AlertDialogContentContext.Provider>
    </AlertDialogPrimitive.Popup>
  </AlertDialogPortal>
);

const MEDIA_SLOT = Symbol.for("stylex-ui.alert-dialog-media");

interface MediaComponent {
  displayName?: string;
  name?: string;
  [MEDIA_SLOT]?: boolean;
}

interface AlertDialogHeaderContextValue {
  hasMedia: boolean;
  setHasMedia: (has: boolean) => void;
}

type AlertDialogMediaProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const AlertDialogHeaderContext =
  React.createContext<AlertDialogHeaderContextValue>({
    hasMedia: false,
    setHasMedia: () => {
      /* noop */
    },
  });

const AlertDialogMedia = ({
  className,
  style,
  ...props
}: AlertDialogMediaProps) => {
  const { size } = React.useContext(AlertDialogContentContext);
  const { setHasMedia } = React.useContext(AlertDialogHeaderContext);

  React.useEffect(() => {
    setHasMedia(true);
  }, [setHasMedia]);

  return (
    <div
      data-slot="alert-dialog-media"
      {...stylex.props(
        styles.media,
        size === "default" && styles.mediaDefault,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

AlertDialogMedia.displayName = "AlertDialogMedia";
(AlertDialogMedia as unknown as MediaComponent)[MEDIA_SLOT] = true;

const isMediaElement = (child: React.ReactNode): boolean => {
  if (!React.isValidElement(child)) {
    return false;
  }
  if (child.type === AlertDialogMedia) {
    return true;
  }
  if (typeof child.type === "function" || typeof child.type === "object") {
    const comp = child.type as unknown as MediaComponent;
    if (
      comp[MEDIA_SLOT] === true ||
      comp.displayName === "AlertDialogMedia" ||
      comp.name === "AlertDialogMedia"
    ) {
      return true;
    }
  }
  if (
    child.props &&
    typeof child.props === "object" &&
    "data-slot" in child.props
  ) {
    return (
      (child.props as { "data-slot"?: string })["data-slot"] ===
      "alert-dialog-media"
    );
  }
  return false;
};

type AlertDialogHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const AlertDialogHeader = ({
  className,
  style,
  children,
  ...props
}: AlertDialogHeaderProps) => {
  const { size } = React.useContext(AlertDialogContentContext);
  const [hasMediaState, setHasMediaState] = React.useState(false);

  const hasMediaFromChildren =
    React.Children.toArray(children).some(isMediaElement);

  const hasMedia = hasMediaState || hasMediaFromChildren;

  return (
    <AlertDialogHeaderContext.Provider
      value={{ hasMedia, setHasMedia: setHasMediaState }}
    >
      <div
        data-slot="alert-dialog-header"
        {...stylex.props(
          styles.header,
          size === "default" && !hasMedia && styles.headerSmDefault,
          size === "default" && hasMedia && styles.headerWithMediaDefault,
          customClassName(className),
          style
        )}
        {...props}
      >
        {children}
      </div>
    </AlertDialogHeaderContext.Provider>
  );
};

type AlertDialogFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  size?: "default" | "sm";
  style?: StyleXStyles;
};

const AlertDialogFooter = ({
  className,
  size: sizeProp,
  style,
  ...props
}: AlertDialogFooterProps) => {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  const size = sizeProp ?? contextSize;
  return (
    <div
      data-slot="alert-dialog-footer"
      {...stylex.props(
        styles.footer,
        size === "sm" && styles.footerSizeSm,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

type AlertDialogTitleProps = Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Title>,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AlertDialogTitle = ({
  className,
  style,
  ...props
}: AlertDialogTitleProps) => {
  const { size } = React.useContext(AlertDialogContentContext);
  const { hasMedia } = React.useContext(AlertDialogHeaderContext);
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      {...stylex.props(
        styles.title,
        size === "default" && hasMedia && styles.titleWithMediaDefault,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

type AlertDialogDescriptionProps = Omit<
  React.ComponentProps<typeof AlertDialogPrimitive.Description>,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AlertDialogDescription = ({
  className,
  style,
  ...props
}: AlertDialogDescriptionProps) => {
  const { size } = React.useContext(AlertDialogContentContext);
  const { hasMedia } = React.useContext(AlertDialogHeaderContext);
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      {...stylex.props(
        styles.description,
        size === "default" && hasMedia && styles.descriptionWithMediaDefault,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

type AlertDialogActionProps = React.ComponentProps<typeof Button>;

const AlertDialogAction = ({ className, ...props }: AlertDialogActionProps) => (
  <Button data-slot="alert-dialog-action" className={className} {...props} />
);

type AlertDialogCancelProps = AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">;

const AlertDialogCancel = ({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogCancelProps) => (
  <AlertDialogPrimitive.Close
    data-slot="alert-dialog-cancel"
    className={className}
    render={<Button variant={variant} size={size} />}
    {...props}
  />
);

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
