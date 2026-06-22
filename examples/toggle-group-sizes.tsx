import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/toggle-group/toggle-group";

const SIDES = ["top", "bottom", "left", "right"];

export default function ToggleGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup defaultValue={["top"]} size="sm" variant="outline">
        {SIDES.map((side) => (
          <ToggleGroupItem
            aria-label={`Toggle ${side}`}
            key={side}
            value={side}
          >
            {side.charAt(0).toUpperCase() + side.slice(1)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup defaultValue={["top"]} variant="outline">
        {SIDES.map((side) => (
          <ToggleGroupItem
            aria-label={`Toggle ${side}`}
            key={side}
            value={side}
          >
            {side.charAt(0).toUpperCase() + side.slice(1)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
