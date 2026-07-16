import { SearchIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";
import { Input } from "@/registry/bases/stylex/ui/input";

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
