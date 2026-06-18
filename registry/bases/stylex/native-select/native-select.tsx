import { ChevronDownIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./native-select.stylex";

const NativeSelect = ({
  className,
  style,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
}) => {
  const wrapper = x(styles.wrapper);
  const select = x(styles.select, size === "sm" && styles.selectSm);
  const icon = x(styles.icon, size === "sm" && styles.iconSm);
  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className={cx(wrapper.className, className)}
      style={{ ...wrapper.style, ...style }}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={select.className}
        style={select.style}
        {...props}
      />
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        {...icon}
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
