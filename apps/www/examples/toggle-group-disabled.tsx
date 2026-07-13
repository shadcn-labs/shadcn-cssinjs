import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/stylex/ui/toggle-group";

export default function ToggleGroupDisabled() {
  return (
    <ToggleGroup disabled>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
