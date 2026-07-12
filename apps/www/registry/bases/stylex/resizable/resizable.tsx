"use client";

import * as stylex from "@stylexjs/stylex";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { styles } from "./resizable.stylex";

const ResizablePanelGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Group> & { className?: string }) => {
  const p = stylex.props(styles.group);
  return (
    <Group
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="resizable-panel-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
  const handle = stylex.props(styles.handle);
  const grip = stylex.props(styles.grip);
  return (
    <Separator
      className={
        [handle.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="resizable-handle"
      style={{ ...handle.style, ...style }}
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
