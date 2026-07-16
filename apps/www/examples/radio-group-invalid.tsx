import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/stylex/ui/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";

export default function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-xs" data-invalid>
      <FieldLegend variant="label">Notification Preference</FieldLegend>
      <FieldDescription>Select how you want to be notified.</FieldDescription>
      <RadioGroup aria-invalid>
        <Field orientation="horizontal">
          <RadioGroupItem id="invalid-1" value="all" />
          <FieldLabel className="font-normal" htmlFor="invalid-1">
            All notifications
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="invalid-2" value="mentions" />
          <FieldLabel className="font-normal" htmlFor="invalid-2">
            Direct mentions only
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}
