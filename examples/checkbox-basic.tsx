import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";

export default function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}
