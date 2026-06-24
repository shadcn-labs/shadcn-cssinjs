"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const popup = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_popover-foreground)",
  "--ending_opacity": 0,
  "--ending_transform": "var(---, scale(0.95))",
  "--min-width": 32,
  "--opacity": 1,
  "--outline-style": "none",
  "--overflow-x": "hidden",
  "--overflow-y": "auto",
  "--padding": 1,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--transform": "var(---, scale(1))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const item = css.compose({
  "--align-items": "center",
  "--border-radius": "var(---, 0.125rem)",
  "--cursor": "default",
  "--disabled_opacity": 0.5,
  "--disabled_pointer-events": "none",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--highlighted_background-color": "var(--color_accent)",
  "--highlighted_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline": 2,
  "--position": "relative",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",
  "--user-select": "none",

  variants: {
    indent: {
      inset: { "--padding-inline-start": 8 },
      none: {},
    },
    variant: {
      default: {},
      destructive: {
        "--color": "var(--color_destructive)",
        "--highlighted_background-color":
          "var(---, color-mix(in oklab, var(--color_destructive) 10%, transparent))",
        "--highlighted_color": "var(--color_destructive)",
      },
    },
  },
});

const indicatorWrap = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 3.5,
  "--inset-inline-start": 2,
  "--justify-content": "center",
  "--pointer-events": "none",
  "--position": "absolute",
  "--width": 3.5,
});

const icon = css.compose({
  "--height": 4,
  "--width": 4,
});

const label = css.compose({
  "--color": "var(--color_foreground)",
  "--font-size": "0.875rem",
  "--font-weight": 600,
  "--padding-block": 1.5,
  "--padding-inline": 2,

  variants: {
    indent: {
      inset: { "--padding-inline-start": 8 },
      none: {},
    },
  },
});

const separator = css.compose({
  "--background-color": "var(--color_border)",
  "--height": "var(---, 1px)",
  "--margin-block": 1,
  "--margin-inline": -1,
});

const shortcut = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--letter-spacing": "var(---, 0.05em)",
  "--margin-inline-start": "var(---, auto)",
  "--opacity": 0.6,
});

const ContextMenu = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Root>
) => <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;

const ContextMenuTrigger = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>
) => (
  <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
);

const ContextMenuGroup = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Group>
) => <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;

const ContextMenuRadioGroup = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>
) => (
  <ContextMenuPrimitive.RadioGroup
    data-slot="context-menu-radio-group"
    {...props}
  />
);

const ContextMenuSub = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>
) => (
  <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
);

const ContextMenuContent = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.Popup>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = popup();
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner>
        <ContextMenuPrimitive.Popup
          className={cn(className)}
          data-slot="context-menu-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </ContextMenuPrimitive.Popup>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};

const ContextMenuItem = ({
  className,
  style,
  inset,
  variant = "default",
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.Item>,
    "className" | "style"
  >
> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => {
  const [cn, sx] = item({ indent: inset ? "inset" : "none", variant });
  return (
    <ContextMenuPrimitive.Item
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="context-menu-item"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

const ContextMenuCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset", variant: "default" });
  const [wcn, wsx] = indicatorWrap();
  const [icn, isx] = icon();
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(className)}
      data-slot="context-menu-checkbox-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icn()} style={isx()} />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

const ContextMenuRadioItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset", variant: "default" });
  const [wcn, wsx] = indicatorWrap();
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(className)}
      data-slot="context-menu-radio-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <ContextMenuPrimitive.RadioItemIndicator>
          <CircleIcon
            style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
          />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

const ContextMenuLabel = ({
  className,
  style,
  inset,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & { inset?: boolean }) => {
  const [cn, sx] = label({ indent: inset ? "inset" : "none" });
  return (
    <div
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="context-menu-label"
      style={sx(style)}
      {...props}
    />
  );
};

const ContextMenuSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.Separator>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = separator();
  return (
    <ContextMenuPrimitive.Separator
      className={cn(className)}
      data-slot="context-menu-separator"
      style={sx(style)}
      {...props}
    />
  );
};

const ContextMenuShortcut = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = shortcut();
  return (
    <span
      className={cn(className)}
      data-slot="context-menu-shortcut"
      style={sx(style)}
      {...props}
    />
  );
};

const ContextMenuSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>,
    "className" | "style"
  >
> & { className?: string; inset?: boolean }) => {
  const [cn, sx] = item({
    indent: inset ? "inset" : "none",
    variant: "default",
  });
  const [icn, isx] = icon();
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="context-menu-sub-trigger"
      style={sx(style)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icn()}
        style={isx({ "--margin-inline-start": "var(---, auto)" })}
      />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};

const ContextMenuSubContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ContextMenuPrimitive.Popup>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = popup();
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner>
        <ContextMenuPrimitive.Popup
          className={cn(className)}
          data-slot="context-menu-sub-content"
          style={sx(style)}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
