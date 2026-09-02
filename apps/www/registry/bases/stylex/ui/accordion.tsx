"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const accordionDown = stylex.keyframes({
  from: { height: 0 },
  to: { height: "var(--accordion-panel-height)" },
});

const accordionUp = stylex.keyframes({
  from: { height: "var(--accordion-panel-height)" },
  to: { height: 0 },
});

const styles = stylex.create({
  contentBody: {
    height: "var(--accordion-panel-height)",
    paddingBottom: "0.625rem",
    paddingTop: 0,
  },
  header: {
    display: "flex",
    margin: 0,
  },
  icon: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    marginLeft: "auto",
    pointerEvents: "none",
    transitionDuration: "200ms",
    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
    width: "1rem",
  },
  iconOpen: {
    transform: "rotate(180deg)",
  },
  item: {
    ":not(:last-child)": {
      borderBottomColor: colors.border,
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
    },
  },
  link: {
    color: {
      ":hover": colors.foreground,
      default: "inherit",
    },
    textDecorationLine: "underline",
    textUnderlineOffset: "3px",
  },
  panel: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    overflow: "hidden",
  },
  panelClosed: {
    animationDuration: "0.2s",
    animationName: accordionUp,
    animationTimingFunction: "ease-out",
  },
  panelOpen: {
    animationDuration: "0.2s",
    animationName: accordionDown,
    animationTimingFunction: "ease-out",
  },
  paragraph: {
    marginBottom: {
      ":not(:last-child)": "1rem",
      default: null,
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  trigger: {
    alignItems: "flex-start",
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRadius: radius.md,
    borderRightWidth: 0,
    borderStyle: "none",
    borderTopWidth: 0,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    color: colors.foreground,
    cursor: "pointer",
    display: "flex",
    flex: 1,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "1rem",
    justifyContent: "space-between",
    lineHeight: "1.25rem",
    outline: "none",
    outlineColor: {
      ":focus-visible": colors.ring,
      default: null,
    },
    outlineStyle: {
      ":focus-visible": "solid",
      default: null,
    },
    outlineWidth: {
      ":focus-visible": "1px",
      default: null,
    },
    paddingBottom: "0.625rem",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "0.625rem",
    position: "relative",
    textAlign: "left",
    textDecorationLine: {
      ":hover": "underline",
      default: "none",
    },
    transitionDuration: "150ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  triggerDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
});

export type AccordionProps = Omit<AccordionPrimitive.Root.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Accordion = ({ className, style, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root
    data-slot="accordion"
    {...props}
    {...stylex.props(styles.root, customClassName(className), style)}
  />
);

export type AccordionItemProps = Omit<
  AccordionPrimitive.Item.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AccordionItem = ({ className, style, ...props }: AccordionItemProps) => (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    {...props}
    {...stylex.props(styles.item, customClassName(className), style)}
  />
);

export type AccordionTriggerProps = Omit<
  AccordionPrimitive.Trigger.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AccordionTrigger = ({
  className,
  children,
  style,
  ...props
}: AccordionTriggerProps) => (
  <AccordionPrimitive.Header {...stylex.props(styles.header)}>
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      render={(renderProps, state) => (
        <button
          type="button"
          {...renderProps}
          {...stylex.props(
            styles.trigger,
            state.disabled && styles.triggerDisabled,
            customClassName(className),
            style
          )}
        >
          {children}
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            {...stylex.props(styles.icon, state.open && styles.iconOpen)}
          />
        </button>
      )}
      {...props}
    />
  </AccordionPrimitive.Header>
);

export type AccordionContentProps = Omit<
  AccordionPrimitive.Panel.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const AccordionContent = ({
  className,
  children,
  style,
  ...props
}: AccordionContentProps) => (
  <AccordionPrimitive.Panel
    data-slot="accordion-content"
    className={(state) =>
      stylex.props(
        styles.panel,
        state.open ? styles.panelOpen : styles.panelClosed,
        customClassName(className),
        style
      ).className
    }
    {...props}
  >
    <div {...stylex.props(styles.contentBody)}>{children}</div>
  </AccordionPrimitive.Panel>
);

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  styles as accordionStyles,
};
