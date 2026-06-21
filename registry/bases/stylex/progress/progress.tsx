"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cx, x } from "@/lib/utils";

import { styles } from "./progress.stylex";

const Progress = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Root data-slot="progress" style={style} {...props}>
    <ProgressPrimitive.Track
      className={cx(x(styles.root).className, className)}
      data-slot="progress-track"
    >
      <ProgressPrimitive.Indicator
        className={x(styles.indicator).className}
        data-slot="progress-indicator"
      />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
);

export { Progress };
