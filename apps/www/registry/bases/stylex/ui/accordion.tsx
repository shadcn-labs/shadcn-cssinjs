"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  chevron: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transform: "translateY(0.125rem)",
    transition: "transform 0.2s ease-in-out",
    width: "1rem",
  },
  chevronOpen: {
    transform: "translateY(0.125rem) rotate(180deg)",
  },
  content: {
    paddingBottom: "1rem",
    paddingTop: 0,
  },
  header: {
    display: "flex",
    margin: 0,
  },
  item: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: { ":last-child": 0, default: "1px" },
  },
  panel: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    overflow: "hidden",
    transition: "height 0.2s ease-in-out",
  },
  trigger: {
    alignItems: "flex-start",
    backgroundColor: "transparent",
    borderRadius: radius.md,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    display: "flex",
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "1rem",
    justifyContent: "space-between",
    lineHeight: "1.25rem",
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "1rem",
    paddingTop: "1rem",
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
                styles.chevron,
                state.open && styles.chevronOpen
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
    {...stylex.props(styles.panel)}
    {...props}
  >
    <div
      {...stylex.props(
        styles.content,
        customClassName(className),
        style as StyleXStyles
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
