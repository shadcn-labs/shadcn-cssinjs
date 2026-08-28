import { Button } from "@/registry/bases/stylex/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/stylex/ui/button-group";

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}
