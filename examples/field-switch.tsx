import { Field, FieldLabel } from "@/registry/bases/stylex/field/field";
import { Switch } from "@/registry/bases/stylex/switch/switch";

export default function FieldSwitch() {
  return (
    <Field className="w-fit" orientation="horizontal">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  );
}
