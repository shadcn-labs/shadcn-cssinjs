import { useRender } from "@base-ui/react";
import { css, cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

import { Separator } from "../separator/separator";

const group = cva({
  base: {
    alignItems: "stretch",
    backgroundColor: "border",
    borderRadius: "md",
    display: "inline-flex",
    gap: "1px",
    overflow: "hidden",
    width: "fit-content",
  },
  defaultVariants: { orientation: "horizontal" },
  variants: {
    orientation: {
      horizontal: {},
      vertical: { flexDirection: "column" },
    },
  },
});

const text = css({
  alignItems: "center",
  backgroundColor: "muted",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  display: "flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "2",
  paddingInline: "4",
});

const separator = css({
  alignSelf: "stretch",
  backgroundColor: "input",
  margin: "0",
});

type GroupVariants = NonNullable<RecipeVariantProps<typeof group>>;

const ButtonGroup = ({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & GroupVariants) => (
  <div
    className={cx(group({ orientation }), className)}
    data-orientation={orientation}
    data-slot="button-group"
    role="group"
    {...props}
  />
);

const ButtonGroupText = ({
  className,
  render,
  ...props
}: React.ComponentProps<"div"> & {
  render?: useRender.RenderProp;
}) =>
  useRender({
    props: {
      className: cx(text, className),
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
    className={cx(separator, className)}
    data-slot="button-group-separator"
    orientation={orientation}
    {...props}
  />
);

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
