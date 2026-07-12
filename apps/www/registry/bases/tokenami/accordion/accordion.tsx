"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import type { TokenamiStyle } from "@tokenami/css";
import { ChevronDownIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const item = css.compose({
  "--border-bottom-color": "var(--color_border)",
  "--border-bottom-style": "solid",
  "--border-bottom-width": "var(---, 1px)",
});

const header = css.compose({
  "--display": "flex",
  "--margin": 0,
});

const trigger = css.compose({
  "--align-items": "flex-start",
  "--background-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 4,
  "--hover_text-decoration-line": "underline",
  "--justify-content": "space-between",
  "--outline-style": "none",
  "--padding-block": 4,
  "--text-align": "start",
  "--text-decoration-line": "none",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, all)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
});

const chevron = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--flex-shrink": 0,
  "--height": 4,
  "--margin-top": 0.5,
  "--pointer-events": "none",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": 4,
});

const panel = css.compose({
  "--font-size": "0.875rem",
  "--overflow": "hidden",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, height)",
  "--transition-timing-function": "ease-in-out",
});

const panelInner = css.compose({
  "--padding-bottom": 4,
  "--padding-top": 0,
});

const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => <AccordionPrimitive.Root data-slot="accordion" {...props} />;

const AccordionItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AccordionPrimitive.Item>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item();
  return (
    <AccordionPrimitive.Item
      className={cn(className)}
      data-slot="accordion-item"
      style={sx(style)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [hcn, hsx] = header();
  const [cn, sx] = trigger();
  const [ccn, csx] = chevron();
  return (
    <AccordionPrimitive.Header className={hcn()} style={hsx()}>
      <AccordionPrimitive.Trigger
        className={cn(className)}
        data-slot="accordion-trigger"
        render={(renderProps, state) => (
          <button type="button" {...renderProps}>
            {children}
            <ChevronDownIcon
              className={ccn()}
              style={
                state.open
                  ? csx({ "--transform": "var(---, rotate(180deg))" })
                  : csx()
              }
            />
          </button>
        )}
        style={sx(style)}
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
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof AccordionPrimitive.Panel>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = panel();
  const [icn, isx] = panelInner();
  return (
    <AccordionPrimitive.Panel
      className={cn(className)}
      data-slot="accordion-content"
      style={sx(style)}
      {...props}
    >
      <div className={icn()} style={isx()}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
