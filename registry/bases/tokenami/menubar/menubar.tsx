"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const bar = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--display": "flex",
  "--gap": 1,
  "--height": 9,
  "--padding": 1,
});

const trigger = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "default",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--hover_background-color": "var(--color_accent)",
  "--outline-style": "none",
  "--padding-block": 1,
  "--padding-inline": 3,
  "--user-select": "none",
});

const item = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_sm)",
  "--color": "var(--color_popover-foreground)",
  "--cursor": "default",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--highlighted_background-color": "var(--color_accent)",
  "--highlighted_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline": 2,
  "--position": "relative",
  "--user-select": "none",

  variants: {
    indent: {
      inset: { "--padding-inline-start": 8 },
      none: {},
    },
  },
});

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
  "--min-width": 48,
  "--opacity": 1,
  "--outline-style": "none",
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

const icon = css.compose({
  "--height": 4,
  "--width": 4,
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
});

const Menubar = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenubarPrimitive>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = bar();
  return (
    <MenubarPrimitive
      className={cn(className)}
      data-slot="menubar"
      style={sx(style)}
      {...props}
    />
  );
};

const MenubarMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;

const MenubarGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="menubar-group" {...props} />;

const MenubarRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;

const MenubarSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="menubar-sub" {...props} />;

const MenubarTrigger = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = trigger();
  return (
    <MenuPrimitive.Trigger
      className={cn(className)}
      data-slot="menubar-trigger"
      style={sx(style)}
      {...props}
    />
  );
};

const MenubarContent = ({
  className,
  style,
  sideOffset = 6,
  align = "start",
  children,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className" | "style">
> & {
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) => {
  const [cn, sx] = popup();
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        side="bottom"
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={cn(className)}
          data-slot="menubar-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

const MenubarItem = ({
  className,
  style,
  inset,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className" | "style">
> & { className?: string; inset?: boolean }) => {
  const [cn, sx] = item({ indent: inset ? "inset" : "none" });
  return (
    <MenuPrimitive.Item
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="menubar-item"
      style={sx(style)}
      {...props}
    />
  );
};

const MenubarCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset" });
  const [wcn, wsx] = indicatorWrap();
  const [icn, isx] = icon();
  return (
    <MenuPrimitive.CheckboxItem
      className={cn(className)}
      data-slot="menubar-checkbox-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icn()} style={isx()} />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

const MenubarRadioItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.RadioItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset" });
  const [wcn, wsx] = indicatorWrap();
  return (
    <MenuPrimitive.RadioItem
      className={cn(className)}
      data-slot="menubar-radio-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <MenuPrimitive.RadioItemIndicator>
          <CircleIcon
            style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

const MenubarSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
    "className" | "style"
  >
> & { className?: string; inset?: boolean }) => {
  const [cn, sx] = item({ indent: inset ? "inset" : "none" });
  const [icn, isx] = icon();
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="menubar-sub-trigger"
      style={sx(style)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icn()}
        style={isx({ "--margin-inline-start": "var(---, auto)" })}
      />
    </MenuPrimitive.SubmenuTrigger>
  );
};

const MenubarSubContent = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = popup();
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner align="start" side="right" sideOffset={2}>
        <MenuPrimitive.Popup
          className={cn(className)}
          data-slot="menubar-sub-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

const MenubarSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.Separator>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = separator();
  return (
    <MenuPrimitive.Separator
      className={cn(className)}
      data-slot="menubar-separator"
      style={sx(style)}
      {...props}
    />
  );
};

const MenubarShortcut = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = shortcut();
  return (
    <span
      className={cn(className)}
      data-slot="menubar-shortcut"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
