import { Field, FieldLabel } from "@/registry/bases/stylex/ui/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/stylex/ui/radio-group";

export default function RadioGroupDisabled() {
  return (
    <RadioGroup className="w-fit" defaultValue="option2">
      <Field data-disabled orientation="horizontal">
        <RadioGroupItem disabled id="disabled-1" value="option1" />
        <FieldLabel className="font-normal" htmlFor="disabled-1">
          Disabled
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="disabled-2" value="option2" />
        <FieldLabel className="font-normal" htmlFor="disabled-2">
          Option 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="disabled-3" value="option3" />
        <FieldLabel className="font-normal" htmlFor="disabled-3">
          Option 3
        </FieldLabel>
      </Field>
    </RadioGroup>
  );
}
