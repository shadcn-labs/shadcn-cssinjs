"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { css, cx } from "styled-system/css";

const rootWrapper = css({
  display: "flex",
  flexDirection: "column",
  gap: "2",
  width: "100%",
});

const track = css({
  backgroundColor: "color-mix(in oklab, var(--primary) 20%, transparent)",
  borderRadius: "full",
  height: "2",
  overflow: "hidden",
  position: "relative",
  width: "100%",
});

const indicator = css({
  backgroundColor: "primary",
  height: "100%",
  transitionDuration: "200ms",
  transitionProperty: "all",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
});

const label = css({
  fontSize: "0.875rem",
  fontWeight: "medium",
});

const value = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
});

const Progress = ({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Root
    className={cx(rootWrapper, className)}
    data-slot="progress"
    {...props}
  >
    {children}
    <ProgressPrimitive.Track className={track} data-slot="progress-track">
      <ProgressPrimitive.Indicator
        className={indicator}
        data-slot="progress-indicator"
      />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
);

const ProgressLabel = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Label>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Label
    className={cx(label, className)}
    data-slot="progress-label"
    {...props}
  />
);

const ProgressValue = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Value>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Value
    className={cx(value, className)}
    data-slot="progress-value"
    {...props}
  />
);

export { Progress, ProgressLabel, ProgressValue };
