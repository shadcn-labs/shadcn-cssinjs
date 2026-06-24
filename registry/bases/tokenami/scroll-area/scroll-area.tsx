"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--overflow": "hidden",
  "--position": "relative",
});

const viewport = css.compose({
  "--height": "var(---, 100%)",
  "--outline-style": "none",
  "--overscroll-behavior": "contain",
  "--width": "var(---, 100%)",
});

const scrollbar = css.compose({
  "--display": "flex",
  "--padding": "var(---, 1px)",
  "--touch-action": "none",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity)",
  "--transition-timing-function": "ease-in-out",
  "--user-select": "none",
  "--width": "var(---, 0.625rem)",
});

const thumb = css.compose({
  "--background-color": "var(--color_border)",
  "--border-radius": "var(---, 9999px)",
  "--flex": "var(---, 1)",
});

const ScrollArea = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ScrollAreaPrimitive.Root>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = root();
  const [vcn, vsx] = viewport();
  const [bcn, bsx] = scrollbar();
  const [tcn, tsx] = thumb();
  return (
    <ScrollAreaPrimitive.Root
      className={cn(className)}
      data-slot="scroll-area"
      style={sx(style)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={vcn()}
        data-slot="scroll-area-viewport"
        style={vsx()}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={bcn()}
        data-slot="scroll-area-scrollbar"
        orientation="vertical"
        style={bsx()}
      >
        <ScrollAreaPrimitive.Thumb
          className={tcn()}
          data-slot="scroll-area-thumb"
          style={tsx()}
        />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
};

export { ScrollArea };
