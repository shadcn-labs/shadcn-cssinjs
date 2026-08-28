"use client";

import { useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import type { CSSProperties, ReactElement } from "react";
import { Children, cloneElement, isValidElement } from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  group: {
    alignItems: "stretch",
    display: "flex",
    width: "fit-content",
  },
  nested: {
    gap: "0.5rem",
  },
  separator: {
    alignSelf: "stretch",
    backgroundColor: colors.input,
    height: "auto",
    margin: 0,
    position: "relative",
  },
  text: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: "1.25rem",
    paddingInline: "1rem",
  },
  vertical: {
    flexDirection: "column",
  },
});

type ButtonGroupOrientation = "horizontal" | "vertical";

/**
 * StyleX cannot express Tailwind's parent `[&>*]` child selectors, so the
 * corner-squaring and border-collapsing that shadcn's button-group applies
 * through them is replicated here by injecting inline overrides into each
 * direct child — the faithful equivalent of `[&>*:not(:first-child)]:border-l-0`
 * and friends.
 */
const collapseChild = (
  index: number,
  count: number,
  vertical: boolean
): CSSProperties => {
  const overrides: CSSProperties = {};
  const first = index === 0;
  const last = index === count - 1;
  if (vertical) {
    if (!first) {
      overrides.borderTopLeftRadius = 0;
      overrides.borderTopRightRadius = 0;
      overrides.borderTopWidth = 0;
    }
    if (!last) {
      overrides.borderBottomLeftRadius = 0;
      overrides.borderBottomRightRadius = 0;
    }
    return overrides;
  }
  if (!first) {
    overrides.borderTopLeftRadius = 0;
    overrides.borderBottomLeftRadius = 0;
    overrides.borderLeftWidth = 0;
  }
  if (!last) {
    overrides.borderTopRightRadius = 0;
    overrides.borderBottomRightRadius = 0;
  }
  return overrides;
};

const ButtonGroup = ({
  className,
  style,
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: ButtonGroupOrientation;
}) => {
  const vertical = orientation === "vertical";
  const items = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<{
    style?: CSSProperties;
  }>[];
  const nested = items.some((child) => child.type === ButtonGroup);
  const content = nested
    ? children
    : items.map((child, index) => {
        const overrides = collapseChild(index, items.length, vertical);
        if (child.type === Input) {
          overrides.flex = "1 1 0%";
        }
        return cloneElement(child, {
          style: { ...child.props.style, ...overrides },
        });
      });

  return (
    <div
      {...stylex.props(
        styles.group,
        vertical && styles.vertical,
        nested && styles.nested,
        customClassName(className),
        style as StyleXStyles
      )}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      {...props}
    >
      {content}
    </div>
  );
};

const ButtonGroupText = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"div"> & { render?: useRender.RenderProp }) =>
  useRender({
    props: {
      ...stylex.props(
        styles.text,
        customClassName(className),
        style as StyleXStyles
      ),
      "data-slot": "button-group-text",
      ...props,
    },
    render: render ?? <div />,
  });

const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) => (
  <Separator
    {...stylex.props(styles.separator, customClassName(className))}
    data-slot="button-group-separator"
    orientation={orientation}
    {...props}
  />
);

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
