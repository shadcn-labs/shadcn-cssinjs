"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { createContext, useContext } from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

export type TabsListVariant = "default" | "line";

const TabsVariantContext = createContext<TabsListVariant>("default");

const styles = stylex.create({
  list: {
    alignItems: "center",
    borderRadius: radius.md,
    boxSizing: "border-box",
    color: colors.mutedForeground,
    display: "inline-flex",
    justifyContent: "center",
    padding: "3px",
    width: "fit-content",
  },
  listHorizontal: {
    height: "2rem",
  },
  listVariantDefault: {
    backgroundColor: colors.muted,
  },
  listVariantLine: {
    backgroundColor: "transparent",
    borderRadius: 0,
    gap: "0.25rem",
  },
  listVertical: {
    flexDirection: "column",
    height: "fit-content",
  },
  panel: {
    flex: 1,
    fontSize: "0.875rem",
    outline: "none",
  },
  root: {
    display: "flex",
    gap: "0.5rem",
  },
  rootHorizontal: {
    flexDirection: "column",
  },
  rootVertical: {
    flexDirection: "row",
  },
  trigger: {
    "::after": {
      backgroundColor: colors.foreground,
      content: '""',
      opacity: 0,
      position: "absolute",
      transitionDuration: "0.15s",
      transitionProperty: "opacity",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: `calc(${radius.md} - 4px)`,
    borderStyle: "none",
    borderWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    boxSizing: "border-box",
    color: {
      ":hover": colors.foreground,
      default: colors.mutedForeground,
    },
    cursor: "pointer",
    display: "inline-flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.375rem",
    height: "calc(2rem - 6px)",
    justifyContent: "center",
    lineHeight: "1rem",
    outline: "none",
    paddingBlock: 0,
    paddingInline: "0.5rem",
    position: "relative",
    transitionDuration: "0.15s",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
  },
  triggerActiveDefault: {
    backgroundColor: colors.background,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: colors.foreground,
  },
  triggerActiveLine: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: colors.foreground,
  },
  triggerAfterActiveLine: {
    "::after": {
      opacity: 1,
    },
  },
  triggerAfterHorizontalLine: {
    "::after": {
      bottom: "-5px",
      height: "2px",
      left: 0,
      right: 0,
    },
  },
  triggerAfterVerticalLine: {
    "::after": {
      bottom: 0,
      right: "-4px",
      top: 0,
      width: "2px",
    },
  },
  triggerDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
  triggerVertical: {
    justifyContent: "flex-start",
    width: "100%",
  },
});

export type TabsProps = Omit<TabsPrimitive.Root.Props, "style"> & {
  style?: StyleXStyles;
};

const Tabs = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: TabsProps) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    data-orientation={orientation}
    orientation={orientation}
    className={(state) =>
      stylex.props(
        styles.root,
        state.orientation === "vertical"
          ? styles.rootVertical
          : styles.rootHorizontal,
        customClassName(
          typeof className === "function" ? className(state) : className
        ),
        style
      ).className
    }
    {...props}
  />
);

export type TabsListProps = Omit<TabsPrimitive.List.Props, "style"> & {
  variant?: TabsListVariant;
  style?: StyleXStyles;
};

const tabsListVariants = (options?: {
  variant?: TabsListVariant;
  className?: string;
}) => {
  const variant = options?.variant || "default";
  return stylex.props(
    styles.list,
    variant === "line" ? styles.listVariantLine : styles.listVariantDefault,
    customClassName(options?.className)
  );
};

const TabsList = ({
  className,
  style,
  variant = "default",
  ...props
}: TabsListProps) => (
  <TabsVariantContext.Provider value={variant}>
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={(state) =>
        stylex.props(
          styles.list,
          state.orientation === "vertical"
            ? styles.listVertical
            : styles.listHorizontal,
          variant === "line"
            ? styles.listVariantLine
            : styles.listVariantDefault,
          customClassName(
            typeof className === "function" ? className(state) : className
          ),
          style
        ).className
      }
      {...props}
    />
  </TabsVariantContext.Provider>
);

export type TabsTriggerProps = Omit<TabsPrimitive.Tab.Props, "style"> & {
  style?: StyleXStyles;
};

const TabsTrigger = ({ className, style, ...props }: TabsTriggerProps) => {
  const variant = useContext(TabsVariantContext);

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={(state) => {
        const userClassName =
          typeof className === "function" ? className(state) : className;

        return stylex.props(
          styles.trigger,
          state.orientation === "vertical"
            ? styles.triggerVertical
            : variant === "line" && styles.triggerAfterHorizontalLine,
          state.orientation === "vertical" &&
            variant === "line" &&
            styles.triggerAfterVerticalLine,
          state.active &&
            (variant === "line"
              ? [styles.triggerActiveLine, styles.triggerAfterActiveLine]
              : styles.triggerActiveDefault),
          state.disabled && styles.triggerDisabled,
          customClassName(userClassName),
          style
        ).className;
      }}
      {...props}
    />
  );
};

export type TabsContentProps = Omit<TabsPrimitive.Panel.Props, "style"> & {
  style?: StyleXStyles;
};

const TabsContent = ({ className, style, ...props }: TabsContentProps) => (
  <TabsPrimitive.Panel
    data-slot="tabs-content"
    className={(state) =>
      stylex.props(
        styles.panel,
        customClassName(
          typeof className === "function" ? className(state) : className
        ),
        style
      ).className
    }
    {...props}
  />
);

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  styles as tabsStyles,
};
