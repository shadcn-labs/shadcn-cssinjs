import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/toggle-group/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup defaultValue={["bold"]} multiple>
      <ToggleGroupItem aria-label="Bold" value="bold">
        <BoldIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Italic" value="italic">
        <ItalicIcon size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Underline" value="underline">
        <UnderlineIcon size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
