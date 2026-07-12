import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const aspectRatio = css.compose({
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & { ratio?: number }) => {
  const [cn, sx] = aspectRatio();
  return (
    <div
      className={cn(className)}
      data-slot="aspect-ratio"
      style={sx({ "--aspect-ratio": String(ratio) }, style)}
      {...props}
    >
      {children}
    </div>
  );
};

export { AspectRatio };
