"use client";

import type { TokenamiStyle } from "@tokenami/css";
import { SearchIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { css } from "@/lib/tokenami";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../dialog/dialog";

const command = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-radius": "var(--radii_md)",
  "--color": "var(--color_popover-foreground)",
  "--display": "flex",
  "--flex-direction": "column",
  "--height": "var(---, 100%)",
  "--overflow": "hidden",
  "--width": "var(---, 100%)",
});

const srOnly = css.compose({
  "--border-width": "var(---, 0)",
  "--clip": "var(---, rect(0, 0, 0, 0))",
  "--height": "var(---, 1px)",
  "--margin": "var(---, -1px)",
  "--overflow": "hidden",
  "--padding": 0,
  "--position": "absolute",
  "--white-space": "nowrap",
  "--width": "var(---, 1px)",
});

const inputWrapper = css.compose({
  "--align-items": "center",
  "--border-bottom-color": "var(--color_border)",
  "--border-bottom-style": "solid",
  "--border-bottom-width": "var(---, 1px)",
  "--display": "flex",
  "--gap": 2,
  "--height": 12,
  "--padding-inline": 3,
});

const inputIcon = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--flex-shrink": "var(---, 0)",
  "--height": 4,
  "--opacity": 0.5,
  "--width": 4,
});

const input = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--font-size": "0.875rem",
  "--height": 12,
  "--outline-style": "none",
  "--padding-block": 3,
  "--placeholder_color": "var(--color_muted-foreground)",
  "--width": "var(---, 100%)",
});

const list = css.compose({
  "--max-height": "var(---, 300px)",
  "--overflow-x": "hidden",
  "--overflow-y": "auto",
  "--scroll-padding-block": "var(---, 0.25rem)",
});

const empty = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--padding-block": 6,
  "--text-align": "center",
});

const group = css.compose({
  "--color": "var(--color_foreground)",
  "--overflow": "hidden",
  "--padding": 1,
});

const groupHeading = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--font-weight": 500,
  "--padding-block": 1.5,
  "--padding-inline": 2,
});

const separator = css.compose({
  "--background-color": "var(--color_border)",
  "--height": "var(---, 1px)",
  "--margin-inline": -1,
});

const item = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(---, 0.125rem)",
  "--color": "var(---, inherit)",
  "--cursor": "default",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline": 2,
  "--position": "relative",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",
  "--user-select": "none",
});

const shortcut = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--letter-spacing": "var(---, 0.05em)",
  "--margin-inline-start": "var(---, auto)",
});

interface CommandContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const CommandContext = createContext<CommandContextValue | null>(null);

const useCommandContext = () => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("Command components must be used within Command");
  }
  return context;
};

const Command = ({
  className,
  style,
  value: valueProp,
  onValueChange: onValueChangeProp,
  children,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"div">, "onChange" | "style">> & {
  value?: string;
  onValueChange?: (value: string) => void;
}) => {
  const [internalValue, setInternalValue] = useState("");
  const value = valueProp ?? internalValue;
  const onValueChange = useCallback(
    (v: string) => {
      setInternalValue(v);
      onValueChangeProp?.(v);
    },
    [onValueChangeProp]
  );
  const contextValue = useMemo(
    () => ({ onValueChange, value }),
    [value, onValueChange]
  );
  const [cn, sx] = command();
  return (
    <CommandContext.Provider value={contextValue}>
      <div
        className={cn(className)}
        data-slot="command"
        role="combobox"
        style={sx(style)}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
};

const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  children?: React.ReactNode;
}) => {
  const [scn] = srOnly();
  return (
    <Dialog {...props}>
      <DialogHeader className={scn()}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        showCloseButton={showCloseButton}
        style={{ "--overflow": "hidden", "--padding": 0 }}
      >
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = ({
  className,
  style,
  value,
  onValueChange,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"input">, "onChange" | "style">> & {
  onValueChange?: (value: string) => void;
}) => {
  const [wcn, wsx] = inputWrapper();
  const [icn, isx] = inputIcon();
  const [cn, sx] = input();
  const { value: ctxValue, onValueChange: ctxChange } = useCommandContext();
  return (
    <div className={wcn()} data-slot="command-input-wrapper" style={wsx()}>
      <SearchIcon className={icn()} style={isx()} />
      <input
        className={cn(className)}
        data-slot="command-input"
        onChange={(e) => {
          ctxChange(e.target.value);
          onValueChange?.(e.target.value);
        }}
        style={sx(style)}
        value={value ?? ctxValue}
        {...props}
      />
    </div>
  );
};

const CommandList = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = list();
  return (
    <div
      className={cn(className)}
      data-slot="command-list"
      role="listbox"
      style={sx(style)}
      {...props}
    />
  );
};

const CommandEmpty = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = empty();
  return (
    <div
      className={cn(className)}
      data-slot="command-empty"
      style={sx(style)}
      {...props}
    />
  );
};

const CommandGroup = ({
  className,
  style,
  heading,
  children,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & { heading?: string }) => {
  const [cn, sx] = group();
  const [hcn, hsx] = groupHeading();
  return (
    <div
      className={cn(className)}
      data-slot="command-group"
      role="group"
      style={sx(style)}
      {...props}
    >
      {heading && (
        <div className={hcn()} style={hsx()}>
          {heading}
        </div>
      )}
      {children}
    </div>
  );
};

const CommandSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = separator();
  return (
    <div
      className={cn(className)}
      data-slot="command-separator"
      role="separator"
      style={sx(style)}
      {...props}
    />
  );
};

const CommandItem = ({
  className,
  style,
  onSelect,
  children,
  value,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  onSelect?: (value: string) => void;
  keywords?: string[];
  value?: string;
}) => {
  const [cn, sx] = item();
  return (
    // oxlint-disable-next-line click-events-have-key-events no-static-element-interactions
    <div
      className={cn(className)}
      data-slot="command-item"
      onClick={() => onSelect?.(value ?? (children as string))}
      role="option"
      style={sx(style)}
      {...props}
    >
      {children}
    </div>
  );
};

const CommandShortcut = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = shortcut();
  return (
    <span
      className={cn(className)}
      data-slot="command-shortcut"
      style={sx(style)}
      {...props}
    />
  );
};

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
