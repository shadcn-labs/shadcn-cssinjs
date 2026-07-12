import { useRender } from "@base-ui/react";
import type { TokenamiStyle, Variants } from "@tokenami/css";

import { css } from "@/lib/tokenami";

import { Separator } from "../separator/separator";

const group = css.compose({
  "--align-items": "stretch",
  "--background-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--display": "inline-flex",
  "--gap": "var(---, 1px)",
  "--overflow": "hidden",
  "--width": "var(---, fit-content)",

  variants: {
    orientation: {
      horizontal: {},
      vertical: { "--flex-direction": "column" },
    },
  },
});

const text = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_muted)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--padding-inline": 4,
});

const separator = css.compose({
  "--align-self": "stretch",
  "--background-color": "var(--color_input)",
  "--margin": 0,
});

type GroupVariants = Variants<typeof group>;

const ButtonGroup = ({
  className,
  style,
  orientation = "horizontal",
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & GroupVariants) => {
  const [cn, sx] = group({ orientation });
  return (
    <div
      className={cn(className)}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      style={sx(style)}
      {...props}
    />
  );
};

const ButtonGroupText = ({
  className,
  style,
  render,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  render?: useRender.RenderProp;
}) => {
  const [cn, sx] = text();
  return useRender({
    props: {
      className: cn(className),
      "data-slot": "button-group-text",
      style: sx(style),
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
  const [cn] = separator();
  return (
    <Separator
      className={cn(className)}
      data-slot="button-group-separator"
      orientation={orientation}
      {...props}
    />
  );
};

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
