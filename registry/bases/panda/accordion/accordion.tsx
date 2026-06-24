"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const item = css({
  borderBottomColor: "border",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
});

const header = css({
  display: "flex",
  margin: "0",
});

const trigger = css({
  _focusVisible: {
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  _hover: { textDecorationLine: "underline" },
  alignItems: "flex-start",
  backgroundColor: "transparent",
  borderRadius: "md",
  borderWidth: "0",
  color: "foreground",
  cursor: "pointer",
  display: "flex",
  flex: "1",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "4",
  justifyContent: "space-between",
  outlineStyle: "none",
  paddingBlock: "4",
  textAlign: "start",
  textDecorationLine: "none",
  transitionDuration: "150ms",
  transitionProperty: "all",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
});

const chevron = css({
  "[data-panel-open] &": { transform: "rotate(180deg)" },
  color: "muted.foreground",
  flexShrink: "0",
  height: "4",
  marginTop: "0.5",
  pointerEvents: "none",
  transitionDuration: "200ms",
  transitionProperty: "transform",
  transitionTimingFunction: "ease-in-out",
  width: "4",
});

const panel = css({
  fontSize: "0.875rem",
  overflow: "hidden",
  transitionDuration: "200ms",
  transitionProperty: "height",
  transitionTimingFunction: "ease-in-out",
});

const panelInner = css({
  paddingBottom: "4",
  paddingTop: "0",
});

const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => <AccordionPrimitive.Root data-slot="accordion" {...props} />;

const AccordionItem = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof AccordionPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <AccordionPrimitive.Item
    className={cx(item, className)}
    data-slot="accordion-item"
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof AccordionPrimitive.Trigger>,
  "className"
> & { className?: string }) => (
  <AccordionPrimitive.Header className={header}>
    <AccordionPrimitive.Trigger
      className={cx(trigger, className)}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <ChevronDownIcon className={chevron} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof AccordionPrimitive.Panel>, "className"> & {
  className?: string;
}) => (
  <AccordionPrimitive.Panel
    className={cx(panel, className)}
    data-slot="accordion-content"
    {...props}
  >
    <div className={panelInner}>{children}</div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
