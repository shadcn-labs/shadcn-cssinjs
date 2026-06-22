import { PlusIcon } from "lucide-react";

import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/stylex/button-group/button-group";
import { Button } from "@/registry/bases/stylex/button/button";

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
