import { useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  group: {
    alignItems: "stretch",
    backgroundColor: colors.border,
    borderRadius: radius.md,
    display: "inline-flex",
    gap: "1px",
    overflow: "hidden",
    width: "fit-content",
  },
  separator: {
    alignSelf: "stretch",
    backgroundColor: colors.input,
    margin: 0,
  },
  text: {
    alignItems: "center",
    backgroundColor: colors.muted,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.md,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    paddingInline: "1rem",
  },
  vertical: {
    flexDirection: "column",
  },
});

const ButtonGroup = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    {...stylex.props(
      styles.group,
      orientation === "vertical" && styles.vertical,
      customClassName(className),
      style as StyleXStyles
    )}
    data-orientation={orientation}
    data-slot="button-group"
    role="group"
    {...props}
  />
);

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
