"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  content: {
    height: "100%",
    transitionDuration: "0.35s",
    transitionProperty: "opacity, transform, translate",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    width: "auto",
  },
  indicator: {
    alignItems: "flex-end",
    display: "flex",
    height: "0.375rem",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
    top: "100%",
    zIndex: 1,
  },
  indicatorArrow: {
    backgroundColor: colors.border,
    borderTopLeftRadius: radius.md,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    height: "0.5rem",
    position: "relative",
    top: "60%",
    transform: "rotate(45deg)",
    width: "0.5rem",
  },
  item: {
    boxSizing: "border-box",
    listStyle: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    position: "relative",
  },
  link: {
    alignItems: "center",
    backgroundColor: {
      ":focus": colors.muted,
      ":hover": colors.muted,
      default: "transparent",
    },
    borderRadius: radius.md,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    lineHeight: "1.25rem",
    outline: "none",
    outlineStyle: {
      ":focus-visible": "solid",
      default: null,
    },
    outlineWidth: {
      ":focus-visible": "1px",
      default: null,
    },
    padding: "0.5rem",
    textDecoration: "none",
    textDecorationLine: "none",
    transitionDuration: "150ms",
    transitionProperty: "all",
  },
  list: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flex: 1,
    gap: "0.25rem",
    justifyContent: "center",
    listStyle: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: `color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    height: "var(--popup-height)",
    outline: "none",
    position: "relative",
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "0.35s",
    transitionProperty: "opacity, transform, width, height, scale, translate",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    width: "var(--popup-width)",
  },
  positioner: {
    height: "var(--positioner-height)",
    isolation: "isolate",
    maxWidth: "var(--available-width)",
    outline: "none",
    transitionDuration: "0.35s",
    transitionProperty: "top, left, right, bottom",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    width: "var(--positioner-width)",
    zIndex: 50,
  },
  root: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    maxWidth: "max-content",
    position: "relative",
  },
  trigger: {
    alignItems: "center",
    backgroundColor: {
      ":focus": colors.muted,
      ":hover": colors.muted,
      default: "transparent",
    },
    borderRadius: radius.md,
    borderStyle: "none",
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    boxSizing: "border-box",
    color: colors.foreground,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "inline-flex",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    height: "2.25rem",
    justifyContent: "center",
    lineHeight: "1.25rem",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    outlineStyle: {
      ":focus-visible": "solid",
      default: null,
    },
    outlineWidth: {
      ":focus-visible": "1px",
      default: null,
    },
    paddingBlock: "0.375rem",
    paddingInline: "0.625rem",
    pointerEvents: {
      ":disabled": "none",
      default: null,
    },
    transitionDuration: "150ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    whiteSpace: "nowrap",
    width: "max-content",
  },
  triggerIcon: {
    height: "0.75rem",
    marginLeft: "0.25rem",
    pointerEvents: "none",
    position: "relative",
    top: "1px",
    transform: {
      default: "rotate(0deg)",
      [stylex.when.ancestor(":hover")]: "rotate(180deg)",
      [stylex.when.ancestor("[data-popup-open]")]: "rotate(180deg)",
      [stylex.when.ancestor("[data-state=open]")]: "rotate(180deg)",
      [stylex.when.ancestor("[aria-expanded=true]")]: "rotate(180deg)",
    },
    transitionDuration: "300ms",
    transitionProperty: "transform",
    width: "0.75rem",
  },
  triggerOpen: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
  },
  viewport: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
});

type NavigationMenuPositionerProps = Omit<
  NavigationMenuPrimitive.Positioner.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuPositioner = ({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  style,
  ...props
}: NavigationMenuPositionerProps) => (
  <NavigationMenuPrimitive.Portal>
    <NavigationMenuPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      className={(_state) =>
        stylex.props(styles.positioner, customClassName(className), style)
          .className
      }
      {...props}
    >
      <NavigationMenuPrimitive.Popup
        className={(_state) => stylex.props(styles.popup).className}
      >
        <NavigationMenuPrimitive.Viewport
          className={(_state) => stylex.props(styles.viewport).className}
        />
      </NavigationMenuPrimitive.Popup>
    </NavigationMenuPrimitive.Positioner>
  </NavigationMenuPrimitive.Portal>
);

type NavigationMenuProps = Omit<
  NavigationMenuPrimitive.Root.Props,
  "className" | "style"
> &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align"> & {
    className?: string;
    style?: StyleXStyles;
  };

const NavigationMenu = ({
  align = "start",
  className,
  children,
  style,
  ...props
}: NavigationMenuProps) => (
  <NavigationMenuPrimitive.Root
    data-slot="navigation-menu"
    className={(_state) =>
      stylex.props(styles.root, customClassName(className), style).className
    }
    {...props}
  >
    {children}
    <NavigationMenuPositioner align={align} />
  </NavigationMenuPrimitive.Root>
);

type NavigationMenuListProps = Omit<
  NavigationMenuPrimitive.List.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuList = ({
  className,
  style,
  ...props
}: NavigationMenuListProps) => (
  <NavigationMenuPrimitive.List
    data-slot="navigation-menu-list"
    className={(_state) =>
      stylex.props(styles.list, customClassName(className), style).className
    }
    {...props}
  />
);

type NavigationMenuItemProps = Omit<
  NavigationMenuPrimitive.Item.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuItem = ({
  className,
  style,
  ...props
}: NavigationMenuItemProps) => (
  <NavigationMenuPrimitive.Item
    data-slot="navigation-menu-item"
    className={(_state) =>
      stylex.props(styles.item, customClassName(className), style).className
    }
    {...props}
  />
);

const navigationMenuTriggerStyle = (options?: {
  className?: string;
  style?: StyleXStyles;
}) =>
  stylex.props(
    styles.trigger,
    customClassName(options?.className),
    options?.style
  ).className;

type NavigationMenuTriggerProps = Omit<
  NavigationMenuPrimitive.Trigger.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuTrigger = ({
  className,
  style,
  children,
  ...props
}: NavigationMenuTriggerProps) => (
  <NavigationMenuPrimitive.Trigger
    data-slot="navigation-menu-trigger"
    className={(state) =>
      stylex.props(
        styles.trigger,
        state.open && styles.triggerOpen,
        customClassName(className),
        style,
        stylex.defaultMarker()
      ).className
    }
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon aria-hidden="true" {...stylex.props(styles.triggerIcon)} />
  </NavigationMenuPrimitive.Trigger>
);

type NavigationMenuContentProps = Omit<
  NavigationMenuPrimitive.Content.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuContent = ({
  className,
  style,
  ...props
}: NavigationMenuContentProps) => (
  <NavigationMenuPrimitive.Content
    data-slot="navigation-menu-content"
    className={(_state) =>
      stylex.props(styles.content, customClassName(className), style).className
    }
    {...props}
  />
);

type NavigationMenuLinkProps = Omit<
  NavigationMenuPrimitive.Link.Props,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuLink = ({
  className,
  style,
  ...props
}: NavigationMenuLinkProps) => (
  <NavigationMenuPrimitive.Link
    data-slot="navigation-menu-link"
    className={(_state) =>
      stylex.props(styles.link, customClassName(className), style).className
    }
    {...props}
  />
);

type NavigationMenuIndicatorProps = Omit<
  React.ComponentProps<typeof NavigationMenuPrimitive.Icon>,
  "className" | "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const NavigationMenuIndicator = ({
  className,
  style,
  ...props
}: NavigationMenuIndicatorProps) => (
  <NavigationMenuPrimitive.Icon
    data-slot="navigation-menu-indicator"
    className={(_state) =>
      stylex.props(styles.indicator, customClassName(className), style)
        .className
    }
    {...props}
  >
    <div {...stylex.props(styles.indicatorArrow)} />
  </NavigationMenuPrimitive.Icon>
);

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  styles as navigationMenuStyles,
};

export type {
  NavigationMenuProps,
  NavigationMenuListProps,
  NavigationMenuItemProps,
  NavigationMenuTriggerProps,
  NavigationMenuPositionerProps,
  NavigationMenuContentProps,
  NavigationMenuLinkProps,
  NavigationMenuIndicatorProps,
};
