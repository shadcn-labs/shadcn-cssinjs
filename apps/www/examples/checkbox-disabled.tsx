import { Checkbox } from "@/registry/bases/stylex/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";

export default function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field data-disabled orientation="horizontal">
        <Checkbox
          disabled
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          Enable notifications
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}
