import { MinusIcon, PlusIcon } from "lucide-react";

import { ButtonGroup } from "@/registry/bases/stylex/button-group/button-group";
import { Button } from "@/registry/bases/stylex/button/button";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon className="size-4" />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon className="size-4" />
      </Button>
    </ButtonGroup>
  );
}
