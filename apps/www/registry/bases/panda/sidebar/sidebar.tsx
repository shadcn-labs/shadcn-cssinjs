"use client";

import { useRender } from "@base-ui/react";
import { PanelLeftIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { css, cva, cx } from "styled-system/css";

import { useIsMobile } from "@/hooks/use-mobile";

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

const wrapper = css({
  display: "flex",
  minHeight: "100svh",
  width: "100%",
});

const inner = css({
  backgroundColor: "sidebar",
  color: "sidebar.foreground",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

const gap = css({
  backgroundColor: "transparent",
  position: "relative",
  transitionDuration: "200ms",
  transitionProperty: "width",
  transitionTimingFunction: "ease-in-out",
});

const container = css({
  bottom: "0",
  display: "flex",
  height: "100svh",
  position: "fixed",
  top: "0",
  transitionDuration: "200ms",
  transitionProperty: "left, right, width",
  transitionTimingFunction: "ease-in-out",
  zIndex: "10",
});

const inset = css({
  backgroundColor: "background",
  display: "flex",
  flex: "1",
  flexDirection: "column",
  position: "relative",
  width: "100%",
});

const rail = css({
  backgroundColor: "transparent",
  borderWidth: "0",
  cursor: "ew-resize",
  insetBlock: "0",
  position: "absolute",
  width: "4",
  zIndex: "20",
});

const header = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  padding: "2",
});

const footer = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  padding: "2",
});

const content = css({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  gap: "2",
  minHeight: "0",
  overflow: "auto",
});

const group = css({
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  padding: "2",
  position: "relative",
  width: "100%",
});

const groupLabel = css({
  alignItems: "center",
  borderRadius: "md",
  color: "color-mix(in oklab, var(--sidebar-foreground) 70%, transparent)",
  display: "flex",
  flexShrink: "0",
  fontSize: "0.75rem",
  fontWeight: "medium",
  height: "8",
  outlineStyle: "none",
  paddingInline: "2",
});

const groupContent = css({
  fontSize: "0.875rem",
  width: "100%",
});

const menu = css({
  display: "flex",
  flexDirection: "column",
  gap: "1",
  listStyle: "none",
  margin: "0",
  minWidth: "0",
  padding: "0",
  width: "100%",
});

const menuItem = css({
  position: "relative",
});

const menuButton = cva({
  base: {
    _hover: {
      backgroundColor: "sidebar.accent",
      color: "sidebar.accent.foreground",
    },
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: "md",
    borderWidth: "0",
    color: "sidebar.foreground",
    cursor: "pointer",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: "normal",
    gap: "2",
    outlineStyle: "none",
    overflow: "hidden",
    padding: "2",
    textAlign: "start",
    transitionDuration: "100ms",
    transitionProperty: "background-color, color",
    width: "100%",
  },
  defaultVariants: { size: "default", state: "default" },
  variants: {
    size: {
      default: {},
      lg: { height: "12" },
      sm: { fontSize: "0.75rem", height: "7" },
    },
    state: {
      active: {
        backgroundColor: "sidebar.accent",
        color: "sidebar.accent.foreground",
        fontWeight: "medium",
      },
      default: {},
    },
  },
});

const menuAction = css({
  _hover: { backgroundColor: "sidebar.accent" },
  alignItems: "center",
  aspectRatio: "1",
  backgroundColor: "transparent",
  borderRadius: "md",
  borderWidth: "0",
  color: "sidebar.foreground",
  cursor: "pointer",
  display: "flex",
  insetInlineEnd: "1",
  justifyContent: "center",
  outlineStyle: "none",
  padding: "0",
  position: "absolute",
  top: "1.5",
  width: "5",
});

const menuBadge = css({
  alignItems: "center",
  borderRadius: "md",
  color: "sidebar.foreground",
  display: "flex",
  fontSize: "0.75rem",
  fontVariantNumeric: "tabular-nums",
  fontWeight: "medium",
  height: "5",
  insetInlineEnd: "1",
  justifyContent: "center",
  minWidth: "5",
  paddingInline: "1",
  pointerEvents: "none",
  position: "absolute",
  top: "1.5",
  userSelect: "none",
});

const menuSkeleton = css({
  alignItems: "center",
  borderRadius: "md",
  display: "flex",
  gap: "2",
  height: "8",
  paddingInline: "2",
});

const menuSub = css({
  borderInlineStartColor: "sidebar.border",
  borderInlineStartStyle: "solid",
  borderInlineStartWidth: "1px",
  display: "flex",
  flexDirection: "column",
  gap: "1",
  listStyle: "none",
  marginInlineStart: "3.5",
  minWidth: "0",
  paddingBlock: "0.5",
  paddingInlineStart: "2.5",
});

const menuSubItem = css({
  position: "relative",
});

const menuSubButton = cva({
  base: {
    _hover: {
      backgroundColor: "sidebar.accent",
      color: "sidebar.accent.foreground",
    },
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: "md",
    color: "sidebar.foreground",
    cursor: "pointer",
    display: "flex",
    gap: "2",
    height: "7",
    minWidth: "0",
    outlineStyle: "none",
    overflow: "hidden",
    paddingInline: "2",
    textDecorationLine: "none",
    transitionDuration: "100ms",
    transitionProperty: "background-color, color",
  },
  defaultVariants: { state: "default" },
  variants: {
    state: {
      active: {
        backgroundColor: "sidebar.accent",
        color: "sidebar.accent.foreground",
      },
      default: {},
    },
  },
});

const separator = css({
  backgroundColor: "sidebar.border",
  marginInline: "2",
  width: "auto",
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
}: React.ComponentProps<"div"> & {
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

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delay={0}>
        <div
          className={cx(wrapper, className)}
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
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
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cx(inner, className)}
        data-slot="sidebar"
        style={{ width: "var(--sidebar-width)", ...style }}
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
          style={{ padding: 0, width: "var(--sidebar-width)" }}
        >
          <SheetHeader style={{ display: "none" }}>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className={inner} style={{ backgroundColor: "transparent" }}>
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

  const containerDynamic: React.CSSProperties = { width };
  if (side === "left") {
    containerDynamic.left = 0;
  } else {
    containerDynamic.right = 0;
  }
  if (offcanvas) {
    containerDynamic.transform =
      side === "left" ? "translateX(-100%)" : "translateX(100%)";
  }

  return (
    <div
      data-collapsible={collapsed ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      <div className={gap} data-slot="sidebar-gap" style={{ width }} />
      <div
        className={cx(container, className)}
        data-slot="sidebar-container"
        style={{ ...style, ...containerDynamic }}
        {...props}
      >
        <div className={inner} data-sidebar="sidebar" data-slot="sidebar-inner">
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
  return (
    <button
      aria-label="Toggle Sidebar"
      className={rail}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle Sidebar"
      type="button"
      {...props}
    />
  );
};

const SidebarInset = ({
  className,
  ...props
}: React.ComponentProps<"main">) => (
  <main className={cx(inset, className)} data-slot="sidebar-inset" {...props} />
);

const SidebarInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    data-sidebar="input"
    data-slot="sidebar-input"
    style={{
      backgroundColor: "var(--background)",
      height: "2rem",
      width: "100%",
    }}
    {...props}
  />
);

const makeDiv =
  (slot: string, sidebar: string, klass: string) =>
  ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
      className={cx(klass, className)}
      data-sidebar={sidebar}
      data-slot={slot}
      {...props}
    />
  );

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
  ...props
}: React.ComponentProps<typeof Separator>) => (
  <Separator
    className={cx(separator, className)}
    data-sidebar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
);

const SidebarGroupAction = ({
  className,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    className={cx(menuAction, className)}
    data-sidebar="group-action"
    data-slot="sidebar-group-action"
    type="button"
    {...props}
  />
);

const SidebarMenu = ({ className, ...props }: React.ComponentProps<"ul">) => (
  <ul
    className={cx(menu, className)}
    data-sidebar="menu"
    data-slot="sidebar-menu"
    {...props}
  />
);

const SidebarMenuItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    className={cx(menuItem, className)}
    data-sidebar="menu-item"
    data-slot="sidebar-menu-item"
    {...props}
  />
);

const SidebarMenuButton = ({
  isActive = false,
  size = "default",
  tooltip,
  className,
  render,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  size?: "sm" | "default" | "lg";
  render?: useRender.RenderProp;
}) => {
  const { isMobile, state } = useSidebar();

  const element = useRender({
    props: {
      children,
      className: cx(
        menuButton({ size, state: isActive ? "active" : "default" }),
        className
      ),
      "data-active": isActive,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-slot": "sidebar-menu-button",
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
  ...props
}: React.ComponentProps<"button">) => (
  <button
    className={cx(menuAction, className)}
    data-sidebar="menu-action"
    data-slot="sidebar-menu-action"
    type="button"
    {...props}
  />
);

const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & { showIcon?: boolean }) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return (
    <div
      className={cx(menuSkeleton, className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          style={{
            borderRadius: "calc(var(--radius) - 2px)",
            height: "1rem",
            width: "1rem",
          }}
        />
      )}
      <Skeleton style={{ flex: 1, height: "1rem", maxWidth: width }} />
    </div>
  );
};

const SidebarMenuSub = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul
    className={cx(menuSub, className)}
    data-sidebar="menu-sub"
    data-slot="sidebar-menu-sub"
    {...props}
  />
);

const SidebarMenuSubItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    className={cx(menuSubItem, className)}
    data-sidebar="menu-sub-item"
    data-slot="sidebar-menu-sub-item"
    {...props}
  />
);

const SidebarMenuSubButton = ({
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  size?: "sm" | "md";
  isActive?: boolean;
}) => (
  <a
    className={cx(
      menuSubButton({ state: isActive ? "active" : "default" }),
      className
    )}
    data-active={isActive}
    data-sidebar="menu-sub-button"
    data-size={size}
    data-slot="sidebar-menu-sub-button"
    {...props}
  />
);

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
