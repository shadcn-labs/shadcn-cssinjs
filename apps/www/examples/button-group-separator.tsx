import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/stylex/button-group/button-group";
import { Button } from "@/registry/bases/stylex/button/button";

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
