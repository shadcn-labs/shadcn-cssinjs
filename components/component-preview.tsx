import type { ReactNode } from "react";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";

export const ComponentPreview = ({
  name,
  children,
  className,
  previewClassName,
  align = "center",
  direction = "ltr",
  hideCode = false,
}: {
  name?: string;
  children?: ReactNode;
  className?: string;
  previewClassName?: string;
  align?: "center" | "start" | "end";
  direction?: "ltr" | "rtl";
  hideCode?: boolean;
}) => (
  <ComponentPreviewTabs
    align={align}
    className={className}
    component={children}
    direction={direction}
    hideCode={hideCode || !name}
    previewClassName={previewClassName}
    source={name ? <ComponentSource collapsible={false} name={name} /> : null}
    sourcePreview={
      name ? (
        <ComponentSource collapsible={false} maxLines={6} name={name} />
      ) : null
    }
  />
);
