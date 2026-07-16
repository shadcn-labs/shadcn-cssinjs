"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  grip: {
    alignItems: "center",
    backgroundColor: colors.border,
    borderRadius: radius.sm,
    display: "flex",
    height: "1rem",
    justifyContent: "center",
    width: "0.75rem",
    zIndex: 10,
  },
  group: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  handle: {
    alignItems: "center",
    backgroundColor: colors.border,
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    position: "relative",
    width: "1px",
  },
});

const ResizablePanelGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Group> & { className?: string }) => (
  <Group
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="resizable-panel-group"
    {...props}
  />
);

const ResizablePanel = (props: React.ComponentProps<typeof Panel>) => (
  <Panel data-slot="resizable-panel" {...props} />
);

const ResizableHandle = ({
  withHandle,
  className,
  style,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
  className?: string;
}) => {
  const grip = stylex.props(styles.grip);
  return (
    <Separator
      {...stylex.props(
        styles.handle,
        customClassName(className),
        style as StyleXStyles
      )}
      data-slot="resizable-handle"
      {...props}
    >
      {withHandle && (
        <div className={grip.className} style={grip.style}>
          <GripVerticalIcon size={10} />
        </div>
      )}
    </Separator>
  );
};

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
