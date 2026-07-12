import { useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";

import { Separator } from "../separator/separator";
import { styles } from "./button-group.stylex";

const ButtonGroup = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) => {
  const p = stylex.props(
    styles.group,
    orientation === "vertical" && styles.vertical
  );
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ButtonGroupText = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"div"> & { render?: useRender.RenderProp }) => {
  const p = stylex.props(styles.text);
  return useRender({
    props: {
      className:
        [p.className, className].filter(Boolean).join(" ") || undefined,
      "data-slot": "button-group-text",
      style: { ...p.style, ...style },
      ...props,
    },
    render: render ?? <div />,
  });
};

const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) => {
  const p = stylex.props(styles.separator);
  return (
    <Separator
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="button-group-separator"
      orientation={orientation}
      {...props}
    />
  );
};

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
