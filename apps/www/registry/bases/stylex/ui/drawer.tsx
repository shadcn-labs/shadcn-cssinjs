"use client";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

interface DrawerContextProps {
  hasSnapPoints: boolean;
  modal: DrawerPrimitive.Root.Props["modal"];
  showSwipeHandle: boolean;
  swipeDirection: NonNullable<DrawerPrimitive.Root.Props["swipeDirection"]>;
}

const DrawerContext = React.createContext<DrawerContextProps | null>(null);

const useDrawer = () => {
  const context = React.useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used within a Drawer.");
  }

  return context;
};

const styles = stylex.create({
  content: {
    borderRadius: "inherit",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minHeight: 0,
    overflow: "hidden",
    overscrollBehavior: "contain",
    transitionDuration: "300ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.45, 1.005, 0, 1.005)",
    userSelect: "text",
  },
  description: {
    color: colors.mutedForeground,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    margin: 0,
    textWrap: "balance",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    gap: "0.5rem",
    marginTop: "auto",
    padding: "1rem",
    paddingTop: 0,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    gap: {
      "@media (min-width: 768px)": "0.375rem",
      default: "0.125rem",
    },
    padding: "1rem",
    paddingBottom: 0,
  },
  headerAxisY: {
    textAlign: {
      "@media (min-width: 768px)": "left",
      default: "center",
    },
  },
  overlay: {
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    inset: 0,
    minHeight: "100dvh",
    opacity:
      "max(var(--drawer-overlay-min-opacity, 0), calc(1 - var(--drawer-swipe-progress)))",
    position: "fixed",
    transitionDuration: "450ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
    userSelect: "none",
    zIndex: 50,
  },
  overlayEnding: {
    opacity: 0,
    pointerEvents: "none",
    transitionDuration: "calc(var(--drawer-swipe-strength, 1) * 400ms)",
  },
  overlayStarting: {
    opacity: 0,
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: "min(var(--radius-4xl, 24px), 24px)",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    color: colors.popoverForeground,
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    height: "var(--drawer-content-height, var(--drawer-height, auto))",
    lineHeight: "1.25rem",
    margin: "var(--drawer-inset, 0.5rem)",
    maxHeight: "var(--drawer-content-max-height, none)",
    minHeight: 0,
    outline: "none",
    pointerEvents: "auto",
    position: "fixed",
    transform:
      "translate3d(var(--translate-x, 0px), var(--translate-y, 0px), 0) scale(var(--stack-scale, 1))",
    transitionDuration: "450ms",
    transitionProperty: "transform, height, opacity, filter",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    userSelect: "none",
    width: "var(--drawer-content-width, auto)",
    willChange: "transform",
    zIndex: 50,
  },
  popupAxisX: {
    bottom: 0,
    flexDirection: "row",
    top: 0,
    width: {
      "@media (min-width: 640px)": "24rem",
      default: "75%",
    },
  },
  popupAxisXLeft: {
    "::after": {
      backgroundColor: "var(--drawer-bleed-background, var(--popover))",
      bottom: 0,
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      right: "100%",
      top: 0,
      width: "var(--bleed, 3rem)",
    },
    left: 0,
    transformOrigin: "left",
  },
  popupAxisXRight: {
    "::after": {
      backgroundColor: "var(--drawer-bleed-background, var(--popover))",
      bottom: 0,
      content: '""',
      left: "100%",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      width: "var(--bleed, 3rem)",
    },
    right: 0,
    transformOrigin: "right",
  },
  popupAxisY: {
    left: 0,
    maxHeight: "calc(100dvh - 6rem)",
    right: 0,
  },
  popupAxisYDown: {
    "::after": {
      backgroundColor: "var(--drawer-bleed-background, var(--popover))",
      content: '""',
      height: "var(--bleed, 3rem)",
      left: 0,
      pointerEvents: "none",
      position: "absolute",
      right: 0,
      top: "100%",
    },
    bottom: 0,
    transformOrigin: "bottom",
  },
  popupAxisYSnapPoints: {
    height: "100dvh",
  },
  popupAxisYUp: {
    "::after": {
      backgroundColor: "var(--drawer-bleed-background, var(--popover))",
      bottom: "100%",
      content: '""',
      height: "var(--bleed, 3rem)",
      left: 0,
      pointerEvents: "none",
      position: "absolute",
      right: 0,
    },
    top: 0,
    transformOrigin: "top",
  },
  popupEnding: {
    opacity: 0.9999,
    transform: "var(--closed-transform)",
    transitionDuration: "calc(var(--drawer-swipe-strength, 1) * 400ms)",
  },
  popupNestedOpen: {
    filter: "brightness(0.95)",
    overflow: "hidden",
  },
  popupNestedOpenAxisY: {
    height:
      "var(--stack-height, var(--drawer-frontmost-height, var(--drawer-height, 0px)))",
  },
  popupNestedOpenDown: {
    boxShadow:
      "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  popupStarting: {
    transform: "var(--closed-transform)",
  },
  popupSwiping: {
    transitionDuration: "0ms",
  },
  swipeHandle: {
    cursor: {
      ":active": "grabbing",
      default: "grab",
    },
    display: "flex",
    flexShrink: 0,
    position: "relative",
    transitionDuration: "200ms",
    transitionProperty: "opacity",
    zIndex: 10,
  },
  swipeHandleAxisX: {
    "::after": {
      backgroundColor: colors.muted,
      borderRadius: radius.full,
      content: '""',
      display: "block",
      flexShrink: 0,
      height: "100px",
      width: "0.375rem",
    },
    alignItems: "center",
    height: "100%",
    width: "0.75rem",
  },
  swipeHandleAxisY: {
    "::after": {
      backgroundColor: colors.muted,
      borderRadius: radius.full,
      content: '""',
      display: "block",
      flexShrink: 0,
      height: "0.375rem",
      width: "100px",
    },
    height: "0.75rem",
    justifyContent: "center",
    width: "100%",
  },
  swipeHandleDown: {
    alignItems: "flex-end",
  },
  swipeHandleLeft: {
    justifyContent: "flex-start",
    order: 9999,
  },
  swipeHandleRight: {
    justifyContent: "flex-end",
  },
  swipeHandleUp: {
    alignItems: "flex-start",
    order: 9999,
  },
  title: {
    color: colors.foreground,
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    margin: 0,
  },
  viewport: {
    inset: 0,
    pointerEvents: "none",
    position: "fixed",
    userSelect: "none",
    zIndex: 50,
  },
  viewportModal: {
    pointerEvents: "auto",
  },
});

const popupCssVars: React.CSSProperties = {
  "--bleed": "3rem",
  "--drawer-bleed-background": "transparent",
  "--drawer-content-height": "var(--drawer-height, auto)",
  "--drawer-inset": "0.5rem",
  "--drawer-stacked-shadow":
    "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -8px 10px -6px rgba(0, 0, 0, 0.1)",
  "--peek": "1rem",
  "--stack-height": "var(--drawer-frontmost-height, var(--drawer-height, 0px))",
  "--stack-peek-offset":
    "max(0px, calc((var(--nested-drawers, 0) - var(--stack-progress)) * var(--peek)))",
  "--stack-progress": "clamp(0, var(--drawer-swipe-progress, 0), 1)",
  "--stack-scale":
    "clamp(0, calc(var(--stack-scale-base) + (var(--stack-step) * var(--stack-progress))), 1)",
  "--stack-scale-base":
    "max(0, calc(1 - (var(--nested-drawers, 0) * var(--stack-step))))",
  "--stack-shrink": "calc(1 - var(--stack-scale))",
  "--stack-step": "0.05",
} as React.CSSProperties;

type DrawerProps = DrawerPrimitive.Root.Props & {
  showSwipeHandle?: boolean;
};

const Drawer = ({
  modal = true,
  showSwipeHandle = false,
  snapPoints,
  swipeDirection = "down",
  ...props
}: DrawerProps) => {
  const hasSnapPoints =
    snapPoints !== null && snapPoints !== undefined && snapPoints.length > 0;
  const contextValue = React.useMemo(
    () => ({ hasSnapPoints, modal, showSwipeHandle, swipeDirection }),
    [hasSnapPoints, modal, showSwipeHandle, swipeDirection]
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        modal={modal}
        snapPoints={snapPoints}
        swipeDirection={swipeDirection}
        {...props}
      />
    </DrawerContext.Provider>
  );
};

type DrawerTriggerProps = DrawerPrimitive.Trigger.Props;

const DrawerTrigger = ({ ...props }: DrawerTriggerProps) => (
  <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
);

type DrawerPortalProps = DrawerPrimitive.Portal.Props;

const DrawerPortal = ({ ...props }: DrawerPortalProps) => (
  <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
);

type DrawerCloseProps = DrawerPrimitive.Close.Props;

const DrawerClose = ({ ...props }: DrawerCloseProps) => (
  <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
);

type DrawerOverlayProps = Omit<DrawerPrimitive.Backdrop.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
  "data-snap-points"?: string;
};

const DrawerOverlay = ({ className, style, ...props }: DrawerOverlayProps) => {
  const drawerContext = React.useContext(DrawerContext);
  const hasSnapPoints =
    props["data-snap-points"] !== undefined ||
    (drawerContext?.hasSnapPoints ?? false);

  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      style={
        {
          "--drawer-overlay-min-opacity": hasSnapPoints ? "0.5" : "0",
          ...(style as React.CSSProperties),
        } as React.CSSProperties
      }
      className={(state) =>
        stylex.props(
          styles.overlay,
          state.transitionStatus === "starting" && styles.overlayStarting,
          state.transitionStatus === "ending" && styles.overlayEnding,
          customClassName(className),
          style
        ).className
      }
      {...props}
    />
  );
};

type DrawerSwipeHandleProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const DrawerSwipeHandle = ({
  className,
  style,
  ...props
}: DrawerSwipeHandleProps) => {
  const { swipeDirection } = useDrawer();
  const swipeAxis =
    swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";

  return (
    <div
      data-slot="drawer-swipe-handle"
      aria-hidden="true"
      {...props}
      {...stylex.props(
        styles.swipeHandle,
        swipeAxis === "x" ? styles.swipeHandleAxisX : styles.swipeHandleAxisY,
        swipeDirection === "down" && styles.swipeHandleDown,
        swipeDirection === "up" && styles.swipeHandleUp,
        swipeDirection === "left" && styles.swipeHandleLeft,
        swipeDirection === "right" && styles.swipeHandleRight,
        customClassName(className),
        style
      )}
    />
  );
};

type DrawerContentProps = Omit<DrawerPrimitive.Popup.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const DrawerContent = ({
  className,
  style,
  children,
  ...props
}: DrawerContentProps) => {
  const { hasSnapPoints, modal, showSwipeHandle, swipeDirection } = useDrawer();
  const swipeAxis =
    swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";

  const directionCssVars = React.useMemo(() => {
    switch (swipeDirection) {
      case "down": {
        return {
          "--closed-transform":
            "translate3d(0, calc(100% + var(--drawer-inset, 0px) + 2px), 0)",
          "--translate-y":
            "calc(var(--drawer-snap-point-offset, 0px) + var(--drawer-swipe-movement-y, 0px) - var(--stack-peek-offset) - (var(--stack-shrink) * var(--stack-height)))",
        };
      }
      case "up": {
        return {
          "--closed-transform":
            "translate3d(0, calc(-100% - var(--drawer-inset, 0px) - 2px), 0)",
          "--translate-y":
            "calc(var(--drawer-snap-point-offset, 0px) + var(--drawer-swipe-movement-y, 0px) + var(--stack-peek-offset) + (var(--stack-shrink) * var(--stack-height)))",
        };
      }
      case "left": {
        return {
          "--closed-transform":
            "translate3d(calc(-100% - var(--drawer-inset, 0px) - 2px), 0, 0)",
          "--translate-x":
            "calc(var(--drawer-swipe-movement-x, 0px) + var(--stack-peek-offset) + (var(--stack-shrink) * 100%))",
        };
      }
      case "right": {
        return {
          "--closed-transform":
            "translate3d(calc(100% + var(--drawer-inset, 0px) + 2px), 0, 0)",
          "--translate-x":
            "calc(var(--drawer-swipe-movement-x, 0px) - var(--stack-peek-offset) - (var(--stack-shrink) * 100%))",
        };
      }
      default: {
        return {
          "--closed-transform": "translate3d(0, 0, 0)",
          "--translate-x": "0px",
          "--translate-y": "0px",
        };
      }
    }
  }, [swipeDirection]);

  return (
    <DrawerPortal data-slot="drawer-portal">
      {modal === true && (
        <DrawerOverlay data-snap-points={hasSnapPoints ? "" : undefined} />
      )}
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        data-modal={modal}
        {...stylex.props(styles.viewport, modal && styles.viewportModal)}
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-swipe-axis={swipeAxis}
          data-snap-points={hasSnapPoints ? "" : undefined}
          style={{
            ...popupCssVars,
            ...directionCssVars,
            ...(style as React.CSSProperties),
          }}
          className={(state) =>
            stylex.props(
              styles.popup,
              swipeAxis === "y" ? styles.popupAxisY : styles.popupAxisX,
              hasSnapPoints && swipeAxis === "y" && styles.popupAxisYSnapPoints,
              swipeDirection === "down" && styles.popupAxisYDown,
              swipeDirection === "up" && styles.popupAxisYUp,
              swipeDirection === "left" && styles.popupAxisXLeft,
              swipeDirection === "right" && styles.popupAxisXRight,
              state.transitionStatus === "starting" && styles.popupStarting,
              state.transitionStatus === "ending" && styles.popupEnding,
              state.swiping && styles.popupSwiping,
              state.nestedDrawerOpen && styles.popupNestedOpen,
              state.nestedDrawerOpen &&
                swipeAxis === "y" &&
                styles.popupNestedOpenAxisY,
              state.nestedDrawerOpen &&
                swipeDirection === "down" &&
                styles.popupNestedOpenDown,
              state.nestedDrawerSwiping && styles.popupSwiping,
              customClassName(className),
              style as StyleXStyles
            ).className
          }
          {...props}
        >
          {showSwipeHandle && <DrawerSwipeHandle />}
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            {...stylex.props(styles.content)}
          >
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
};

type DrawerHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const DrawerHeader = ({ className, style, ...props }: DrawerHeaderProps) => {
  const drawerContext = React.useContext(DrawerContext);
  const isAxisY =
    !drawerContext ||
    drawerContext.swipeDirection === "down" ||
    drawerContext.swipeDirection === "up";

  return (
    <div
      data-slot="drawer-header"
      {...props}
      {...stylex.props(
        styles.header,
        isAxisY && styles.headerAxisY,
        customClassName(className),
        style
      )}
    />
  );
};

type DrawerFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const DrawerFooter = ({ className, style, ...props }: DrawerFooterProps) => (
  <div
    data-slot="drawer-footer"
    {...stylex.props(styles.footer, customClassName(className), style)}
    {...props}
  />
);

type DrawerTitleProps = Omit<DrawerPrimitive.Title.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const DrawerTitle = ({ className, style, ...props }: DrawerTitleProps) => (
  <DrawerPrimitive.Title
    data-slot="drawer-title"
    {...stylex.props(styles.title, customClassName(className), style)}
    {...props}
  />
);

type DrawerDescriptionProps = Omit<
  DrawerPrimitive.Description.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const DrawerDescription = ({
  className,
  style,
  ...props
}: DrawerDescriptionProps) => (
  <DrawerPrimitive.Description
    data-slot="drawer-description"
    {...stylex.props(styles.description, customClassName(className), style)}
    {...props}
  />
);

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  styles as drawerStyles,
};

export type {
  DrawerProps,
  DrawerTriggerProps,
  DrawerPortalProps,
  DrawerCloseProps,
  DrawerOverlayProps,
  DrawerSwipeHandleProps,
  DrawerContentProps,
  DrawerHeaderProps,
  DrawerFooterProps,
  DrawerTitleProps,
  DrawerDescriptionProps,
};
