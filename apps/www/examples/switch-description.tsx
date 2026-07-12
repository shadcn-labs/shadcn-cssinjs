import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/stylex/field/field";
import { Switch } from "@/registry/bases/stylex/switch/switch";

export default function SwitchDescription() {
  return (
    <Field className="max-w-sm" orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          Share across devices
        </FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
  );
}
