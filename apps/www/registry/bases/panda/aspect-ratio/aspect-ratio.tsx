import { css, cx } from "styled-system/css";

const aspectRatio = css({
  position: "relative",
  width: "100%",
});

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & { ratio?: number }) => (
  <div
    className={cx(aspectRatio, className)}
    data-slot="aspect-ratio"
    style={{ aspectRatio: String(ratio), ...style }}
    {...props}
  >
    {children}
  </div>
);

export { AspectRatio };
