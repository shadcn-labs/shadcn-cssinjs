"use client";

import type { TokenamiStyle } from "@tokenami/css";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { css } from "@/lib/tokenami";

const group = css.compose({
  "--display": "flex",
  "--height": "var(---, 100%)",
  "--width": "var(---, 100%)",
});

const handle = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_border)",
  "--display": "flex",
  "--flex-shrink": "var(---, 0)",
  "--justify-content": "center",
  "--position": "relative",
  "--width": "var(---, 1px)",
});

const grip = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_border)",
  "--border-radius": "var(--radii_sm)",
  "--display": "flex",
  "--height": 4,
  "--justify-content": "center",
  "--width": 3,
  "--z-index": "var(---, 10)",
});

const ResizablePanelGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<Omit<React.ComponentProps<typeof Group>, "style">> & {
  className?: string;
}) => {
  const [cn, sx] = group();
  return (
    <Group
      className={cn(className)}
      data-slot="resizable-panel-group"
      style={sx(style)}
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
}: TokenamiStyle<Omit<React.ComponentProps<typeof Separator>, "style">> & {
  withHandle?: boolean;
  className?: string;
}) => {
  const [cn, sx] = handle();
  const [gcn, gsx] = grip();
  return (
    <Separator
      className={cn(className)}
      data-slot="resizable-handle"
      style={sx(style)}
      {...props}
    >
      {withHandle && (
        <div className={gcn()} style={gsx()}>
          <GripVerticalIcon size={10} />
        </div>
      )}
    </Separator>
  );
};

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
