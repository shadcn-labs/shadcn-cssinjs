import { SearchIcon } from "lucide-react";

import { ButtonGroup } from "@/registry/bases/stylex/button-group/button-group";
import { Button } from "@/registry/bases/stylex/button/button";
import { Input } from "@/registry/bases/stylex/input/input";

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon className="size-4" />
      </Button>
    </ButtonGroup>
  );
}
