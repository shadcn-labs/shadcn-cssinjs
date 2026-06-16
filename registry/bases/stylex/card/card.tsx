import type { StyleXStyles } from "@stylexjs/stylex";
import { styles } from "./card.stylex";

import { cx, x } from "@/lib/utils";

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

const Card = makeSlot("card", styles.card);
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
