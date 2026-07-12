import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const label = css.compose({
  "--align-items": "center",
  "--color": "var(--color_foreground)",
  "--display": "inline-flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--line-height": "var(---, 1)",
  "--user-select": "none",
});

const Label = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"label">>) => {
  const [cn, sx] = label();
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor/children supplied by consumer
    <label
      className={cn(className)}
      data-slot="label"
      style={sx(style)}
      {...props}
    />
  );
};

export { Label };
