"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

import { cx, x } from "@/lib/utils";

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
  const p = x(styles.trigger);
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cx(p.className, className)}
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
  const p = x(styles.panel);
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
