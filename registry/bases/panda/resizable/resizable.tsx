"use client";

import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { css, cx } from "styled-system/css";

const group = css({
  display: "flex",
  height: "100%",
  width: "100%",
});

const handle = css({
  alignItems: "center",
  backgroundColor: "border",
  display: "flex",
  flexShrink: "0",
  justifyContent: "center",
  position: "relative",
  width: "1px",
});

const grip = css({
  alignItems: "center",
  backgroundColor: "border",
  borderRadius: "sm",
  display: "flex",
  height: "4",
  justifyContent: "center",
  width: "3",
  zIndex: "10",
});

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group> & { className?: string }) => (
  <Group
    className={cx(group, className)}
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
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
  className?: string;
}) => (
  <Separator
    className={cx(handle, className)}
    data-slot="resizable-handle"
    {...props}
  >
    {withHandle && (
      <div className={grip}>
        <GripVerticalIcon size={10} />
      </div>
    )}
  </Separator>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
