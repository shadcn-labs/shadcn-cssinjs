import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/stylex/ui/toggle";

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon size={16} />
      Italic
    </Toggle>
  );
}
