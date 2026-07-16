import { Button } from "@/registry/bases/stylex/ui/button";
import { ButtonGroup } from "@/registry/bases/stylex/ui/button-group";
import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";
import { Input } from "@/registry/bases/stylex/ui/input";

export default function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  );
}
