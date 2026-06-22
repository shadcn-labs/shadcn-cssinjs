import { Field, FieldLabel } from "@/registry/bases/stylex/field/field";
import { Switch } from "@/registry/bases/stylex/switch/switch";

export default function SwitchDisabled() {
  return (
    <Field className="w-fit" data-disabled orientation="horizontal">
      <Switch disabled id="switch-disabled-unchecked" />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  );
}
