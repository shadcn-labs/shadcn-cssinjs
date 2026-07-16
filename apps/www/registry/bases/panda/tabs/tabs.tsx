"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { createContext, useContext } from "react";
import { css, cva, cx } from "styled-system/css";

const TabsListContext = createContext<"default" | "line">("default");

const root = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
});

const list = css({
  alignItems: "center",
  backgroundColor: "muted",
  borderRadius: "0.5rem",
  color: "muted.foreground",
  display: "inline-flex",
  height: "9",
  justifyContent: "center",
  padding: "1",
  width: "fit-content",
});

const listLine = css({
  alignItems: "center",
  borderBottomColor: "border",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  color: "muted.foreground",
  display: "inline-flex",
  gap: "1",
  justifyContent: "center",
  padding: "0",
  width: "fit-content",
});

const trigger = cva({
  base: {
    _focusVisible: {
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "foreground",
    cursor: "pointer",
    display: "inline-flex",
    flex: "1",
    fontSize: "0.875rem",
    fontWeight: "medium",
    gap: "1.5",
    justifyContent: "center",
    outlineStyle: "none",
    paddingBlock: "1",
    paddingInline: "3",
    transitionDuration: "150ms",
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "ease-in-out",
    whiteSpace: "nowrap",
  },
  defaultVariants: { variant: "default" },
  variants: {
    variant: {
      default: {
        _selected: {
          backgroundColor: "background",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          color: "foreground",
        },
      },
      line: {
        _selected: {
          borderBottomColor: "foreground",
          color: "foreground",
        },
        borderBottomColor: "transparent",
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderRadius: "0",
        borderWidth: "0",
        flex: "0 0 auto",
        marginBottom: "-1px",
      },
    },
  },
});

const panel = css({
  flex: "1",
  outlineStyle: "none",
});

const Tabs = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <TabsPrimitive.Root
    className={cx(root, className)}
    data-slot="tabs"
    {...props}
  />
);

const TabsList = ({
  className,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.List>, "className"> & {
  className?: string;
  variant?: "default" | "line";
}) => (
  <TabsListContext.Provider value={variant}>
    <TabsPrimitive.List
      className={cx(variant === "line" ? listLine : list, className)}
      data-slot="tabs-list"
      data-variant={variant}
      {...props}
    />
  </TabsListContext.Provider>
);

const TabsTrigger = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Tab>, "className"> & {
  className?: string;
}) => {
  const variant = useContext(TabsListContext);
  return (
    <TabsPrimitive.Tab
      className={cx(trigger({ variant }), className)}
      data-slot="tabs-trigger"
      {...props}
    />
  );
};

const TabsContent = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Panel>, "className"> & {
  className?: string;
}) => (
  <TabsPrimitive.Panel
    className={cx(panel, className)}
    data-slot="tabs-content"
    {...props}
  />
);

export { Tabs, TabsContent, TabsList, TabsTrigger };
