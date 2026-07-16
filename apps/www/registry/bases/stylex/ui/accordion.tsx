"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  chevronDown: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronDownOpen: {
    display: "none",
  },
  chevronUp: {
    color: colors.mutedForeground,
    display: "none",
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronUpOpen: {
    display: "block",
  },
  header: {
    display: "flex",
    margin: 0,
  },
  item: {
    ":last-child": {
      borderBottomColor: "transparent",
    },
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
  },
  panel: {
    fontSize: "0.875rem",
    overflow: "hidden",
    paddingBottom: "0.625rem",
    paddingTop: 0,
  },
  trigger: {
    ":focus-visible": {
      borderColor: colors.ring,
      boxShadow: `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
    },
    alignItems: "flex-start",
    background: "none",
    borderRadius: radius.md,
    borderWidth: "1px",
    color: colors.foreground,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "1rem",
    justifyContent: "space-between",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "0.625rem",
    paddingTop: "0.625rem",
    pointerEvents: { ":disabled": "none", default: null },
    textAlign: "start",
    textDecorationLine: { ":hover": "underline", default: "none" },
    transition: "all 0.15s ease-in-out",
    width: "100%",
  },
});

const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => <AccordionPrimitive.Root data-slot="accordion" {...props} />;

const AccordionItem = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof AccordionPrimitive.Item>, "className"> & {
  className?: string;
}) => (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    {...stylex.props(
      styles.item,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

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
  return (
    <AccordionPrimitive.Header
      className={header.className}
      style={header.style}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        {...stylex.props(
          styles.trigger,
          customClassName(className),
          style as StyleXStyles
        )}
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
}) => (
  <AccordionPrimitive.Panel
    data-slot="accordion-content"
    {...stylex.props(
      styles.panel,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
