import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Years
      </Button>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Months
      </Button>
      <Button style={{ borderRadius: 0 }} variant="outline">
        Days
      </Button>
    </ButtonGroup>
  );
}
