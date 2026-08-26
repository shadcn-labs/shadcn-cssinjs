"use client";

import { useRender } from "@base-ui/react";
import type { TokenamiStyle } from "@tokenami/css";
import { PanelLeftIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { css } from "@/lib/tokenami";

import { Button } from "../button/button";
import { Input } from "../input/input";
import { Separator } from "../separator/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../sheet/sheet";
import { Skeleton } from "../skeleton/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip/tooltip";

const wrapper = css.compose({
  "--display": "flex",
  "--min-height": "var(---, 100svh)",
  "--width": "var(---, 100%)",
});

const inner = css.compose({
  "--background-color": "var(--color_sidebar)",
  "--color": "var(--color_sidebar-foreground)",
  "--display": "flex",
  "--flex-direction": "column",
  "--height": "var(---, 100%)",
  "--width": "var(---, 100%)",
});

const gap = css.compose({
  "--background-color": "var(--color_transparent)",
  "--position": "relative",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, width)",
  "--transition-timing-function": "ease-in-out",
});

const container = css.compose({
  "--bottom": 0,
  "--display": "flex",
  "--height": "var(---, 100svh)",
  "--position": "fixed",
  "--top": 0,
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, left, right, width)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 10)",
});

const inset = css.compose({
  "--background-color": "var(--color_background)",
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--flex-direction": "column",
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const rail = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-width": "var(---, 0)",
  "--cursor": "ew-resize",
  "--inset-block": 0,
  "--position": "absolute",
  "--width": 4,
  "--z-index": "var(---, 20)",
});

const header = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--padding": 2,
});

const footer = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--padding": 2,
});

const content = css.compose({
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--flex-direction": "column",
  "--gap": 2,
  "--min-height": "var(---, 0)",
  "--overflow": "auto",
});

const group = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--min-width": "var(---, 0)",
  "--padding": 2,
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const groupLabel = css.compose({
  "--align-items": "center",
  "--border-radius": "var(--radii_md)",
  "--color":
    "var(---, color-mix(in oklab, var(--color_sidebar-foreground) 70%, transparent))",
  "--display": "flex",
  "--flex-shrink": "var(---, 0)",
  "--font-size": "0.75rem",
  "--font-weight": 500,
  "--height": 8,
  "--outline-style": "none",
  "--padding-inline": 2,
});

const groupContent = css.compose({
  "--font-size": "0.875rem",
  "--width": "var(---, 100%)",
});

const menu = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 1,
  "--list-style": "none",
  "--margin": 0,
  "--min-width": "var(---, 0)",
  "--padding": 0,
  "--width": "var(---, 100%)",
});

const menuItem = css.compose({
  "--position": "relative",
});

const menuButton = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_sidebar-foreground)",
  "--cursor": "pointer",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 400,
  "--gap": 2,
  "--hover_background-color": "var(--color_sidebar-accent)",
  "--hover_color": "var(--color_sidebar-accent-foreground)",
  "--outline-style": "none",
  "--overflow": "hidden",
  "--padding": 2,
  "--text-align": "start",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",
  "--width": "var(---, 100%)",

  variants: {
    size: {
      default: {},
      lg: { "--height": 12 },
      sm: { "--font-size": "0.75rem", "--height": 7 },
    },
    state: {
      active: {
        "--background-color": "var(--color_sidebar-accent)",
        "--color": "var(--color_sidebar-accent-foreground)",
        "--font-weight": 500,
      },
      default: {},
    },
  },
});

const menuAction = css.compose({
  "--align-items": "center",
  "--aspect-ratio": "var(---, 1)",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_sidebar-foreground)",
  "--cursor": "pointer",
  "--display": "flex",
  "--hover_background-color": "var(--color_sidebar-accent)",
  "--inset-inline-end": 1,
  "--justify-content": "center",
  "--outline-style": "none",
  "--padding": 0,
  "--position": "absolute",
  "--top": 1.5,
  "--width": 5,
});

const menuBadge = css.compose({
  "--align-items": "center",
  "--border-radius": "var(--radii_md)",
  "--color": "var(--color_sidebar-foreground)",
  "--display": "flex",
  "--font-size": "0.75rem",
  "--font-variant-numeric": "tabular-nums",
  "--font-weight": 500,
  "--height": 5,
  "--inset-inline-end": 1,
  "--justify-content": "center",
  "--min-width": 5,
  "--padding-inline": 1,
  "--pointer-events": "none",
  "--position": "absolute",
  "--top": 1.5,
  "--user-select": "none",
});

const menuSkeleton = css.compose({
  "--align-items": "center",
  "--border-radius": "var(--radii_md)",
  "--display": "flex",
  "--gap": 2,
  "--height": 8,
  "--padding-inline": 2,
});

const menuSub = css.compose({
  "--border-inline-start-color": "var(--color_sidebar-border)",
  "--border-inline-start-style": "solid",
  "--border-inline-start-width": "var(---, 1px)",
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 1,
  "--list-style": "none",
  "--margin-inline-start": 3.5,
  "--min-width": "var(---, 0)",
  "--padding-block": 0.5,
  "--padding-inline-start": 2.5,
});

const menuSubItem = css.compose({
  "--position": "relative",
});

const menuSubButton = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--color": "var(--color_sidebar-foreground)",
  "--cursor": "pointer",
  "--display": "flex",
  "--gap": 2,
  "--height": 7,
  "--hover_background-color": "var(--color_sidebar-accent)",
  "--hover_color": "var(--color_sidebar-accent-foreground)",
  "--min-width": "var(---, 0)",
  "--outline-style": "none",
  "--overflow": "hidden",
  "--padding-inline": 2,
  "--text-decoration-line": "none",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",

  variants: {
    state: {
      active: {
        "--background-color": "var(--color_sidebar-accent)",
        "--color": "var(--color_sidebar-accent-foreground)",
      },
      default: {},
    },
  },
});

const separator = css.compose({
  "--background-color": "var(--color_sidebar-border)",
  "--margin-inline": 2,
  "--width": "var(---, auto)",
});

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextProps {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};

const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"div">, "style">> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = openProp ?? internalOpen;

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        setInternalOpen(openState);
      }
      // oxlint-disable-next-line unicorn/no-document-cookie
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleSidebar = useCallback(
    () =>
      isMobile ? setOpenMobile((prev) => !prev) : setOpen((prev) => !prev),
    [isMobile, setOpen]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state,
      toggleSidebar,
    }),
    [state, open, openMobile, setOpen, isMobile, toggleSidebar]
  );

  const [cn, sx] = wrapper();

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delay={0}>
        <div
          className={cn(className)}
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...sx(style),
            } as React.CSSProperties
          }
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

const Sidebar = ({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  style,
  children,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"div">, "style">> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  const [icn, isx] = inner();

  if (collapsible === "none") {
    return (
      <div
        className={icn(className)}
        data-slot="sidebar"
        style={
          {
            ...isx(style),
            "--width": "var(---, var(--sidebar-width))",
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpenMobile} open={openMobile}>
        <SheetContent
          data-mobile="true"
          data-sidebar="sidebar"
          data-slot="sidebar"
          side={side}
          style={{
            "--padding": 0,
            "--width": "var(---, var(--sidebar-width))",
          }}
        >
          <SheetHeader style={{ "--display": "none" }}>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div
            className={icn()}
            style={
              {
                ...isx(),
                "--background-color": "var(--color_transparent)",
              } as React.CSSProperties
            }
          >
            {children}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  const collapsed = state === "collapsed";
  const offcanvas = collapsed && collapsible === "offcanvas";

  let width = "var(--sidebar-width)";
  if (offcanvas) {
    width = "0px";
  } else if (collapsed && collapsible === "icon") {
    width = "var(--sidebar-width-icon)";
  }

  const [gcn, gsx] = gap();
  const [ccn, csx] = container();

  const containerDynamic: Record<string, string | number> = {
    "--width": `var(---, ${width})`,
  };
  if (side === "left") {
    containerDynamic["--left"] = 0;
  } else {
    containerDynamic["--right"] = 0;
  }
  if (offcanvas) {
    containerDynamic["--transform"] =
      side === "left"
        ? "var(---, translateX(-100%))"
        : "var(---, translateX(100%))";
  }

  return (
    <div
      data-collapsible={collapsed ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      <div
        className={gcn()}
        data-slot="sidebar-gap"
        style={
          { ...gsx(), "--width": `var(---, ${width})` } as React.CSSProperties
        }
      />
      <div
        className={ccn(className)}
        data-slot="sidebar-container"
        style={{ ...csx(style), ...containerDynamic } as React.CSSProperties}
        {...props}
      >
        <div
          className={icn()}
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          style={isx()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      className={className}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon-sm"
      variant="ghost"
      {...props}
    >
      <PanelLeftIcon size={16} />
    </Button>
  );
};

const SidebarRail = (props: React.ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar();
  const [cn, sx] = rail();
  return (
    <button
      aria-label="Toggle Sidebar"
      className={cn()}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      style={sx()}
      tabIndex={-1}
      title="Toggle Sidebar"
      type="button"
      {...props}
    />
  );
};

const SidebarInset = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"main">>) => {
  const [cn, sx] = inset();
  return (
    <main
      className={cn(className)}
      data-slot="sidebar-inset"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    data-sidebar="input"
    data-slot="sidebar-input"
    style={{
      "--background-color": "var(--color_background)",
      "--height": 8,
      "--width": "var(---, 100%)",
    }}
    {...props}
  />
);

const makeDiv =
  (slot: string, sidebar: string, compose: typeof header) =>
  ({
    className,
    style,
    ...props
  }: TokenamiStyle<React.ComponentProps<"div">>) => {
    const [cn, sx] = compose();
    return (
      <div
        className={cn(className)}
        data-sidebar={sidebar}
        data-slot={slot}
        style={sx(style)}
        {...props}
      />
    );
  };

const SidebarHeader = makeDiv("sidebar-header", "header", header);
const SidebarFooter = makeDiv("sidebar-footer", "footer", footer);
const SidebarContent = makeDiv("sidebar-content", "content", content);
const SidebarGroup = makeDiv("sidebar-group", "group", group);
const SidebarGroupLabel = makeDiv(
  "sidebar-group-label",
  "group-label",
  groupLabel
);
const SidebarGroupContent = makeDiv(
  "sidebar-group-content",
  "group-content",
  groupContent
);
const SidebarMenuBadge = makeDiv("sidebar-menu-badge", "menu-badge", menuBadge);

const SidebarSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  const [cn, sx] = separator();
  return (
    <Separator
      className={cn(className)}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarGroupAction = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"button">>) => {
  const [cn, sx] = menuAction();
  return (
    <button
      className={cn(className)}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      style={sx(style)}
      type="button"
      {...props}
    />
  );
};

const SidebarMenu = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"ul">>) => {
  const [cn, sx] = menu();
  return (
    <ul
      className={cn(className)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarMenuItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"li">>) => {
  const [cn, sx] = menuItem();
  return (
    <li
      className={cn(className)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarMenuButton = ({
  isActive = false,
  size = "default",
  tooltip,
  className,
  style,
  render,
  children,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<"button">, "className" | "style">
> & {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  size?: "sm" | "default" | "lg";
  className?: string;
  render?: useRender.RenderProp;
}) => {
  const { isMobile, state } = useSidebar();
  const [cn, sx] = menuButton({
    size,
    state: isActive ? "active" : "default",
  });

  const element = useRender({
    props: {
      children,
      className: cn(className),
      "data-active": isActive,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-slot": "sidebar-menu-button",
      style: sx(style),
      ...props,
    },
    render: render ?? <button type="button" />,
  });

  if (!tooltip) {
    return element;
  }

  const tooltipProps =
    typeof tooltip === "string" ? { children: tooltip } : tooltip;

  return (
    <Tooltip>
      <TooltipTrigger render={element} />
      <TooltipContent
        align="center"
        hidden={state !== "collapsed" || isMobile}
        side="right"
        {...tooltipProps}
      />
    </Tooltip>
  );
};

const SidebarMenuAction = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"button">>) => {
  const [cn, sx] = menuAction();
  return (
    <button
      className={cn(className)}
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      style={sx(style)}
      type="button"
      {...props}
    />
  );
};

const SidebarMenuSkeleton = ({
  className,
  style,
  showIcon = false,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & { showIcon?: boolean }) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  const [cn, sx] = menuSkeleton();
  return (
    <div
      className={cn(className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      style={sx(style)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          style={{
            "--border-radius": "var(---, calc(var(--radius) - 2px))",
            "--height": 4,
            "--width": 4,
          }}
        />
      )}
      <Skeleton
        style={{
          "--flex": "var(---, 1)",
          "--height": 4,
          "--max-width": `var(---, ${width})`,
        }}
      />
    </div>
  );
};

const SidebarMenuSub = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"ul">>) => {
  const [cn, sx] = menuSub();
  return (
    <ul
      className={cn(className)}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarMenuSubItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"li">>) => {
  const [cn, sx] = menuSubItem();
  return (
    <li
      className={cn(className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      style={sx(style)}
      {...props}
    />
  );
};

const SidebarMenuSubButton = ({
  size = "md",
  isActive = false,
  className,
  style,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"a">, "style">> & {
  size?: "sm" | "md";
  isActive?: boolean;
}) => {
  const [cn, sx] = menuSubButton({ state: isActive ? "active" : "default" });
  return (
    <a
      className={cn(className)}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-slot="sidebar-menu-sub-button"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
