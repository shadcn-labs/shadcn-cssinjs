"use client";

import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

import { Button } from "../button/button";
import type { ButtonProps } from "../button/button";

const root = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--display": "flex",
  "--flex-wrap": "wrap",
  "--focus-within_border-color": "var(--color_ring)",
  "--focus-within_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--min-width": "var(---, 0)",
  "--outline-style": "none",
  "--position": "relative",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
});

const addonBase = css.compose({
  "--align-items": "center",
  "--color": "var(--color_muted-foreground)",
  "--cursor": "text",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--justify-content": "center",
  "--padding-block": 1.5,
  "--user-select": "none",

  variants: {
    align: {
      "block-end": {
        "--justify-content": "flex-start",
        "--order": "var(---, 1)",
        "--padding-bottom": 3,
        "--padding-inline": 3,
        "--width": "var(---, 100%)",
      },
      "block-start": {
        "--justify-content": "flex-start",
        "--order": "var(---, -1)",
        "--padding-inline": 3,
        "--padding-top": 3,
        "--width": "var(---, 100%)",
      },
      "inline-end": { "--order": "var(---, 1)", "--padding-inline-end": 3 },
      "inline-start": {
        "--order": "var(---, -1)",
        "--padding-inline-start": 3,
      },
    },
  },
});

const button = css.compose({
  "--box-shadow": "var(---, none)",
  "--gap": 1.5,
});

const text = css.compose({
  "--align-items": "center",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
});

const control = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(---, 0)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "auto",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--flex": "var(---, 1)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
  "--min-width": "var(---, 0)",
  "--outline-style": "none",
  "--padding-block": 2,
  "--padding-inline": 2,
  "--placeholder_color": "var(--color_muted-foreground)",
  "--selection_background-color": "var(--color_primary)",
  "--selection_color": "var(--color_primary-foreground)",
});

const textarea = css.compose({
  "--padding-block": 3,
  "--resize": "none",
  "--width": "var(---, 100%)",
});

type InputGroupAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

const InputGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = root();
  return (
    <div
      className={cn(className)}
      data-slot="input-group"
      role="group"
      style={sx(style)}
      {...props}
    />
  );
};

const InputGroupAddon = ({
  className,
  style,
  align = "inline-start",
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  align?: InputGroupAlign;
}) => {
  const [cn, sx] = addonBase({ align });
  return (
    // oxlint-disable-next-line click-events-have-key-events no-static-element-interactions
    <div
      className={cn(className)}
      data-align={align}
      data-slot="input-group-addon"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      style={sx(style)}
      {...props}
    />
  );
};

type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm";

const buttonSizeMap: Record<InputGroupButtonSize, ButtonProps["size"]> = {
  "icon-sm": "icon-sm",
  "icon-xs": "icon-sm",
  sm: "sm",
  xs: "sm",
};

const InputGroupButton = ({
  className,
  style,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<ButtonProps, "size"> & { size?: InputGroupButtonSize }) => {
  const [cn, sx] = button();
  return (
    <Button
      className={cn(className)}
      data-size={size}
      size={buttonSizeMap[size]}
      style={sx(style)}
      type={type}
      variant={variant}
      {...props}
    />
  );
};

const InputGroupText = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = text();
  return <span className={cn(className)} style={sx(style)} {...props} />;
};

const InputGroupInput = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"input">>) => {
  const [cn, sx] = control();
  return (
    <input
      className={cn(className)}
      data-slot="input-group-control"
      style={sx(style)}
      {...props}
    />
  );
};

const InputGroupTextarea = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"textarea">>) => {
  const [ccn, csx] = control();
  const [tcn, tsx] = textarea();
  return (
    <textarea
      className={ccn(tcn(className))}
      data-slot="input-group-control"
      style={csx(tsx(style))}
      {...props}
    />
  );
};

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
