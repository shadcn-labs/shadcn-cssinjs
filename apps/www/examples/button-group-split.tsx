import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/stylex/ui/button-group";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <PlusIcon className="size-4" />
      </Button>
    </ButtonGroup>
  );
}
