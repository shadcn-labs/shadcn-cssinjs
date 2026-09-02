"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";
import * as ResizablePrimitive from "react-resizable-panels";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

interface ResizablePanelGroupContextValue {
  orientation?: "horizontal" | "vertical";
}

const ResizablePanelGroupContext =
  React.createContext<ResizablePanelGroupContextValue>({
    orientation: "horizontal",
  });

const styles = stylex.create({
  group: {
    boxSizing: "border-box",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupVertical: {
    flexDirection: "column",
  },
  handle: {
    "::after": {
      bottom: 0,
      content: '""',
      left: "50%",
      position: "absolute",
      top: 0,
      transform: "translateX(-50%)",
      width: "0.25rem",
    },
    alignItems: "center",
    backgroundColor: colors.border,
    boxShadow: {
      ":focus-visible": `0 0 0 1px ${colors.ring}`,
      default: null,
    },
    display: "flex",
    justifyContent: "center",
    outline: "none",
    position: "relative",
    width: "1px",
  },
  handleGrip: {
    backgroundColor: colors.border,
    borderRadius: radius.md,
    display: "flex",
    flexShrink: 0,
    height: "1.5rem",
    width: "0.25rem",
    zIndex: 10,
  },
  handleGripHorizontal: {
    transform: "rotate(90deg)",
  },
  handleHorizontal: {
    "::after": {
      bottom: "auto",
      height: "0.25rem",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "100%",
    },
    height: "1px",
    width: "100%",
  },
});

export type ResizablePanelGroupProps = Omit<
  ResizablePrimitive.GroupProps,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ResizablePanelGroup = ({
  className,
  orientation = "horizontal",
  style,
  ...props
}: ResizablePanelGroupProps) => {
  const isVertical =
    orientation === "vertical" ||
    (props as { direction?: string }).direction === "vertical";
  const resolvedOrientation = isVertical ? "vertical" : "horizontal";

  return (
    <ResizablePanelGroupContext.Provider
      value={{ orientation: resolvedOrientation }}
    >
      <ResizablePrimitive.Group
        data-slot="resizable-panel-group"
        orientation={resolvedOrientation}
        {...stylex.props(
          styles.group,
          isVertical && styles.groupVertical,
          customClassName(className),
          style as StyleXStyles
        )}
        {...props}
      />
    </ResizablePanelGroupContext.Provider>
  );
};

export type ResizablePanelProps = ResizablePrimitive.PanelProps;

const ResizablePanel = ({ ...props }: ResizablePanelProps) => (
  <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
);

export type ResizableHandleProps = Omit<
  ResizablePrimitive.SeparatorProps,
  "style"
> & {
  withHandle?: boolean;
  className?: string;
  style?: StyleXStyles;
};

const ResizableHandle = ({
  withHandle,
  className,
  style,
  ...props
}: ResizableHandleProps) => {
  const { orientation: groupOrientation } = React.useContext(
    ResizablePanelGroupContext
  );
  const isHorizontal = groupOrientation === "vertical";

  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      {...stylex.props(
        styles.handle,
        isHorizontal && styles.handleHorizontal,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    >
      {withHandle && (
        <div
          {...stylex.props(
            styles.handleGrip,
            isHorizontal && styles.handleGripHorizontal
          )}
        />
      )}
    </ResizablePrimitive.Separator>
  );
};

export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  styles as resizableStyles,
};
