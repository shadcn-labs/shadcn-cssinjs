"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { XIcon } from "lucide-react";
import * as React from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

const styles = stylex.create({
  closeButton: {
    position: "absolute",
    right: "0.75rem",
    top: "0.75rem",
  },
  content: {
    backgroundClip: "padding-box",
    backgroundColor: colors.popover,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    color: colors.popoverForeground,
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "1rem",
    lineHeight: "1.25rem",
    opacity: 1,
    outline: "none",
    position: "fixed",
    transform: "none",
    transitionDuration: "200ms",
    transitionProperty: "transform, opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 50,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
  },
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
    gap: "0.125rem",
    padding: "1rem",
  },
  overlay: {
    WebkitBackdropFilter: "blur(4px)",
    backdropFilter: "blur(4px)",
    backgroundColor: "color-mix(in oklab, black 10%, transparent)",
    inset: 0,
    opacity: 1,
    position: "fixed",
    transitionDuration: "150ms",
    transitionProperty: "opacity",
    zIndex: 50,
  },
  overlayHidden: {
    opacity: 0,
  },
  sideBottom: {
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    bottom: 0,
    height: "auto",
    left: 0,
    right: 0,
  },
  sideBottomHidden: {
    opacity: 0,
    transform: "translateY(2.5rem)",
  },
  sideLeft: {
    borderRightColor: colors.border,
    borderRightStyle: "solid",
    borderRightWidth: "1px",
    bottom: 0,
    height: "100%",
    left: 0,
    maxWidth: {
      "@media (min-width: 640px)": "24rem",
      default: null,
    },
    top: 0,
    width: "75%",
  },
  sideLeftHidden: {
    opacity: 0,
    transform: "translateX(-2.5rem)",
  },
  sideRight: {
    borderLeftColor: colors.border,
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    bottom: 0,
    height: "100%",
    maxWidth: {
      "@media (min-width: 640px)": "24rem",
      default: null,
    },
    right: 0,
    top: 0,
    width: "75%",
  },
  sideRightHidden: {
    opacity: 0,
    transform: "translateX(2.5rem)",
  },
  sideTop: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    height: "auto",
    left: 0,
    right: 0,
    top: 0,
  },
  sideTopHidden: {
    opacity: 0,
    transform: "translateY(-2.5rem)",
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
    color: colors.foreground,
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    margin: 0,
  },
});

type SheetSide = "top" | "right" | "bottom" | "left";

const sideStyles: Record<SheetSide, StyleXStyles> = {
  bottom: styles.sideBottom,
  left: styles.sideLeft,
  right: styles.sideRight,
  top: styles.sideTop,
};

const sideHiddenStyles: Record<SheetSide, StyleXStyles> = {
  bottom: styles.sideBottomHidden,
  left: styles.sideLeftHidden,
  right: styles.sideRightHidden,
  top: styles.sideTopHidden,
};

type SheetProps = SheetPrimitive.Root.Props;

const Sheet = ({ ...props }: SheetProps) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

type SheetTriggerProps = SheetPrimitive.Trigger.Props;

const SheetTrigger = ({ ...props }: SheetTriggerProps) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
);

type SheetCloseProps = SheetPrimitive.Close.Props;

const SheetClose = ({ ...props }: SheetCloseProps) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
);

type SheetPortalProps = SheetPrimitive.Portal.Props;

const SheetPortal = ({ ...props }: SheetPortalProps) => (
  <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
);

type SheetOverlayProps = Omit<SheetPrimitive.Backdrop.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SheetOverlay = ({ className, style, ...props }: SheetOverlayProps) => (
  <SheetPrimitive.Backdrop
    data-slot="sheet-overlay"
    className={(state) =>
      stylex.props(
        styles.overlay,
        (state.transitionStatus === "starting" ||
          state.transitionStatus === "ending") &&
          styles.overlayHidden,
        customClassName(className),
        style
      ).className
    }
    {...props}
  />
);

type SheetContentProps = Omit<SheetPrimitive.Popup.Props, "style"> & {
  side?: SheetSide;
  showCloseButton?: boolean;
  className?: string;
  style?: StyleXStyles;
};

const SheetContent = ({
  className,
  children,
  side = "right",
  showCloseButton = true,
  style,
  ...props
}: SheetContentProps) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Popup
      data-slot="sheet-content"
      data-side={side}
      className={(state) =>
        stylex.props(
          styles.content,
          sideStyles[side],
          (state.transitionStatus === "starting" ||
            state.transitionStatus === "ending") &&
            sideHiddenStyles[side],
          customClassName(className),
          style
        ).className
      }
      {...props}
    >
      {children}
      {showCloseButton && (
        <SheetPrimitive.Close
          data-slot="sheet-close"
          render={
            <Button variant="ghost" size="icon-sm" style={styles.closeButton}>
              <XIcon />
              <span {...stylex.props(styles.srOnly)}>Close</span>
            </Button>
          }
        />
      )}
    </SheetPrimitive.Popup>
  </SheetPortal>
);

type SheetHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SheetHeader = ({ className, style, ...props }: SheetHeaderProps) => (
  <div
    data-slot="sheet-header"
    {...stylex.props(styles.header, customClassName(className), style)}
    {...props}
  />
);

type SheetFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SheetFooter = ({ className, style, ...props }: SheetFooterProps) => (
  <div
    data-slot="sheet-footer"
    {...stylex.props(styles.footer, customClassName(className), style)}
    {...props}
  />
);

type SheetTitleProps = Omit<SheetPrimitive.Title.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SheetTitle = ({ className, style, ...props }: SheetTitleProps) => (
  <SheetPrimitive.Title
    data-slot="sheet-title"
    {...stylex.props(styles.title, customClassName(className), style)}
    {...props}
  />
);

type SheetDescriptionProps = Omit<SheetPrimitive.Description.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const SheetDescription = ({
  className,
  style,
  ...props
}: SheetDescriptionProps) => (
  <SheetPrimitive.Description
    data-slot="sheet-description"
    {...stylex.props(styles.description, customClassName(className), style)}
    {...props}
  />
);

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  styles as sheetStyles,
};

export type {
  SheetProps,
  SheetTriggerProps,
  SheetCloseProps,
  SheetPortalProps,
  SheetOverlayProps,
  SheetContentProps,
  SheetHeaderProps,
  SheetFooterProps,
  SheetTitleProps,
  SheetDescriptionProps,
  SheetSide,
};
