import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/toggle-group/toggle-group";

const SIDES = ["top", "bottom", "left", "right"];

export default function ToggleGroupSpacing() {
  return (
    <ToggleGroup defaultValue={["top"]} size="sm" spacing={2} variant="outline">
      {SIDES.map((side) => (
        <ToggleGroupItem aria-label={`Toggle ${side}`} key={side} value={side}>
          {side.charAt(0).toUpperCase() + side.slice(1)}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
