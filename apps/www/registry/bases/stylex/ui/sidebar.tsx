"use client";

import { useRender } from "@base-ui/react";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
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
import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Separator } from "@/registry/bases/stylex/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/stylex/ui/sheet";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/bases/stylex/ui/tooltip";

const s = stylex.create({
  container: {
    bottom: 0,
    display: "flex",
    height: "100svh",
    position: "fixed",
    top: 0,
    transition:
      "left 0.2s ease-in-out, right 0.2s ease-in-out, width 0.2s ease-in-out",
    zIndex: 10,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.5rem",
    minHeight: 0,
    overflow: "auto",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0.5rem",
  },
  gap: {
    backgroundColor: "transparent",
    position: "relative",
    transition: "width 0.2s ease-in-out",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: "0.5rem",
    position: "relative",
    width: "100%",
  },
  groupContent: {
    fontSize: "0.875rem",
    width: "100%",
  },
  groupLabel: {
    alignItems: "center",
    borderRadius: radius.md,
    color: `color-mix(in oklab, ${colors.sidebarForeground} 70%, transparent)`,
    display: "flex",
    flexShrink: 0,
    fontSize: "0.75rem",
    fontWeight: 500,
    height: "2rem",
    outline: "none",
    paddingInline: "0.5rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0.5rem",
  },
  inner: {
    backgroundColor: colors.sidebar,
    color: colors.sidebarForeground,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  inset: {
    backgroundColor: colors.background,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    position: "relative",
    width: "100%",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    minWidth: 0,
    padding: 0,
    width: "100%",
  },
  menuAction: {
    alignItems: "center",
    aspectRatio: "1",
    backgroundColor: { ":hover": colors.sidebarAccent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: colors.sidebarForeground,
    cursor: "pointer",
    display: "flex",
    insetInlineEnd: "0.25rem",
    justifyContent: "center",
    outline: "none",
    padding: 0,
    position: "absolute",
    top: "0.375rem",
    width: "1.25rem",
  },
  menuBadge: {
    alignItems: "center",
    borderRadius: radius.md,
    color: colors.sidebarForeground,
    display: "flex",
    fontSize: "0.75rem",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 500,
    height: "1.25rem",
    insetInlineEnd: "0.25rem",
    justifyContent: "center",
    minWidth: "1.25rem",
    paddingInline: "0.25rem",
    pointerEvents: "none",
    position: "absolute",
    top: "0.375rem",
    userSelect: "none",
  },
  menuButton: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.sidebarAccent, default: "transparent" },
    borderRadius: radius.md,
    borderWidth: 0,
    color: {
      ":hover": colors.sidebarAccentForeground,
      default: colors.sidebarForeground,
    },
    cursor: "pointer",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 400,
    gap: "0.5rem",
    outline: "none",
    overflow: "hidden",
    padding: "0.5rem",
    textAlign: "start",
    transition: "background-color 0.1s ease, color 0.1s ease",
    width: "100%",
  },
  menuButtonActive: {
    backgroundColor: colors.sidebarAccent,
    color: colors.sidebarAccentForeground,
    fontWeight: 500,
  },
  menuButtonLg: { height: "3rem" },
  menuButtonSm: { fontSize: "0.75rem", height: "1.75rem" },
  menuItem: {
    position: "relative",
  },
  menuSkeleton: {
    alignItems: "center",
    borderRadius: radius.md,
    display: "flex",
    gap: "0.5rem",
    height: "2rem",
    paddingInline: "0.5rem",
  },
  menuSub: {
    borderInlineStartColor: colors.sidebarBorder,
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: "1px",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    listStyle: "none",
    marginInlineStart: "0.875rem",
    minWidth: 0,
    paddingBottom: "0.125rem",
    paddingInlineStart: "0.625rem",
    paddingTop: "0.125rem",
  },
  menuSubButton: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.sidebarAccent, default: "transparent" },
    borderRadius: radius.md,
    color: {
      ":hover": colors.sidebarAccentForeground,
      default: colors.sidebarForeground,
    },
    cursor: "pointer",
    display: "flex",
    gap: "0.5rem",
    height: "1.75rem",
    minWidth: 0,
    outline: "none",
    overflow: "hidden",
    paddingInline: "0.5rem",
    textDecorationLine: "none",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  menuSubButtonActive: {
    backgroundColor: colors.sidebarAccent,
    color: colors.sidebarAccentForeground,
  },
  menuSubItem: {
    position: "relative",
  },
  rail: {
    background: "transparent",
    borderWidth: 0,
    cursor: "ew-resize",
    insetBlock: 0,
    position: "absolute",
    width: "1rem",
    zIndex: 20,
  },
  separator: {
    backgroundColor: colors.sidebarBorder,
    marginInline: "0.5rem",
    width: "auto",
  },
  wrapper: {
    display: "flex",
    minHeight: "100svh",
    width: "100%",
  },
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
          data-slot="sidebar-wrapper"
          {...stylex.props(
            s.wrapper,
            customClassName(className),
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            } as StyleXStyles,
            style as StyleXStyles
          )}
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
  const inner = stylex.props(s.inner);

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        {...stylex.props(
          s.inner,
          customClassName(className),
          { width: "var(--sidebar-width)" } as StyleXStyles,
          style as StyleXStyles
        )}
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

  const gap = stylex.props(s.gap);
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
        {...stylex.props(
          s.container,
          customClassName(className),
          { width, [side]: 0, ...offset } as StyleXStyles,
          style as StyleXStyles
        )}
        data-slot="sidebar-container"
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
  const p = stylex.props(s.rail);
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
}: React.ComponentProps<"main">) => (
  <main
    data-slot="sidebar-inset"
    {...stylex.props(
      s.inset,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
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
  (slot: string, sidebar: string, style: StyleXStyles) =>
  ({ className, style: styleProp, ...props }: React.ComponentProps<"div">) => (
    <div
      data-sidebar={sidebar}
      data-slot={slot}
      {...stylex.props(
        style,
        customClassName(className),
        styleProp as StyleXStyles
      )}
      {...props}
    />
  );

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
}: React.ComponentProps<typeof Separator>) => (
  <Separator
    data-sidebar="separator"
    data-slot="sidebar-separator"
    {...stylex.props(
      s.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SidebarGroupAction = ({
  className,
  style,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    type="button"
    data-sidebar="group-action"
    data-slot="sidebar-group-action"
    {...stylex.props(
      s.menuAction,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SidebarMenu = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul
    data-sidebar="menu"
    data-slot="sidebar-menu"
    {...stylex.props(s.menu, customClassName(className), style as StyleXStyles)}
    {...props}
  />
);

const SidebarMenuItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    data-sidebar="menu-item"
    data-slot="sidebar-menu-item"
    {...stylex.props(
      s.menuItem,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
  const element = useRender({
    props: {
      ...stylex.props(
        s.menuButton,
        size === "sm" && s.menuButtonSm,
        size === "lg" && s.menuButtonLg,
        isActive && s.menuButtonActive,
        customClassName(className),
        style as StyleXStyles
      ),
      children,
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
  style,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    type="button"
    data-sidebar="menu-action"
    data-slot="sidebar-menu-action"
    {...stylex.props(
      s.menuAction,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
  return (
    <div
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...stylex.props(
        s.menuSkeleton,
        customClassName(className),
        style as StyleXStyles
      )}
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
}: React.ComponentProps<"ul">) => (
  <ul
    data-sidebar="menu-sub"
    data-slot="sidebar-menu-sub"
    {...stylex.props(
      s.menuSub,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SidebarMenuSubItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    data-sidebar="menu-sub-item"
    data-slot="sidebar-menu-sub-item"
    {...stylex.props(
      s.menuSubItem,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const SidebarMenuSubButton = ({
  size = "md",
  isActive = false,
  className,
  style,
  ...props
}: React.ComponentProps<"a"> & {
  size?: "sm" | "md";
  isActive?: boolean;
}) => (
  <a
    data-active={isActive}
    data-sidebar="menu-sub-button"
    data-size={size}
    data-slot="sidebar-menu-sub-button"
    {...stylex.props(
      s.menuSubButton,
      isActive && s.menuSubButtonActive,
      customClassName(className),
      style as StyleXStyles
    )}
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
