"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { styles } from "./tabs.stylex";

import { cx, x } from "@/lib/utils";

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
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.List>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.list);
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TabsTrigger = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Tab>, "className"> & {
  className?: string;
}) => (
  <TabsPrimitive.Tab
    data-slot="tabs-trigger"
    className={(state) =>
      cx(
        x(styles.trigger, state.active && styles.triggerActive).className,
        className
      )
    }
    style={style}
    {...props}
  />
);

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
