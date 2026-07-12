"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./collapsible.stylex";

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
> & { className?: string }) => {
  const p = stylex.props(styles.trigger);
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const CollapsibleContent = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof CollapsiblePrimitive.Panel>,
  "className"
> & { className?: string }) => {
  const p = stylex.props(styles.panel);
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
