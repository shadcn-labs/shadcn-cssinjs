"use client";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  trigger: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
  },
});

export type CollapsibleProps = Omit<
  CollapsiblePrimitive.Root.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const Collapsible = ({ className, style, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root
    data-slot="collapsible"
    {...stylex.props(customClassName(className), style)}
    {...props}
  />
);

export type CollapsibleTriggerProps = Omit<
  CollapsiblePrimitive.Trigger.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const CollapsibleTrigger = ({
  className,
  style,
  ...props
}: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.Trigger
    data-slot="collapsible-trigger"
    {...stylex.props(styles.trigger, customClassName(className), style)}
    {...props}
  />
);

export type CollapsibleContentProps = Omit<
  CollapsiblePrimitive.Panel.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const CollapsibleContent = ({
  className,
  style,
  ...props
}: CollapsibleContentProps) => (
  <CollapsiblePrimitive.Panel
    data-slot="collapsible-content"
    {...stylex.props(customClassName(className), style)}
    {...props}
  />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
