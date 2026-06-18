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

import { useIsMobile } from "@/hooks/use-mobile";
import { cx, x } from "@/lib/utils";

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
import { s } from "./sidebar.stylex";

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

  const p = x(s.wrapper);

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delay={0}>
        <div
          data-slot="sidebar-wrapper"
          className={cx(p.className, className)}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...p.style,
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
  const inner = x(s.inner);

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cx(inner.className, className)}
        style={{ ...inner.style, width: "var(--sidebar-width)", ...style }}
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
          <div
            className={inner.className}
            style={{ ...inner.style, backgroundColor: "transparent" }}
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
    width = "0";
  } else if (collapsed && collapsible === "icon") {
    width = "var(--sidebar-width-icon)";
  }

  const gap = x(s.gap);
  const container = x(s.container);

  let offset: React.CSSProperties = {};
  if (offcanvas) {
    offset =
      side === "left"
        ? { transform: "translateX(-100%)" }
        : { transform: "translateX(100%)" };
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
        className={gap.className}
        data-slot="sidebar-gap"
        style={{ ...gap.style, width }}
      />
      <div
        className={cx(container.className, className)}
        data-slot="sidebar-container"
        style={{
          ...container.style,
          width,
          [side]: 0,
          ...offset,
          ...style,
        }}
        {...props}
      >
        <div
          className={inner.className}
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          style={inner.style}
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
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon-sm"
      variant="ghost"
      className={className}
      {...props}
    >
      <PanelLeftIcon size={16} />
    </Button>
  );
};

const SidebarRail = (props: React.ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar();
  const p = x(s.rail);
  return (
    <button
      aria-label="Toggle Sidebar"
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle Sidebar"
      type="button"
      className={p.className}
      style={p.style}
      {...props}
    />
  );
};

const SidebarInset = ({
  className,
  style,
  ...props
}: React.ComponentProps<"main">) => {
  const p = x(s.inset);
  return (
    <main
      data-slot="sidebar-inset"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
  (slot: string, sidebar: string, style: Parameters<typeof x>[0]) =>
  ({ className, style: styleProp, ...props }: React.ComponentProps<"div">) => {
    const p = x(style);
    return (
      <div
        data-sidebar={sidebar}
        data-slot={slot}
        className={cx(p.className, className)}
        style={{ ...p.style, ...styleProp }}
        {...props}
      />
    );
  };

const SidebarHeader = makeDiv("sidebar-header", "header", s.header);
const SidebarFooter = makeDiv("sidebar-footer", "footer", s.footer);
const SidebarContent = makeDiv("sidebar-content", "content", s.content);
const SidebarGroup = makeDiv("sidebar-group", "group", s.group);
const SidebarGroupLabel = makeDiv(
  "sidebar-group-label",
  "group-label",
  s.groupLabel
);
const SidebarGroupContent = makeDiv(
  "sidebar-group-content",
  "group-content",
  s.groupContent
);

const SidebarSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Separator>) => {
  const p = x(s.separator);
  return (
    <Separator
      data-sidebar="separator"
      data-slot="sidebar-separator"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SidebarGroupAction = ({
  className,
  style,
  ...props
}: React.ComponentProps<"button">) => {
  const p = x(s.menuAction);
  return (
    <button
      type="button"
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SidebarMenu = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ul">) => {
  const p = x(s.menu);
  return (
    <ul
      data-sidebar="menu"
      data-slot="sidebar-menu"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SidebarMenuItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => {
  const p = x(s.menuItem);
  return (
    <li
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
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
}: Omit<React.ComponentProps<"button">, "className"> & {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  size?: "sm" | "default" | "lg";
  className?: string;
  render?: useRender.RenderProp;
}) => {
  const { isMobile, state } = useSidebar();
  const p = x(
    s.menuButton,
    size === "sm" && s.menuButtonSm,
    size === "lg" && s.menuButtonLg,
    isActive && s.menuButtonActive
  );

  const element = useRender({
    props: {
      children,
      className: cx(p.className, className),
      "data-active": isActive,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-slot": "sidebar-menu-button",
      style: { ...p.style, ...style },
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
}: React.ComponentProps<"button">) => {
  const p = x(s.menuAction);
  return (
    <button
      type="button"
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SidebarMenuBadge = makeDiv(
  "sidebar-menu-badge",
  "menu-badge",
  s.menuBadge
);

const SidebarMenuSkeleton = ({
  className,
  style,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & { showIcon?: boolean }) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  const p = x(s.menuSkeleton);
  return (
    <div
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
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
  style,
  ...props
}: React.ComponentProps<"ul">) => {
  const p = x(s.menuSub);
  return (
    <ul
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const SidebarMenuSubItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => {
  const p = x(s.menuSubItem);
  return (
    <li
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
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
}: React.ComponentProps<"a"> & {
  size?: "sm" | "md";
  isActive?: boolean;
}) => {
  const p = x(s.menuSubButton, isActive && s.menuSubButtonActive);
  return (
    <a
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-slot="sidebar-menu-sub-button"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
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
