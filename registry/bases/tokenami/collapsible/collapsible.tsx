"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const trigger = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-width": "var(---, 0)",
  "--color": "inherit",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--font": "var(---, inherit)",
  "--gap": 1,
  "--outline-style": "none",
  "--padding": 0,
});

const panel = css.compose({
  "--overflow": "hidden",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, height)",
  "--transition-timing-function": "ease-in-out",
});

const Collapsible = (
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>
) => <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;

const CollapsibleTrigger = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof CollapsiblePrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = trigger();
  return (
    <CollapsiblePrimitive.Trigger
      className={cn(className)}
      data-slot="collapsible-trigger"
      style={sx(style)}
      {...props}
    />
  );
};

const CollapsibleContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof CollapsiblePrimitive.Panel>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = panel();
  return (
    <CollapsiblePrimitive.Panel
      className={cn(className)}
      data-slot="collapsible-content"
      style={sx(style)}
      {...props}
    />
  );
};

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
