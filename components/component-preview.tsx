import type { ReactNode } from "react";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { hasTokenamiDemo } from "@/lib/registry";

export const ComponentPreview = async ({
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
}) => {
  const hasTokenami = name ? await hasTokenamiDemo(name) : false;

  return (
    <ComponentPreviewTabs
      align={align}
      className={className}
      component={children}
      direction={direction}
      hasTokenami={hasTokenami}
      hideCode={hideCode || !name}
      name={name}
      previewClassName={previewClassName}
      source={name ? <ComponentSource collapsible={false} name={name} /> : null}
      sourcePreview={
        name ? (
          <ComponentSource collapsible={false} maxLines={6} name={name} />
        ) : null
      }
      tokenamiSource={
        name && hasTokenami ? (
          <ComponentSource base="tokenami" collapsible={false} name={name} />
        ) : null
      }
      tokenamiSourcePreview={
        name && hasTokenami ? (
          <ComponentSource
            base="tokenami"
            collapsible={false}
            maxLines={6}
            name={name}
          />
        ) : null
      }
    />
  );
};
