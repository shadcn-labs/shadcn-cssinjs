import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/ui/field";
import { Switch } from "@/registry/bases/stylex/ui/switch";

export default function SwitchInvalid() {
  return (
    <Field className="max-w-sm" data-invalid orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">
          Accept terms and conditions
        </FieldLabel>
        <FieldDescription>
          You must accept the terms and conditions to continue.
        </FieldDescription>
      </FieldContent>
      <Switch aria-invalid id="switch-terms" />
    </Field>
  );
}
