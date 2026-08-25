import { css, cx } from "styled-system/css";

const skeleton = css({
  animation: "pulse",
  backgroundColor: "color-mix(in oklab, var(--muted) 50%, transparent)",
  borderRadius: "md",
});

const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(skeleton, className)} data-slot="skeleton" {...props} />
);

export { Skeleton };
