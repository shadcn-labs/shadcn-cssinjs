import type { ReactNode } from "react";

import type { ComponentBase } from "@/components/base-provider";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { getAvailableBases } from "@/lib/registry";

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
  const bases: ComponentBase[] = name
    ? await getAvailableBases(name)
    : ["stylex"];

  const sources: Partial<Record<ComponentBase, ReactNode>> = {};
  const sourcePreviews: Partial<Record<ComponentBase, ReactNode>> = {};

  if (name) {
    for (const base of bases) {
      sources[base] = (
        <ComponentSource base={base} collapsible={false} name={name} />
      );
      sourcePreviews[base] = (
        <ComponentSource
          base={base}
          collapsible={false}
          maxLines={6}
          name={name}
        />
      );
    }
  }

  return (
    <ComponentPreviewTabs
      align={align}
      bases={bases}
      className={className}
      component={children}
      direction={direction}
      hideCode={hideCode || !name}
      name={name}
      previewClassName={previewClassName}
      sourcePreviews={sourcePreviews}
      sources={sources}
    />
  );
};
