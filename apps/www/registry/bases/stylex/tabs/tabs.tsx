"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import * as stylex from "@stylexjs/stylex";
import { createContext, useContext } from "react";

import { styles } from "./tabs.stylex";

const TabsListContext = createContext<"default" | "line">("default");

const Tabs = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.root);
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(variant === "line" ? styles.listLine : styles.list);
  return (
    <TabsListContext.Provider value={variant}>
      <TabsPrimitive.List
        className={
          [p.className, className].filter(Boolean).join(" ") || undefined
        }
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
        [
          stylex.props(
            styles.trigger,
            line && styles.triggerLine,
            state.active && activeStyle
          ).className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
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
  const p = stylex.props(styles.panel);
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
