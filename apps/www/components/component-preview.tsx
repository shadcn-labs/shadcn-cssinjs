import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { getComponent } from "@/examples/__index__";

export const ComponentPreview = ({
  name,
  className,
  previewClassName,
  align = "center",
  direction = "ltr",
  hideCode = false,
}: {
  name?: string;
  className?: string;
  previewClassName?: string;
  align?: "center" | "start" | "end";
  direction?: "ltr" | "rtl";
  hideCode?: boolean;
}) => {
  if (!name) {
    return null;
  }

  const Component = getComponent(name);

  if (!Component) {
    return (
      <p className="mt-6 text-sm text-muted-foreground">
        Component{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  return (
    <ComponentPreviewTabs
      align={align}
      className={className}
      component={<Component />}
      direction={direction}
      hideCode={hideCode}
      previewClassName={previewClassName}
      source={<ComponentSource collapsible={false} name={name} />}
      sourcePreview={
        <ComponentSource collapsible={false} maxLines={6} name={name} />
      }
    />
  );
};
