import { Loader2Icon } from "lucide-react";
import { css, cx } from "styled-system/css";

const spinner = css({
  animation: "spin",
  flexShrink: "0",
  height: "4",
  width: "4",
});

const Spinner = ({
  className,
  ...props
}: React.ComponentProps<typeof Loader2Icon>) => (
  <Loader2Icon
    aria-label="Loading"
    className={cx(spinner, className)}
    data-slot="spinner"
    role="status"
    {...props}
  />
);

export { Spinner };
