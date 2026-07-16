"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type { TokenamiStyle } from "@tokenami/css";
import { createContext, useContext } from "react";

import { css } from "@/lib/tokenami";

const TabsListContext = createContext<"default" | "line">("default");

const root = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
});

const list = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_muted)",
  "--border-radius": "var(---, 0.5rem)",
  "--color": "var(--color_muted-foreground)",
  "--display": "inline-flex",
  "--height": 9,
  "--justify-content": "center",
  "--padding": 1,
  "--width": "var(---, fit-content)",
});

const listLine = css.compose({
  "--align-items": "center",
  "--border-bottom-color": "var(--color_border)",
  "--border-bottom-style": "solid",
  "--border-bottom-width": "var(---, 1px)",
  "--color": "var(--color_muted-foreground)",
  "--display": "inline-flex",
  "--gap": 1,
  "--justify-content": "center",
  "--padding": 0,
  "--width": "var(---, fit-content)",
});

const trigger = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--flex": "var(---, 1)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 1.5,
  "--justify-content": "center",
  "--outline-style": "none",
  "--padding-block": 1,
  "--padding-inline": 3,
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow)",
  "--transition-timing-function": "ease-in-out",
  "--white-space": "nowrap",

  variants: {
    variant: {
      default: {
        "--selected_background-color": "var(--color_background)",
        "--selected_box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
        "--selected_color": "var(--color_foreground)",
      },
      line: {
        "--border-bottom-color": "var(--color_transparent)",
        "--border-bottom-style": "solid",
        "--border-bottom-width": "var(---, 2px)",
        "--border-radius": "var(---, 0)",
        "--border-width": "var(---, 0)",
        "--flex": "var(---, 0 0 auto)",
        "--margin-bottom": "var(---, -1px)",
        "--selected_border-bottom-color": "var(--color_foreground)",
        "--selected_color": "var(--color_foreground)",
      },
    },
  },
});

const panel = css.compose({
  "--flex": "var(---, 1)",
  "--outline-style": "none",
});

const Tabs = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TabsPrimitive.Root>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = root();
  return (
    <TabsPrimitive.Root
      className={cn(className)}
      data-slot="tabs"
      style={sx(style)}
      {...props}
    />
  );
};

const TabsList = ({
  className,
  style,
  variant = "default",
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TabsPrimitive.List>, "className" | "style">
> & { className?: string; variant?: "default" | "line" }) => {
  const [cn, sx] = (variant === "line" ? listLine : list)();
  return (
    <TabsListContext.Provider value={variant}>
      <TabsPrimitive.List
        className={cn(className)}
        data-slot="tabs-list"
        data-variant={variant}
        style={sx(style)}
        {...props}
      />
    </TabsListContext.Provider>
  );
};

const TabsTrigger = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TabsPrimitive.Tab>, "className" | "style">
> & { className?: string }) => {
  const variant = useContext(TabsListContext);
  const [cn, sx] = trigger({ variant });
  return (
    <TabsPrimitive.Tab
      className={cn(className)}
      data-slot="tabs-trigger"
      style={sx(style)}
      {...props}
    />
  );
};

const TabsContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof TabsPrimitive.Panel>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = panel();
  return (
    <TabsPrimitive.Panel
      className={cn(className)}
      data-slot="tabs-content"
      style={sx(style)}
      {...props}
    />
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
