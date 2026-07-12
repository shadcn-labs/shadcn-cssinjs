import type { TokenamiStyle } from "@tokenami/css";
import { ChevronDownIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const wrapper = css.compose({
  "--position": "relative",
  "--width": "var(---, fit-content)",
});

const select = css.compose({
  "--appearance": "none",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--focus-visible_border-color": "var(--color_ring)",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
  "--min-width": "var(---, 0)",
  "--outline-style": "none",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color, box-shadow, border-color)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",

  variants: {
    size: {
      default: {
        "--height": 9,
        "--padding-block": 2,
        "--padding-inline-end": 9,
        "--padding-inline-start": 3,
      },
      sm: {
        "--border-radius": "var(--radii_sm)",
        "--font-size": "0.75rem",
        "--height": 8,
        "--padding-block": 1,
        "--padding-inline-end": 7,
        "--padding-inline-start": 2.5,
      },
    },
  },
});

const icon = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--opacity": 0.5,
  "--pointer-events": "none",
  "--position": "absolute",
  "--top": "var(---, 50%)",
  "--transform": "var(---, translateY(-50%))",
  "--user-select": "none",

  variants: {
    size: {
      default: {
        "--height": 4,
        "--inset-inline-end": 3.5,
        "--width": 4,
      },
      sm: {
        "--height": 3.5,
        "--inset-inline-end": 2.5,
        "--width": 3.5,
      },
    },
  },
});

const NativeSelect = ({
  className,
  style,
  size = "default",
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<"select">, "size" | "style">> & {
  className?: string;
  size?: "sm" | "default";
}) => {
  const [wcn, wsx] = wrapper();
  const [scn, ssx] = select({ size });
  const [icn, isx] = icon({ size });
  return (
    <div
      className={wcn(className)}
      data-size={size}
      data-slot="native-select-wrapper"
      style={wsx(style)}
    >
      <select
        className={scn()}
        data-size={size}
        data-slot="native-select"
        style={ssx()}
        {...props}
      />
      <ChevronDownIcon
        aria-hidden="true"
        className={icn()}
        data-slot="native-select-icon"
        style={isx()}
      />
    </div>
  );
};

const NativeSelectOption = (props: React.ComponentProps<"option">) => (
  <option data-slot="native-select-option" {...props} />
);

const NativeSelectOptGroup = (props: React.ComponentProps<"optgroup">) => (
  <optgroup data-slot="native-select-optgroup" {...props} />
);

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
