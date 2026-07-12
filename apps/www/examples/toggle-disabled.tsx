import { UnderlineIcon } from "lucide-react";

import { Toggle } from "@/registry/bases/stylex/toggle/toggle";

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle underline" disabled>
      <UnderlineIcon size={16} />
    </Toggle>
  );
}
