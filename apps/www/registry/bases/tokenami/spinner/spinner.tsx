import type { TokenamiStyle } from "@tokenami/css";
import { Loader2Icon } from "lucide-react";

import { css } from "@/lib/tokenami";

const spinner = css.compose({
  "--animation-duration": "var(---, 1s)",
  "--animation-iteration-count": "infinite",
  "--animation-name": "tokenami-spin",
  "--animation-timing-function": "linear",
  "--flex-shrink": 0,
  "--height": 4,
  "--width": 4,
});

const Spinner = ({
  className,
  style,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"svg">, "style">>) => {
  const [cn, sx] = spinner();
  return (
    <Loader2Icon
      aria-label="Loading"
      className={cn(className)}
      data-slot="spinner"
      role="status"
      style={sx(style)}
      {...props}
    />
  );
};

export { Spinner };
