import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/stylex/ui/toggle";

export default function ToggleOutline() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
      <ItalicIcon size={16} />
    </Toggle>
  );
}
