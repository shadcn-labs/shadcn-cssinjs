import type { ReactNode } from "react";

import type { ComponentBase } from "@/components/base-provider";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { DEFAULT_BASE } from "@/lib/bases";
import { getAvailableBases, hasDemo } from "@/lib/registry";

export const ComponentPreview = async ({
  name,
  base,
  children,
  className,
  previewClassName,
  align = "center",
  direction = "ltr",
  hideCode = false,
}: {
  name?: string;
  base?: ComponentBase;
  children?: ReactNode;
  className?: string;
  previewClassName?: string;
  align?: "center" | "start" | "end";
  direction?: "ltr" | "rtl";
  hideCode?: boolean;
}) => {
  let bases: ComponentBase[] = [DEFAULT_BASE];
  if (base === DEFAULT_BASE) {
    bases = [base];
  } else if (base && name && (await hasDemo(name, base))) {
    bases = [base];
  } else if (name) {
    bases = await getAvailableBases(name);
  }

  const sources: Partial<Record<ComponentBase, ReactNode>> = {};
  const sourcePreviews: Partial<Record<ComponentBase, ReactNode>> = {};

  if (name) {
    for (const candidateBase of bases) {
      sources[candidateBase] = (
        <ComponentSource base={candidateBase} collapsible={false} name={name} />
      );
      sourcePreviews[candidateBase] = (
        <ComponentSource
          base={candidateBase}
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
      lockedBase={bases.length === 1 && bases[0] === base ? base : undefined}
      name={name}
      previewClassName={previewClassName}
      sourcePreviews={sourcePreviews}
      sources={sources}
    />
  );
};
