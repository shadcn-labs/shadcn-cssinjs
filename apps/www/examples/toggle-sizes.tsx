import { Toggle } from "@/registry/bases/stylex/ui/toggle";

export default function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle small" size="sm" variant="outline">
        Small
      </Toggle>
      <Toggle aria-label="Toggle default" size="default" variant="outline">
        Default
      </Toggle>
      <Toggle aria-label="Toggle large" size="lg" variant="outline">
        Large
      </Toggle>
    </div>
  );
}
