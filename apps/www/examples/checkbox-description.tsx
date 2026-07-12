import { Checkbox } from "@/registry/bases/stylex/checkbox/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";

export default function CheckboxDescription() {
  return (
    <FieldGroup className="mx-auto w-72">
      <Field orientation="horizontal">
        <Checkbox
          defaultChecked
          id="terms-checkbox-desc"
          name="terms-checkbox-desc"
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}
