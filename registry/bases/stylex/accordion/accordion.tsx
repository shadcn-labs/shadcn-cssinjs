"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./accordion.stylex";

const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => <AccordionPrimitive.Root data-slot="accordion" {...props} />;

const AccordionItem = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AccordionPrimitive.Item>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.item);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof AccordionPrimitive.Trigger>,
  "className"
> & { className?: string }) => {
  const header = x(styles.header);
  const trigger = x(styles.trigger);
  return (
    <AccordionPrimitive.Header
      className={header.className}
      style={header.style}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cx(trigger.className, className)}
        style={{ ...trigger.style, ...style }}
        render={(renderProps, state) => (
          <button type="button" {...renderProps}>
            {children}
            <ChevronDownIcon
              {...x(styles.chevron, state.open && styles.chevronOpen)}
            />
          </button>
        )}
        {...props}
      />
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof AccordionPrimitive.Panel>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.panel);
  const inner = x(styles.panelInner);
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    >
      <div className={inner.className} style={inner.style}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
