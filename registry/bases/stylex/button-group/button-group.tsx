import { useRender } from "@base-ui/react";

import { cx, x } from "@/lib/utils";

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
  const p = x(styles.group, orientation === "vertical" && styles.vertical);
  return (
    <div
      className={cx(p.className, className)}
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
  const p = x(styles.text);
  return useRender({
    props: {
      className: cx(p.className, className),
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
  const p = x(styles.separator);
  return (
    <Separator
      className={cx(p.className, className)}
      data-slot="button-group-separator"
      orientation={orientation}
      {...props}
    />
  );
};

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
