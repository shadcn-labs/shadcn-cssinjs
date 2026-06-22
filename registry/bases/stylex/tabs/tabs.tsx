"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { createContext, useContext } from "react";

import { cx, x } from "@/lib/utils";

import { styles } from "./tabs.stylex";

const TabsListContext = createContext<"default" | "line">("default");

const Tabs = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.root);
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TabsList = ({
  className,
  style,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.List>, "className"> & {
  className?: string;
  variant?: "default" | "line";
}) => {
  const p = x(variant === "line" ? styles.listLine : styles.list);
  return (
    <TabsListContext.Provider value={variant}>
      <TabsPrimitive.List
        className={cx(p.className, className)}
        data-slot="tabs-list"
        data-variant={variant}
        style={{ ...p.style, ...style }}
        {...props}
      />
    </TabsListContext.Provider>
  );
};

const TabsTrigger = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Tab>, "className"> & {
  className?: string;
}) => {
  const variant = useContext(TabsListContext);
  const line = variant === "line";
  const activeStyle = line ? styles.triggerLineActive : styles.triggerActive;
  return (
    <TabsPrimitive.Tab
      className={(state) =>
        cx(
          x(
            styles.trigger,
            line && styles.triggerLine,
            state.active && activeStyle
          ).className,
          className
        )
      }
      data-slot="tabs-trigger"
      style={style}
      {...props}
    />
  );
};

const TabsContent = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Panel>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.panel);
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
