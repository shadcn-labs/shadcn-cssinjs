"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { css, cx } from "styled-system/css";

const trigger = css({
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: "0",
  color: "inherit",
  cursor: "pointer",
  display: "inline-flex",
  font: "inherit",
  gap: "1",
  outlineStyle: "none",
  padding: "0",
});

const panel = css({
  overflow: "hidden",
  transitionDuration: "200ms",
  transitionProperty: "height",
  transitionTimingFunction: "ease-in-out",
});

const Collapsible = (
  props: React.ComponentProps<typeof CollapsiblePrimitive.Root>
) => <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;

const CollapsibleTrigger = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Trigger>,
  "className"
> & { className?: string }) => (
  <CollapsiblePrimitive.Trigger
    className={cx(trigger, className)}
    data-slot="collapsible-trigger"
    {...props}
  />
);

const CollapsibleContent = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Panel>,
  "className"
> & { className?: string }) => (
  <CollapsiblePrimitive.Panel
    className={cx(panel, className)}
    data-slot="collapsible-content"
    {...props}
  />
);

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
