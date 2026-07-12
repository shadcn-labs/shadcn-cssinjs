"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

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
  const p = stylex.props(styles.item);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const header = stylex.props(styles.header);
  const trigger = stylex.props(styles.trigger);
  return (
    <AccordionPrimitive.Header
      className={header.className}
      style={header.style}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={
          [trigger.className, className].filter(Boolean).join(" ") || undefined
        }
        style={{ ...trigger.style, ...style }}
        render={(renderProps, state) => (
          <button type="button" {...renderProps}>
            {children}
            <ChevronDownIcon
              {...stylex.props(
                styles.chevronDown,
                state.open && styles.chevronDownOpen
              )}
            />
            <ChevronUpIcon
              {...stylex.props(
                styles.chevronUp,
                state.open && styles.chevronUpOpen
              )}
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
  const p = stylex.props(styles.panel);
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children}
    </AccordionPrimitive.Panel>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
