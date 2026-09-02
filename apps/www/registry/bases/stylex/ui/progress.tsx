"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  indicator: {
    backgroundColor: colors.primary,
    height: "100%",
    transitionDuration: "150ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: "1.25rem",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  track: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.full,
    display: "flex",
    height: "0.25rem",
    overflowX: "hidden",
    position: "relative",
    width: "100%",
  },
  value: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    fontVariantNumeric: "tabular-nums",
    lineHeight: "1.25rem",
    marginLeft: "auto",
  },
});

export type ProgressTrackProps = Omit<
  ProgressPrimitive.Track.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ProgressTrack = ({ className, style, ...props }: ProgressTrackProps) => (
  <ProgressPrimitive.Track
    data-slot="progress-track"
    {...stylex.props(styles.track, customClassName(className), style)}
    {...props}
  />
);

export type ProgressIndicatorProps = Omit<
  ProgressPrimitive.Indicator.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ProgressIndicator = ({
  className,
  style,
  ...props
}: ProgressIndicatorProps) => (
  <ProgressPrimitive.Indicator
    data-slot="progress-indicator"
    {...stylex.props(styles.indicator, customClassName(className), style)}
    {...props}
  />
);

export type ProgressProps = Omit<ProgressPrimitive.Root.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Progress = ({
  className,
  children,
  value,
  style,
  ...props
}: ProgressProps) => (
  <ProgressPrimitive.Root
    value={value}
    data-slot="progress"
    {...stylex.props(styles.root, customClassName(className), style)}
    {...props}
  >
    {children}
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </ProgressPrimitive.Root>
);

export type ProgressLabelProps = Omit<
  ProgressPrimitive.Label.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ProgressLabel = ({ className, style, ...props }: ProgressLabelProps) => (
  <ProgressPrimitive.Label
    data-slot="progress-label"
    {...stylex.props(styles.label, customClassName(className), style)}
    {...props}
  />
);

export type ProgressValueProps = Omit<
  ProgressPrimitive.Value.Props,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ProgressValue = ({ className, style, ...props }: ProgressValueProps) => (
  <ProgressPrimitive.Value
    data-slot="progress-value"
    {...stylex.props(styles.value, customClassName(className), style)}
    {...props}
  />
);

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
  styles as progressStyles,
};
