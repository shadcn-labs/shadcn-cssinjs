"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  panel: {
    overflow: "hidden",
    transition: "height 0.2s ease-in-out",
  },
  trigger: {
    alignItems: "center",
    background: "none",
    borderWidth: 0,
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    font: "inherit",
    gap: "0.25rem",
    outline: "none",
    padding: 0,
  },
});

const Collapsible = (
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>
) => <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;

const CollapsibleTrigger = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Trigger>,
  "className"
> & { className?: string }) => (
  <CollapsiblePrimitive.Trigger
    data-slot="collapsible-trigger"
    {...stylex.props(
      styles.trigger,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const CollapsibleContent = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Panel>,
  "className"
> & { className?: string }) => (
  <CollapsiblePrimitive.Panel
    data-slot="collapsible-content"
    {...stylex.props(
      styles.panel,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
