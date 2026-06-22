import type { StyleXStyles } from "@stylexjs/stylex";

import { cx, x } from "@/lib/utils";

import { styles } from "./card.stylex";

type DivProps = React.ComponentProps<"div">;

const makeSlot =
  (slot: string, style: StyleXStyles) =>
  ({ className, style: styleProp, ...props }: DivProps) => {
    const p = x(style);
    return (
      <div
        data-slot={slot}
        className={cx(p.className, className)}
        style={{ ...p.style, ...styleProp }}
        {...props}
      />
    );
  };

const Card = ({
  className,
  style,
  size = "default",
  ...props
}: DivProps & { size?: "default" | "sm" }) => {
  const p = x(styles.card);
  return (
    <div
      className={cx(p.className, className)}
      data-size={size}
      data-slot="card"
      style={
        size === "sm"
          ? ({
              "--card-spacing": "0.75rem",
              ...p.style,
              ...style,
            } as React.CSSProperties)
          : { ...p.style, ...style }
      }
      {...props}
    />
  );
};

const CardHeader = makeSlot("card-header", styles.header);
const CardTitle = makeSlot("card-title", styles.title);
const CardDescription = makeSlot("card-description", styles.description);
const CardAction = makeSlot("card-action", styles.action);
const CardContent = makeSlot("card-content", styles.content);
const CardFooter = makeSlot("card-footer", styles.footer);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
