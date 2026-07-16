import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";
import { Switch } from "@/registry/bases/stylex/ui/switch";

export default function FieldSwitch() {
  return (
    <Field className="w-fit" orientation="horizontal">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  );
}
