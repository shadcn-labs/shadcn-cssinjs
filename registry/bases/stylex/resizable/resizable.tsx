"use client";

import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cx, x } from "@/lib/utils";

import { styles } from "./resizable.stylex";

const ResizablePanelGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Group> & { className?: string }) => {
  const p = x(styles.group);
  return (
    <Group
      className={cx(p.className, className)}
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
  const handle = x(styles.handle);
  const grip = x(styles.grip);
  return (
    <Separator
      className={cx(handle.className, className)}
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
